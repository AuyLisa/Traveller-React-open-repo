import { Link } from 'react-router-dom';
import './CityButton.css';

function CityButton({ cityId, city}) {
  return (
    <Link to={`/trip/${cityId}`} className="trip-card__button">
      <span className="trip-card-button__city">{city.name}</span>
      <span className="trip-card-button__price">от {city.price.toLocaleString('ru-RU')} ₽</span>
    </Link>
  );
}

export default CityButton;