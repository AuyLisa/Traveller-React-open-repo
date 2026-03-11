import './TripCard.css';

function TripCard( {trip} ) { 
  return (
   <div className="trip-card">
      <h3>{trip.title}</h3>
      <p>{trip.description}</p>
      <p className="price">{trip.price} ₽</p>
      <button>Подробнее</button>
    </div>
  );
}

export default TripCard;