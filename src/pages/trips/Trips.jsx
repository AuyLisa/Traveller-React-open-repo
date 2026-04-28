import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMemo, useState, useCallback } from 'react';

//components
import Layout from '@ui/layout/Layout';
import SearchSectionSwitch from '@ui/search-section-switch/SearchSectionSwitch';
import TripCard from '@trips/trip-card/TripCard';
import TripsToolbar from '@trips/trips-toolbar/TripsToolbar';

//data
import trips from '@data/trips/trips';

import { filterTrips } from '@utils/filterTrips';
import './Trips.css';



function Trips() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedStars, setSelectedStars] = useState([]);
  const [nights, setNights] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('');

    // Читаем параметр country из URL при загрузке
  useEffect(() => {
    const countryFromUrl = searchParams.get('country');
    if (countryFromUrl) {
      setCountry(countryFromUrl);
    }

    const cityFromUrl = searchParams.get('city');
    if (cityFromUrl) setCity(cityFromUrl);
  }, [searchParams]); 


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
    setSearchParams({}); // Очищаем URL параметры
  }, [setSearchParams]);

  return (
    <Layout>
      <h1 className="trips__title">Туры</h1>
      <div className="search-switch-row">
        <SearchSectionSwitch />
      </div>

      {/* Новая структура: фильтры слева, карточки справа */}
      <div className="trips__layout">
        {/* Левая колонка — фильтры (1/4 экрана) */}
        <aside className="trips__filters-sidebar">
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
      </aside>

      {/* Правая колонка — результаты и карточки (3/4 экрана) */}
      <main className="trips__content">
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
        </main>
      </div>
    </Layout>
  );
}

export default Trips;