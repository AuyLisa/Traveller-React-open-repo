import './CardTripFromMoscow.css';
import CountryButton from '@home/country-button/CountryButton.jsx';

function CardTripFromMoscow({ tripId, trip}) {
  return (
    <div className="card-trip-frommoscow">
      <div className="card-trip-frommoscow__image">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="card-trip-frommoscow__photo"
        />
        <span className="card-trip-frommoscow__country">{trip.name}</span>
      </div>

      <div className="card-trip-frommoscow__buttons">
        {trip?.countries?.map((country) => (
          <CountryButton
            key={country.id}
            countryId={country.id}
            country={country} 
          />
        ))}
      </div>
    </div>
  );
}

export default CardTripFromMoscow;