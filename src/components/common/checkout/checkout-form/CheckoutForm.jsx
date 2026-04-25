import { useState } from 'react';
import { normalizePhoneDigits } from '@utils/formValidation';
import {
  validateCheckoutForm,
  getBirthDateInputBounds,
  getIssueDateInputMax,
} from '@utils/checkoutValidation';
import PassengerPassportBlock from './PassengerPassportBlock';
import DownSelect from '@down-select/DownSelect';
import './CheckoutForm.css';

function createEmptyPassenger() {
  return {
    firstName: '',
    lastName: '',
    patronymic: '',
    birthDate: '',
    passportSeries: '',
    passportNumber: '',
    passportIssueDate: '',
    passportIssuedBy: '',
    citizenship: '',
  };
}

const EMPTY_FORM = {
  passengers: [createEmptyPassenger()],
  email: '',
  phone: '',
  comment: '',
  contactPreference: 'any',
};

function CheckoutForm({ onValidSubmit, isSubmitting }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const updatePassengerField = (index, field, value) => {
    setValues((prev) => ({
      ...prev,
      passengers: prev.passengers.map((p, i) =>
        i === index ? { ...p, [field]: value } : p,
      ),
    }));
    setErrors((prev) => {
      if (!prev.passengers?.[index]?.[field]) return prev;
      const next = { ...prev };
      const nextPe = { ...prev.passengers[index] };
      delete nextPe[field];
      const nextPassengers = [...prev.passengers];
      nextPassengers[index] = nextPe;
      next.passengers = nextPassengers;
      return next;
    });
  };

  const addPassenger = () => {
    setValues((prev) => ({
      ...prev,
      passengers: [...prev.passengers, createEmptyPassenger()],
    }));
  };

  const removePassenger = (index) => {
    if (index === 0) return;
    setValues((prev) => ({
      ...prev,
      passengers: prev.passengers.filter((_, i) => i !== index),
    }));
    setErrors((prev) => {
      if (!prev.passengers) return prev;
      const nextPassengers = prev.passengers.filter((_, i) => i !== index);
      const next = { ...prev };
      if (nextPassengers.length === 0) delete next.passengers;
      else next.passengers = nextPassengers;
      return next;
    });
  };

  const handleLoadFromProfile = () => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors: nextErrors, isValid } = validateCheckoutForm(values);
    setErrors(nextErrors);
    if (!isValid) return;

    onValidSubmit({
      passengers: values.passengers.map((p) => ({
        firstName: p.firstName.trim(),
        lastName: p.lastName.trim(),
        patronymic: p.patronymic.trim(),
        birthDate: p.birthDate,
        passportSeries: p.passportSeries.trim(),
        passportNumber: p.passportNumber.trim(),
        passportIssueDate: p.passportIssueDate,
        passportIssuedBy: p.passportIssuedBy.trim(),
        citizenship: p.citizenship.trim(),
      })),
      email: values.email.trim(),
      phone: normalizePhoneDigits(values.phone),
      comment: values.comment.trim(),
      contactPreference: values.contactPreference,
    });
  };

  const passengerErrorsAt = (i) => errors.passengers?.[i] || {};

  const birthBounds = getBirthDateInputBounds();
  const issueDateMax = getIssueDateInputMax();

  return (
    <form className="checkout-form" onSubmit={handleSubmit} noValidate>
      <h2 className="checkout-form__title">Ваши данные</h2>

      <div className="checkout-form__toolbar">
        <button
          type="button"
          className="checkout-form__load-profile"
          onClick={handleLoadFromProfile}
          disabled={isSubmitting}
        >
          Загрузить данные из личного кабинета
        </button>
        <p className="checkout-form__toolbar-hint">
          Функция появится после подключения личного кабинета.
        </p>
      </div>

      <div className="checkout-form__passengers">
        {values.passengers.map((passenger, index) => (
          <PassengerPassportBlock
            key={index}
            index={index}
            passenger={passenger}
            errors={passengerErrorsAt(index)}
            onFieldChange={(field, value) =>
              updatePassengerField(index, field, value)
            }
            showRemove={values.passengers.length > 1}
            onRemove={() => removePassenger(index)}
            disabled={isSubmitting}
            birthMin={birthBounds.min}
            birthMax={birthBounds.max}
            issueMin={passenger.birthDate || birthBounds.min}
            issueMax={issueDateMax}
          />
        ))}
      </div>

      <button
        type="button"
        className="checkout-form__add-passenger"
        onClick={addPassenger}
        disabled={isSubmitting}
      >
        Добавить пассажира
      </button>

      <h2 className="checkout-form__subtitle">Контакты для связи</h2>

      <div className="checkout-form__field">
        <label className="checkout-form__label" htmlFor="checkout-email">
          Email <span className="checkout-form__req">*</span>
        </label>
        <input
          id="checkout-email"
          name="email"
          type="email"
          className={`checkout-form__input ${errors.email ? 'checkout-form__input--error' : ''}`}
          value={values.email}
          onChange={handleContactChange}
          autoComplete="email"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="checkout-form__error">{errors.email}</p>
        )}
      </div>

      <div className="checkout-form__field">
        <label className="checkout-form__label" htmlFor="checkout-phone">
          Телефон <span className="checkout-form__req">*</span>
        </label>
        <input
          id="checkout-phone"
          name="phone"
          type="tel"
          className={`checkout-form__input ${errors.phone ? 'checkout-form__input--error' : ''}`}
          value={values.phone}
          onChange={handleContactChange}
          autoComplete="tel"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="checkout-form__error">{errors.phone}</p>
        )}
      </div>

      <div className="checkout-form__field">
        <label className="checkout-form__label" htmlFor="checkout-contactPreference">
          Удобный способ связи
        </label>
        <DownSelect
          id="checkout-contactPreference"
          className="checkout-form__select"
          value={values.contactPreference}
          onChange={(v) =>
            handleContactChange({
              target: { name: 'contactPreference', value: v },
            })
          }
          disabled={isSubmitting}
          options={[
            { value: 'any', label: 'Email или телефон' },
            { value: 'email', label: 'Только email' },
            { value: 'phone', label: 'Только телефон' },
          ]}
        />
      </div>

      <div className="checkout-form__field">
        <label className="checkout-form__label" htmlFor="checkout-comment">
          Комментарий к заказу
        </label>
        <textarea
          id="checkout-comment"
          name="comment"
          className="checkout-form__textarea"
          rows={3}
          value={values.comment}
          onChange={handleContactChange}
          placeholder="Пожелания по бронированию, время звонка и т.п."
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className="checkout-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка…' : 'Подтвердить бронирование'}
      </button>
    </form>
  );
}

export default CheckoutForm;
