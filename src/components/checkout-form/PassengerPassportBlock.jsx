import {
  normalizeRfPassportNumber,
  normalizeRfPassportSeries,
} from '../../utils/checkoutValidation';
import './PassengerPassportBlock.css';

const FIELDS = [
  { key: 'firstName', label: 'Имя', auto: 'given-name' },
  { key: 'lastName', label: 'Фамилия', auto: 'family-name' },
  { key: 'patronymic', label: 'Отчество', auto: 'additional-name' },
];

function PassengerPassportBlock({
  index,
  passenger,
  errors = {},
  onFieldChange,
  showRemove,
  onRemove,
  disabled,
  birthMin,
  birthMax,
  issueMin,
  issueMax,
}) {
  const n = index + 1;
  const err = (key) => errors[key];

  return (
    <div className="passenger-passport">
      <div className="passenger-passport__head">
        <h3 className="passenger-passport__title">Пассажир {n}</h3>
        {showRemove && (
          <button
            type="button"
            className="passenger-passport__remove"
            onClick={onRemove}
            disabled={disabled}
          >
            Удалить
          </button>
        )}
      </div>

      <p className="passenger-passport__section-label">Паспортные данные</p>

      <div className="passenger-passport__grid passenger-passport__grid--triple">
        {FIELDS.map(({ key, label, auto }) => (
          <div className="passenger-passport__field" key={key}>
            <label className="passenger-passport__label" htmlFor={`pp-${index}-${key}`}>
              {label}
              {key !== 'patronymic' && (
                <span className="passenger-passport__req"> *</span>
              )}
            </label>
            <input
              id={`pp-${index}-${key}`}
              className={`passenger-passport__input ${err(key) ? 'passenger-passport__input--error' : ''}`}
              value={passenger[key] ?? ''}
              onChange={(e) => onFieldChange(key, e.target.value)}
              autoComplete={auto}
              disabled={disabled}
            />
            {err(key) && (
              <p className="passenger-passport__error">{err(key)}</p>
            )}
          </div>
        ))}
      </div>

      <div className="passenger-passport__field passenger-passport__field--narrow">
        <label className="passenger-passport__label" htmlFor={`pp-${index}-birthDate`}>
          Дата рождения <span className="passenger-passport__req">*</span>
        </label>
        <input
          id={`pp-${index}-birthDate`}
          type="date"
          min={birthMin}
          max={birthMax}
          className={`passenger-passport__input ${err('birthDate') ? 'passenger-passport__input--error' : ''}`}
          value={passenger.birthDate ?? ''}
          onChange={(e) => onFieldChange('birthDate', e.target.value)}
          disabled={disabled}
        />
        {err('birthDate') && (
          <p className="passenger-passport__error">{err('birthDate')}</p>
        )}
      </div>

      <div className="passenger-passport__grid passenger-passport__grid--half">
        <div className="passenger-passport__field">
          <label className="passenger-passport__label" htmlFor={`pp-${index}-passportSeries`}>
            Серия паспорта <span className="passenger-passport__req">*</span>
          </label>
          <input
            id={`pp-${index}-passportSeries`}
            className={`passenger-passport__input ${err('passportSeries') ? 'passenger-passport__input--error' : ''}`}
            value={passenger.passportSeries ?? ''}
            onChange={(e) =>
              onFieldChange('passportSeries', normalizeRfPassportSeries(e.target.value))
            }
            inputMode="numeric"
            maxLength={4}
            pattern="[0-9]*"
            autoComplete="off"
            disabled={disabled}
          />
          {err('passportSeries') && (
            <p className="passenger-passport__error">{err('passportSeries')}</p>
          )}
        </div>
        <div className="passenger-passport__field">
          <label className="passenger-passport__label" htmlFor={`pp-${index}-passportNumber`}>
            Номер паспорта <span className="passenger-passport__req">*</span>
          </label>
          <input
            id={`pp-${index}-passportNumber`}
            className={`passenger-passport__input ${err('passportNumber') ? 'passenger-passport__input--error' : ''}`}
            value={passenger.passportNumber ?? ''}
            onChange={(e) =>
              onFieldChange('passportNumber', normalizeRfPassportNumber(e.target.value))
            }
            inputMode="numeric"
            maxLength={6}
            pattern="[0-9]*"
            autoComplete="off"
            disabled={disabled}
          />
          {err('passportNumber') && (
            <p className="passenger-passport__error">{err('passportNumber')}</p>
          )}
        </div>
      </div>

      <div className="passenger-passport__field passenger-passport__field--narrow">
        <label className="passenger-passport__label" htmlFor={`pp-${index}-passportIssueDate`}>
          Дата выдачи <span className="passenger-passport__req">*</span>
        </label>
        <input
          id={`pp-${index}-passportIssueDate`}
          type="date"
          min={issueMin}
          max={issueMax}
          className={`passenger-passport__input ${err('passportIssueDate') ? 'passenger-passport__input--error' : ''}`}
          value={passenger.passportIssueDate ?? ''}
          onChange={(e) => onFieldChange('passportIssueDate', e.target.value)}
          disabled={disabled}
        />
        {err('passportIssueDate') && (
          <p className="passenger-passport__error">{err('passportIssueDate')}</p>
        )}
      </div>

      <div className="passenger-passport__field">
        <label className="passenger-passport__label" htmlFor={`pp-${index}-passportIssuedBy`}>
          Кем выдан <span className="passenger-passport__req">*</span>
        </label>
        <input
          id={`pp-${index}-passportIssuedBy`}
          className={`passenger-passport__input ${err('passportIssuedBy') ? 'passenger-passport__input--error' : ''}`}
          value={passenger.passportIssuedBy ?? ''}
          onChange={(e) => onFieldChange('passportIssuedBy', e.target.value)}
          disabled={disabled}
        />
        {err('passportIssuedBy') && (
          <p className="passenger-passport__error">{err('passportIssuedBy')}</p>
        )}
      </div>

      <div className="passenger-passport__field">
        <label className="passenger-passport__label" htmlFor={`pp-${index}-citizenship`}>
          Гражданство <span className="passenger-passport__req">*</span>
        </label>
        <input
          id={`pp-${index}-citizenship`}
          className={`passenger-passport__input ${err('citizenship') ? 'passenger-passport__input--error' : ''}`}
          value={passenger.citizenship ?? ''}
          onChange={(e) => onFieldChange('citizenship', e.target.value)}
          autoComplete="country-name"
          disabled={disabled}
        />
        {err('citizenship') && (
          <p className="passenger-passport__error">{err('citizenship')}</p>
        )}
      </div>
    </div>
  );
}

export default PassengerPassportBlock;
