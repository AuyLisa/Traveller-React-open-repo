import { Link } from 'react-router-dom';
import './CityButton.css';

function CityButton({ cityId, city }) {
  return (
    <Link to={`/trip/${cityId}`} className="city-button">
      <span className="city-button__city">{city.name}</span>
      <span className="city-button__price">от {city.price.toLocaleString('ru-RU')} ₽</span>
    </Link>
  );
}

export default CityButton;