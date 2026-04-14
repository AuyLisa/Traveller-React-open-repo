import './CardTripCountry.css';
import CityButton from '..city-button/CityButton';

function CardTripCountry({ trip }) {
  return (
    <div className="trip-card">
      
      <div className="trip-card__image">
        <img 
          src={trip.image} 
          alt={trip.country}
          className="trip-card__photo"
        />
        <span className="trip-card__country">{trip.country}</span>
      </div>

      <span className="trip-card__description">7-8 ночей, 2 взрослых</span>
      
      
      <div className="trip-card__buttons">
        {country.cities.map(city => (
          <CityButton key={city.id} city={city} />
        ))}
      </div>

    </div>
  );
}

export default CardTripCountry;