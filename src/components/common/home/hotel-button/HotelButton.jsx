import { Link } from 'react-router-dom';
import './HotelButton.css';

function HotelButton({ hotelId, hotel }) {
  return (
    <Link to={`/hotel/${hotelId}`} className="hotel__button">
      <span className="hotel-button__price">от {hotel.price.toLocaleString()} ₽</span>
      <span className="hotel-button__period">{hotel.period}</span>
    </Link>
  );
}


export default HotelButton;