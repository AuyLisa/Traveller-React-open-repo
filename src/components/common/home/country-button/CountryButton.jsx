import { Link } from 'react-router-dom';
import './CountryButton.css';

function CountryButton({ countryId, country}) {

  const encodedTitle = encodeURIComponent(country.title);
  return (
    <Link to={`/trip?country=${encodedTitle}`} className="country-button">
      <span className="country-button__country">{country.name}</span>
    </Link>
  );
}


export default CountryButton;