const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_RE.test(String(value).trim());
}

export const MSG_EMAIL_EMPTY = 'Укажите email';
export const MSG_EMAIL_INVALID = 'Некорректный email';
export const MSG_PHONE_EMPTY = 'Укажите телефон';
export const MSG_PHONE_INVALID =
  'Введите номер: от 10 до 15 цифр (код страны и номер без пробелов или с «+»)';

/** @returns {string|null} сообщение или null, если значение допустимо */
export function getEmailFieldError(value) {
  const em = String(value ?? '').trim();
  if (!em) return MSG_EMAIL_EMPTY;
  if (!isValidEmail(em)) return MSG_EMAIL_INVALID;
  return null;
}

/** Только цифры для проверки телефона */
export function normalizePhoneDigits(phone) {
  return String(phone ?? '').replace(/\D/g, '');
}

/** 10–15 цифр после очистки (международный номер с кодом страны). */
export function isValidPhone(phone) {
  const d = normalizePhoneDigits(phone);
  return d.length >= 10 && d.length <= 15;
}

/** @returns {string|null} */
export function getPhoneFieldError(value) {
  if (!String(value ?? '').trim()) return MSG_PHONE_EMPTY;
  if (!isValidPhone(value)) return MSG_PHONE_INVALID;
  return null;
}

export function validateRegistrationForm({ name, email, password }) {
  const errors = {};
  const n = String(name ?? '').trim();
  if (!n) errors.name = 'Укажите имя';
  const emailErr = getEmailFieldError(email);
  if (emailErr) errors.email = emailErr;
  const pw = String(password ?? '');
  if (!pw) errors.password = 'Укажите пароль';
  else if (pw.length < 6) errors.password = 'Пароль не короче 6 символов';

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

export function validateLoginForm({ email, password }) {
  const errors = {};
  const emailErr = getEmailFieldError(email);
  if (emailErr) errors.email = emailErr;
  const pw = String(password ?? '');
  if (!pw) errors.password = 'Укажите пароль';

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

export function validateSubscribeEmail(email) {
  const emailErr = getEmailFieldError(email);
  if (emailErr) return { error: emailErr, isValid: false };
  return { error: '', isValid: true };
}
