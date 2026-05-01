import './CardTripMonth.css';
import CityButton from '@home/city-button/CityButton.jsx';

function CardTripMonth({ tripId, trip }) {
  return (
    <div className="card-trip-month">
      <div className="card-trip-month__image">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="card-trip-month__photo"
          loading="lazy"
        />
        <span className="card-trip-month__country">{trip.name}</span>
      </div>

      <div className="card-trip-month__content">
        <span className="card-trip-month__description">{trip.description}</span>
      
        <div className="card-trip-month__buttons">
          {trip?.cities?.map((city) => (

            <CityButton
              key={city.id}
              cityId={city.id}
              city={city} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardTripMonth;