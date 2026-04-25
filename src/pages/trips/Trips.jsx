import { useMemo, useState, useCallback } from 'react';
import Layout from '@ui/layout/Layout';
import SearchSectionSwitch from '@ui/search-section-switch/SearchSectionSwitch';
import TripCard from '@trips/trip-card/TripCard';
import TripsToolbar from '@trips/trips-toolbar/TripsToolbar';
import trips from '@data/trips/trips';
import { filterTrips } from '@utils/filterTrips';
import './Trips.css';



function Trips() {
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedStars, setSelectedStars] = useState([]);
  const [nights, setNights] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('');

  const handleStarToggle = useCallback((n) => {
    setSelectedStars((prev) => {
      if (prev.includes(n)) return prev.filter((x) => x !== n);
      return [...prev, n].sort((a, b) => a - b);
    });
  }, []);

  const filtered = useMemo(
    () =>
      filterTrips(trips, {
        searchQuery,
        country,
        city,
        selectedStars,
        nightsRaw: nights,
        minPriceRaw: minPrice,
        maxPriceRaw: maxPrice,
        sort,
      }),
    [searchQuery, country, city, selectedStars, nights, minPrice, maxPrice, sort]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setCountry('');
    setCity('');
    setSelectedStars([]);
    setNights('');
    setMinPrice('');
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
        city={city}
        onCityChange={setCity}
        selectedStars={selectedStars}
        onStarToggle={handleStarToggle}
        nights={nights}
        onNightsChange={setNights}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
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
        <>
          <div className="trips__results">
            Найдено туров:
            <span className="trips__count"> {filtered.length}</span>
          </div>
          <div className="trips__grid">
            {filtered.map((trip) => (
              <TripCard key={trip.id} tripId={trip.id} trip={trip} />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}

export default Trips;