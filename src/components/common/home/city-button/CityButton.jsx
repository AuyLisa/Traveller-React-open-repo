import { Link } from 'react-router-dom';
import './CityButton.css';

function CityButton({ cityId, city }) {
   // Кодируем название города для URL
  const encodedCity = encodeURIComponent(city.name);
  return (
      <Link to={`/trips?city=${encodedCity}`} className="city-button">
      <span className="city-button__city">{city.name}</span>
      <span className="city-button__price">от {city.price.toLocaleString('ru-RU')} ₽</span>
      </Link>
  );
}

export default CityButton;