import './CardTriptoHotels.css';
import CityButton from '../city-button/CityButton.jsx';

function CardTriptoHotels({ hotel }) {
  return (
    <div className="hotel-card">
      
      <div className="hotel-card__image">
        <img 
          src={hotel.image} 
          alt={hotel.country}
          className="hotel-card__photo"
        />
        <span className="hotel-card__country">{hotel.country}</span>
      </div>

      <span className="hotel-card__description">7-8 ночей, 2 взрослых</span>
      
      
      <div className="hotel-card__buttons">
        {hotel?.cities?.map((city) => (
          <CityButton key={city.id} city={city} />
        ))}
      </div>

    </div>
  );
}

export default CardTripCountry;