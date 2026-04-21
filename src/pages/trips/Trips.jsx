import { useMemo, useState, useCallback } from 'react';
import Layout from '../../components/layout/Layout';
import SearchSectionSwitch from '../../components/search-section-switch/SearchSectionSwitch';
import TripCard from '../../components/trip-card/TripCard';
import TripsToolbar from '../../components/trips-toolbar/TripsToolbar';
import trips from '../../data/trips';
import { filterTrips } from '../../utils/filterTrips';
import './Trips.css';

function Trips() {
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [stars, setStars] = useState('');
  const [nights, setNights] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('');

  const filtered = useMemo(
    () =>
      filterTrips(trips, {
        searchQuery,
        country,
        starsRaw: stars,
        nightsRaw: nights,
        maxPriceRaw: maxPrice,
        sort,
      }),
    [searchQuery, country, stars, nights, maxPrice, sort]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setCountry('');
    setStars('');
    setNights('');
    setMaxPrice('');
    setSort('');
  }, []);

  return (
    <Layout>
      <h1 className="trips__title">Туры</h1>
      <div className="search-switch-row">
        <SearchSectionSwitch />
      </div>
      <TripsToolbar
        trips={trips}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        onCountryChange={setCountry}
        stars={stars}
        onStarsChange={setStars}
        nights={nights}
        onNightsChange={setNights}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        sort={sort}
        onSortChange={setSort}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <p className="trips__empty" role="status">
          Ничего не найдено. Измените запрос или нажмите «Сбросить».
        </p>
      ) : (
        <div className="trips__grid">
          {filtered.map((trip) => (
            <TripCard
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Trips;
