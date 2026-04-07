import './TripTop.css';

function TripTop({ trip }) {
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
      
      <button className="triptop__button">{trip.price.toLocaleString()} ₽</button>
    </div>
  );
}

export default TripTop;