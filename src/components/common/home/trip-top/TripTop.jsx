import './TripTop.css';
import { useNavigate } from 'react-router-dom';


function TripTop({ tripId, trip }) {
  const navigate = useNavigate();


  const handleClick = () => {
    // Переход на страницу туров с параметром страны в URL
    navigate(`/trips?country=${encodeURIComponent(trip.country)}`);
  }

  return (
    <div className="triptop">
      <div className="triptop__image">
        <img 
          src={trip.image} 
          alt={trip.country}
          className="triptop__photo"
        />
        <span className="triptop__country">{trip.tripName}</span>
      </div>
      <span className="triptop__description">{trip.description.toLocaleString()}</span>
      <button className="triptop__button"
       onClick={handleClick}>
        от {trip.price.toLocaleString()} ₽</button>
    </div>
  );
}

export default TripTop;