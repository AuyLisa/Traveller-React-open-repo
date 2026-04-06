import CardCartControls from '../card-cart-controls/CardCartControls';
import { hotelToCartPayload } from '../../utils/cartItemBuilders';
import './HotelCard.css';

<<<<<<< misha/feature/search
function HotelCard({ hotel }) {
=======
function HotelCard( {hotel} ) {
  const locationLabel = [hotel.city, hotel.country].filter(Boolean).join(', ');

>>>>>>> main
  return (
    <div className="hotelcard">
      <div className="hotelcard__image">
        <span className="hotelcard__photo" />
      </div>

      <div className="hotelcard__content">
        <h3 className="hotelcard__title">{hotel.title}</h3>
<<<<<<< misha/feature/search
        <p className="hotelcard__location">
          {[hotel.city, hotel.country].filter(Boolean).join(', ') || '—'}
        </p>
        <p className="hotelcard__description">{hotel.description}</p>

        <div className="hotelcard__rating">
          <span className="hotelcard__stars">
            {hotel.stars != null ? `${hotel.stars}⭐` : '—'}
          </span>
=======
        <p className="hotelcard__location">{locationLabel}</p>
        <p className="hotelcard__description">{hotel.description}</p>

        <div className="hotelcard__rating">
          <span className="hotelcard__stars"> {hotel.stars}⭐ </span>
>>>>>>> main
          <span className="hotelcard__reviews">{hotel.reviews} отзывов</span>
        </div>

        <p className="hotelcard__price"> от {hotel.price} ₽</p>
        <div className="hotelcard__actions">
<<<<<<< misha/feature/search
          <button
            type="button"
            className="hotelcard__button"
          >
            Подробнее
          </button>
=======
          <button type="button" className="hotelcard__button">Подробнее</button>
>>>>>>> main
          <CardCartControls
            type="hotel"
            itemId={hotel.id}
            payload={hotelToCartPayload(hotel)}
            variant="hotel"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
