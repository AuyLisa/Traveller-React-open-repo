import { Link } from 'react-router-dom';
import './CountryButton.css';

function CountryButton({ country, id }) {
  return (
    <Link to={`/trip/${id}`} className="trip-card__button">
      <span className="trip-card-button__city">{country.name}</span>
    </Link>
  );
}

export default CountryButton;