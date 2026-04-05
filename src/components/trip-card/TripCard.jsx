import { useNavigate } from 'react-router-dom';
import './TripCard.css';

function formatPrice(value) {
  if (value == null || value === '') return '—';
  const n = Number(value);
  if (Number.isNaN(n)) return '—';
  return `${n.toLocaleString('ru-RU')} ₽`;
}

function TripCard({ trip }) {
  const navigate = useNavigate();
  const title = trip.title ?? 'Тур';
  const description = trip.description ?? '';
  const locationParts = [trip.city, trip.country].filter(Boolean);
  const locationLine = locationParts.length ? locationParts.join(', ') : null;

  return (
    <article className="tripcard" data-trip-id={trip.id ?? ''}>
      <div className="tripcard__image">
        <span className="tripcard__photo" />
      </div>

      <div className="tripcard__content">
        <h3 className="tripcard__title">{title}</h3>
        {locationLine ? (
          <p className="tripcard__meta">{locationLine}</p>
        ) : null}
        {description ? (
          <p className="tripcard__description">{description}</p>
        ) : null}
        <p className="tripcard__price">{formatPrice(trip.price)}</p>
        <button
          type="button"
          className="tripcard__button"
          onClick={() => navigate(`/trips/${trip.id}`)}
        >
          Подробнее
        </button>
      </div>
    </article>
  );
}

export default TripCard;
