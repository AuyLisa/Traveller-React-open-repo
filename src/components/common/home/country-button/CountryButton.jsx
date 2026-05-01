import { Link } from 'react-router-dom';
import './CountryButton.css';

function CountryButton({ countryId, country}) {
  return (
    <Link to={`/trip/${countryId}`} className="country-button">
      <span className="country-button__country">{country.name}</span>
    </Link>
  );
}

export default CountryButton;