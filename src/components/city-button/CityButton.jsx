import { Link } from 'react-router-dom';
import './CityButton.css';

function CityButton({ city }) {
  return (
    <Link to={`/trip/${city.id}`} className="trip-card__button">
      <span className="trip-card__city">{city.name}</span>
      <span className="trip-card__price">от {city.price.toLocaleString()} ₽</span>
    </Link>
  );
}

export default CityButton;