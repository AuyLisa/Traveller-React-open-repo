import './TripTop.css';

function TripTop({ tripId, trip }) {
  return (
    <div className="triptop">
      
      
      <div className="triptop__image">
        <img 
          src={trip.image} 
          alt={trip.country}
          className="triptop__photo"
        />
        <span className="triptop__country">{trip.country}</span>
      </div>
      <span className="triptop__description">{trip.description.toLocaleString()}</span>
      <button className="triptop__button">от {trip.price.toLocaleString()} ₽</button>
    </div>
  );
}

export default TripTop;