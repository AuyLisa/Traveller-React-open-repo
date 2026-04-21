import { useMemo, useState, useCallback } from 'react';
import Layout from '../../components/layout/Layout';
import SearchSectionSwitch from '../../components/search-section-switch/SearchSectionSwitch';
import HotelCard from '../../components/hotel-card/HotelCard';
import HotelsToolbar from '../../components/hotels-toolbar/HotelsToolbar';
import hotels from '../../data/hotels';
import { filterHotels } from '../../utils/filterHotels';
import './Hotels.css';

function Hotels() {
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState('');
  const [selectedStars, setSelectedStars] = useState([]);
  const [minReviews, setMinReviews] = useState('');
  const [maxReviews, setMaxReviews] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleStarToggle = useCallback((n) => {
    setSelectedStars((prev) => {
      if (prev.includes(n)) return prev.filter((x) => x !== n);
      return [...prev, n].sort((a, b) => a - b);
    });
  }, []);

  const filtered = useMemo(
    () =>
      filterHotels(hotels, {
        searchQuery,
        country,
        selectedStars,
        minReviewsRaw: minReviews,
        maxReviewsRaw: maxReviews,
        minPriceRaw: minPrice,
        maxPriceRaw: maxPrice,
      }),
    [searchQuery, country, selectedStars, minReviews, maxReviews, minPrice, maxPrice]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setCountry('');
    setSelectedStars([]);
    setMinReviews('');
    setMaxReviews('');
    setMinPrice('');
    setMaxPrice('');
  }, []);

  return (
    <Layout>
      <h1 className="hotels__title">Отели</h1>
      <div className="search-switch-row">
        <SearchSectionSwitch />
      </div>
      <HotelsToolbar
        hotels={hotels}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        onCountryChange={setCountry}
        selectedStars={selectedStars}
        onStarToggle={handleStarToggle}
        minReviews={minReviews}
        maxReviews={maxReviews}
        onMinReviewsChange={setMinReviews}
        onMaxReviewsChange={setMaxReviews}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <p className="hotels__empty" role="status">
          Ничего не найдено. Измените запрос или нажмите «Сбросить».
        </p>
      ) : (
        <>
          <div className="hotels__results">
            Найдено отелей:
            <span className="hotels__count"> {filtered.length}</span>
          </div>
          {filtered.map((hotel) => (
            <HotelCard key={hotel.id} hotelId={hotel.id} hotel={hotel} />
          ))}
        </>
      )}
    </Layout>
  );
}

export default Hotels;
