import { Link } from 'react-router-dom';
import './CityButton.css';

function CityButton({ city, id }) {
  return (
    <Link to={`/trip/${id}`} className="trip-card__button">
      <span className="trip-card-button__city">{city.name}</span>
      <span className="trip-card-button__price">от {city.price.toLocaleString()} ₽</span>
    </Link>
  );
}

export default CityButton;