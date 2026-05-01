import './CardTripCountry.css';
import CityButton from '@home/city-button/CityButton.jsx';

function CardTripCountry({ tripId, trip }) {
  
  return (
    <div className="card-trip-country">
      <div className="card-trip-country__image">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="card-trip-country__photo"
          loading="lazy"
        />
        <span className="card-trip-country__country">{trip.name}</span>
      </div>

      <span className="card-trip-country__description">{trip.description}</span>
      
      <div className="card-trip-country__buttons">
        {trip?.cities?.map((city) => (
          <CityButton 
            key={city.id}
            cityId={city.id}
            city={city} 
          />
        ))}
      </div>
    </div>
  );
}

export default CardTripCountry;