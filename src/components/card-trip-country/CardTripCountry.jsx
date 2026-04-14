import './CardTripCountry.css';

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
      <span className="trip-card__description">{trip.description.toLocaleString()}</span>
      <button className="trip-card__button">от {trip.price.toLocaleString()} ₽</button>
    </div>
  );
}

export default CardTripCountry;