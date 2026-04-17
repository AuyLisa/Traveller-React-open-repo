import './CardTripCountry.css';
import CityButton from '../city-button/CityButton.jsx';

function CardTripCountry({ trip, id }) {
  return (
    <div className="trip-card">
      <div className="trip-card__image">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="trip-card__photo"
        />
        <span className="trip-card__country">{trip.name}</span>
        <span className="trip-card__pricee">от {trip.price.toLocaleString()} ₽</span>
      </div>

      <span className="trip-card__description">{trip.description}</span>
      
      <div className="trip-card__buttons">
        {trip?.cities?.map((city) => (
          <CityButton 
           key={city.id}
           id={city.id}
           city={city} />
        ))}
      </div>
    </div>
  );
}

export default CardTripCountry;