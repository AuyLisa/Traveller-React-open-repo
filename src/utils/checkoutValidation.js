import { getEmailFieldError, getPhoneFieldError } from './formValidation';

const MIN_BIRTH_STR = '1900-01-01';
const MAX_AGE_YEARS = 120;

/** РФ: серия 4 цифры, номер 6 цифр (после удаления нецифровых символов) */
const RF_SERIES_LEN = 4;
const RF_NUMBER_LEN = 6;

/** Общая нормализация ввода — совпадает с проверкой в validatePassengerPassport */
export function normalizeRfPassportSeries(raw) {
  return String(raw ?? '')
    .replace(/\D/g, '')
    .slice(0, RF_SERIES_LEN);
}

export function normalizeRfPassportNumber(raw) {
  return String(raw ?? '')
    .replace(/\D/g, '')
    .slice(0, RF_NUMBER_LEN);
}

function parseIsoDateOnly(str) {
  if (!str || typeof str !== 'string') return null;
  const t = str.trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  const dt = new Date(y, mo, d);
  if (
    dt.getFullYear() !== y ||
    dt.getMonth() !== mo ||
    dt.getDate() !== d
  ) {
    return null;
  }
  return dt;
}

function todayDateOnly() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function toIsoDateString(d) {
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  return `${y}-${mo}-${da}`;
}

function maxBirthDate() {
  return toIsoDateString(todayDateOnly());
}

function minBirthDateForAge() {
  const t = todayDateOnly();
  t.setFullYear(t.getFullYear() - MAX_AGE_YEARS);
  return toIsoDateString(t);
}

export function validatePassengerPassport(passenger) {
  const p = passenger || {};
  const err = {};

  if (!p.firstName?.trim()) err.firstName = 'Укажите имя';
  if (!p.lastName?.trim()) err.lastName = 'Укажите фамилию';

  const birthRaw = p.birthDate?.trim() ?? '';
  if (!birthRaw) {
    err.birthDate = 'Укажите дату рождения';
  } else {
    const birth = parseIsoDateOnly(birthRaw);
    const oldestAllowed = parseIsoDateOnly(minBirthDateForAge());
    const floor1900 = parseIsoDateOnly(MIN_BIRTH_STR);
    const lowerBound =
      oldestAllowed && floor1900
        ? oldestAllowed > floor1900
          ? oldestAllowed
          : floor1900
        : oldestAllowed || floor1900;

    if (!birth) {
      err.birthDate = 'Некорректная дата рождения';
    } else {
      const today = todayDateOnly();
      if (birth > today) {
        err.birthDate = 'Дата рождения не может быть в будущем';
      } else if (lowerBound && birth < lowerBound) {
        err.birthDate = `Укажите реалистичную дату: не ранее ${MIN_BIRTH_STR.split('-').reverse().join('.')} и не старше ${MAX_AGE_YEARS} лет`;
      }
    }
  }

  const seriesDigits = normalizeRfPassportSeries(p.passportSeries);
  const numberDigits = normalizeRfPassportNumber(p.passportNumber);
  if (!seriesDigits) {
    err.passportSeries = 'Укажите серию паспорта (4 цифры)';
  } else if (seriesDigits.length !== RF_SERIES_LEN) {
    err.passportSeries = `Серия паспорта РФ — ${RF_SERIES_LEN} цифры`;
  }
  if (!numberDigits) {
    err.passportNumber = 'Укажите номер паспорта (6 цифр)';
  } else if (numberDigits.length !== RF_NUMBER_LEN) {
    err.passportNumber = `Номер паспорта РФ — ${RF_NUMBER_LEN} цифр`;
  }

  const issueRaw = p.passportIssueDate?.trim() ?? '';
  if (!issueRaw) {
    err.passportIssueDate = 'Укажите дату выдачи';
  } else {
    const issue = parseIsoDateOnly(issueRaw);
    const birth = parseIsoDateOnly(birthRaw);
    if (!issue) {
      err.passportIssueDate = 'Некорректная дата выдачи';
    } else {
      const today = todayDateOnly();
      if (issue > today) {
        err.passportIssueDate = 'Дата выдачи не может быть в будущем';
      } else if (birth && issue <= birth) {
        err.passportIssueDate = 'Дата выдачи должна быть позже даты рождения';
      }
    }
  }

  if (!p.passportIssuedBy?.trim()) err.passportIssuedBy = 'Укажите, кем выдан';
  if (!p.citizenship?.trim()) err.citizenship = 'Укажите гражданство';

  return err;
}

export function validateCheckoutForm(values) {
  const errors = {};

  const emailErr = getEmailFieldError(values.email);
  if (emailErr) errors.email = emailErr;

  const phoneErr = getPhoneFieldError(values.phone);
  if (phoneErr) errors.phone = phoneErr;

  const passengers = Array.isArray(values.passengers) ? values.passengers : [];
  const passengerErrors = passengers.map((passenger) =>
    validatePassengerPassport(passenger),
  );

  const hasPassengerErrors = passengerErrors.some(
    (pe) => Object.keys(pe).length > 0,
  );
  if (hasPassengerErrors) {
    errors.passengers = passengerErrors;
  }

  const topKeys = Object.keys(errors).filter((k) => k !== 'passengers');
  const isValid = topKeys.length === 0 && !hasPassengerErrors;

  return {
    errors,
    isValid,
  };
}

/** Границы для input «дата рождения»: max(1900-01-01, сегодня − 120 лет) … сегодня */
export function getBirthDateInputBounds() {
  const oldest = minBirthDateForAge();
  const min = oldest > MIN_BIRTH_STR ? oldest : MIN_BIRTH_STR;
  return { min, max: maxBirthDate() };
}

export function getIssueDateInputMax() {
  return maxBirthDate();
}
