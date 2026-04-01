import './TripDetailModal.css';

function TripDetailModal({ trip, onClose }) {
  if (!trip) return null;

  return (
    <div
      className="trip-modal__overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="trip-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trip-modal-title"
      >
        <button
          type="button"
          className="trip-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h2 id="trip-modal-title" className="trip-modal__title">
          {trip.title}
        </h2>

        <div className="trip-modal__photo" aria-hidden="true" />

        <dl className="trip-modal__list">
          <div className="trip-modal__row">
            <dt className="trip-modal__term">Куда едет тур</dt>
            <dd className="trip-modal__value">
              {trip.country}
              {trip.city ? `, ${trip.city}` : ''}
            </dd>
          </div>

          <div className="trip-modal__row">
            <dt className="trip-modal__term">Когда проходит</dt>
            <dd className="trip-modal__value">{trip.duration} ночей</dd>
          </div>

          <div className="trip-modal__row">
            <dt className="trip-modal__term">Где проходит</dt>
            <dd className="trip-modal__value">
              {trip.city ? `${trip.city}, ${trip.country}` : trip.country}
            </dd>
          </div>

          <div className="trip-modal__row">
            <dt className="trip-modal__term">Стоимость</dt>
            <dd className="trip-modal__value trip-modal__price">
              {trip.price.toLocaleString('ru-RU')} ₽
            </dd>
          </div>
        </dl>

        <section className="trip-modal__section">
          <h3 className="trip-modal__subtitle">Описание</h3>
          <p className="trip-modal__text">{trip.description}</p>
        </section>
      </div>
    </div>
  );
}

export default TripDetailModal;
