import { useNavigate } from 'react-router-dom';
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import { hotelToCartPayload } from '@utils/cartItemBuilders';
import './HotelCard.css';

function HotelCard( { hotelId, hotel} ) {
  const navigate = useNavigate();
  const locationLabel = [hotel.city, hotel.country].filter(Boolean).join(', ');

  return (
    <div className="hotelcard">

      <div className="hotelcard__image">
        <span className="hotelcard__photo"></span>
      </div>

      <div className="hotelcard__content">
        <h3 className="hotelcard__title">{hotel.title} {'⭐'.repeat(hotel.star)}</h3>
        <p className="hotelcard__location">{locationLabel}</p>
        <p className="hotelcard__description">{hotel.description}</p>

        <div className="hotelcard__rating">
          <p className="hotelcard__reviews">{hotel.review} отзывов</p>
        </div>


        <p className="hotelcard__price"> от {hotel.price} ₽</p>
        <div className="hotelcard__actions">
          <button type="button" className="hotelcard__button">Подробнее</button>
          <CardCartControls
            type="hotel"
            itemId={hotelId}
            payload={hotelToCartPayload(hotel)}
            variant="hotel"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
