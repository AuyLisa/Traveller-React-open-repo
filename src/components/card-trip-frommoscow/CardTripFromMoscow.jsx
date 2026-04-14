import './CardTripFromMoscow.css';
import CountryButton from '../country-button/CountryButton.jsx';

function CardTripFromMoscow({ trip }) {
  return (
    <div className="trip-card">
      <div className="trip-card__image">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="trip-card__photo"
        />
        <span className="trip-card__country">{trip.name}</span>
      </div>

      <div className="trip-card__buttons">
        {trip?.countries?.map((country) => (
          <CountryButton key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CardTripFromMoscow;