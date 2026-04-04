import { useNavigate } from 'react-router-dom';
import './TripCard.css';

function TripCard( {trip} ) {
  const navigate = useNavigate();

  return (
   <div className="tripcard">

     <div className="tripcard__image">
        <span className="tripcard__photo"></span>
      </div>

      <div className="tripcard__content">
        <h3 className="tripcard__title">{trip.title}</h3>
        <p className="tripcard__description">{trip.description}</p>
        <p className="tripcard__price">{trip.price} ₽</p>
        <button
          type="button"
          className="tripcard__button"
          onClick={() => navigate(`/trips/${trip.id}`)}
        >
          Подробнее
        </button>
    </div>
  </div>
  );
}

export default TripCard;
