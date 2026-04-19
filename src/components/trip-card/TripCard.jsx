import { useNavigate } from 'react-router-dom';
import CardCartControls from '../card-cart-controls/CardCartControls';
import { tripToCartPayload } from '../../utils/cartItemBuilders';
import './TripCard.css';

function TripCard( {tripId, trip} ) {
  const navigate = useNavigate();
  
  return (
   <div className="tripcard">

     <div className="tripcard__image">
        <span className="tripcard__photo"></span>
      </div>

      <div className="tripcard__content">
        <h3 className="tripcard__title">{trip.title}</h3>
        <p className="tripcard__description">{trip.description}</p>
        <p className="tripcard__stars">отель {'⭐'.repeat(trip.stars)}</p>
        <p className="tripcard__price">{trip.price} ₽</p>
        <div className="tripcard__actions">
          <button
            type="button"
            className="tripcard__button"
            onClick={() => navigate(`/trips/${tripId}`)}
          >
            Подробнее
          </button>
          <CardCartControls
            type="trip"
            itemId={tripId}
            payload={tripToCartPayload(trip)}
            variant="trip"
          />
        </div>
    </div>
  </div>
  );
}

export default TripCard;
