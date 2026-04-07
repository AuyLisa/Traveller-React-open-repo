const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return EMAIL_RE.test(String(value).trim());
}

export function validatePassengerPassport(passenger) {
  const p = passenger || {};
  const err = {};

  if (!p.firstName?.trim()) err.firstName = 'Укажите имя';
  if (!p.lastName?.trim()) err.lastName = 'Укажите фамилию';
  if (!p.birthDate?.trim()) err.birthDate = 'Укажите дату рождения';
  if (!p.passportSeries?.trim()) err.passportSeries = 'Укажите серию паспорта';
  if (!p.passportNumber?.trim()) err.passportNumber = 'Укажите номер паспорта';
  if (!p.passportIssueDate?.trim()) err.passportIssueDate = 'Укажите дату выдачи';
  if (!p.passportIssuedBy?.trim()) err.passportIssuedBy = 'Укажите, кем выдан';
  if (!p.citizenship?.trim()) err.citizenship = 'Укажите гражданство';

  return err;
}

export function validateCheckoutForm(values) {
  const errors = {};

  const email = values.email?.trim() ?? '';
  if (!email) {
    errors.email = 'Укажите email';
  } else if (!isValidEmail(email)) {
    errors.email = 'Некорректный email';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Укажите телефон';
  }

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
  const isValid =
    topKeys.length === 0 && !hasPassengerErrors;

  return {
    errors,
    isValid,
  };
}
