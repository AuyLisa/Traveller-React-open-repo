import { useMemo, useState } from 'react';
import Layout from '../../components/layout/Layout';
import TripCard from '../../components/trip-card/TripCard';
import TripFiltersBar from '../../components/trip-filters/TripFiltersBar';
import trips from '../../data/trips';
import { filterTrips, getUniqueCountries } from '../../utils/tripSearchFilter';
import './Trips.css';

const INITIAL_FILTERS = {
  searchQuery: '',
  country: '',
  durationMin: 0,
  priceRange: 'all',
  priceMin: '',
  priceMax: '',
};

function Trips() {
  const [searchQuery, setSearchQuery] = useState(INITIAL_FILTERS.searchQuery);
  const [country, setCountry] = useState(INITIAL_FILTERS.country);
  const [durationMin, setDurationMin] = useState(INITIAL_FILTERS.durationMin);
  const [priceRange, setPriceRange] = useState(INITIAL_FILTERS.priceRange);
  const [priceMin, setPriceMin] = useState(INITIAL_FILTERS.priceMin);
  const [priceMax, setPriceMax] = useState(INITIAL_FILTERS.priceMax);

  const countryOptions = useMemo(() => getUniqueCountries(trips), []);

  const filteredTrips = useMemo(
    () =>
      filterTrips(trips, {
        searchQuery,
        country,
        durationMin,
        priceRange,
        priceMin,
        priceMax,
      }),
    [searchQuery, country, durationMin, priceRange, priceMin, priceMax],
  );

  const handleReset = () => {
    setSearchQuery(INITIAL_FILTERS.searchQuery);
    setCountry(INITIAL_FILTERS.country);
    setDurationMin(INITIAL_FILTERS.durationMin);
    setPriceRange(INITIAL_FILTERS.priceRange);
    setPriceMin(INITIAL_FILTERS.priceMin);
    setPriceMax(INITIAL_FILTERS.priceMax);
  };

  const handlePriceFilterChange = (next) => {
    setPriceRange(next.priceRange);
    setPriceMin(next.priceMin);
    setPriceMax(next.priceMax);
  };

  return (
    <Layout>
      <h1 className="trips__title">Туры</h1>

      <TripFiltersBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        onCountryChange={setCountry}
        countryOptions={countryOptions}
        durationMin={durationMin}
        onDurationChange={setDurationMin}
        priceRange={priceRange}
        priceMin={priceMin}
        priceMax={priceMax}
        onPriceFilterChange={handlePriceFilterChange}
        onReset={handleReset}
      />

      <div className="trips__results">
        Найдено туров:
        <span className="trips__count"> {filteredTrips.length}</span>
      </div>

      {filteredTrips.length === 0 ? (
        <p className="trips__empty" role="status">
          Ничего не найдено. Попробуйте изменить запрос или сбросить фильтры.
        </p>
      ) : (
        <div className="trips__grid">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Trips;
