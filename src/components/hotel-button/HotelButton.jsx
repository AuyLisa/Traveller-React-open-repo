import { Link } from 'react-router-dom';
import './HotelButton.css';

function HotelButton({ hotel }) {
  return (
    <Link to={`/hotel/${hotel.id}`} className="trip-card__button">
      <span className="trip-card-button__price">от {hotel.price.toLocaleString()} ₽</span>
      <span className="trip-card-button__city">{hotel.period}</span>
    </Link>
  );
}

export default HotelButton;