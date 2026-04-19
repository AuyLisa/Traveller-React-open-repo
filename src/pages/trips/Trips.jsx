import { useMemo, useState, useCallback } from 'react';
import Layout from '../../components/layout/Layout';
import TripCard from '../../components/trip-card/TripCard';
import TripsToolbar from '../../components/trips-toolbar/TripsToolbar';
import trips from '../../data/trips';
import { filterTrips } from '../../utils/filterTrips';
import './Trips.css';

function Trips() {
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [nights, setNights] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(
    () =>
      filterTrips(trips, {
        searchQuery,
        country,
        nightsRaw: nights,
        maxPriceRaw: maxPrice,
      }),
    [searchQuery, country, nights, maxPrice]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setCountry('');
    setNights('');
    setMaxPrice('');
  }, []);

  return (
    <Layout>
      <h1 className="trips__title">Туры</h1>
      <TripsToolbar
        trips={trips}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        onCountryChange={setCountry}
        nights={nights}
        onNightsChange={setNights}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
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
