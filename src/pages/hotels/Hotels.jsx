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
  const [stars, setStars] = useState('');
  const [minReviews, setMinReviews] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(
    () =>
      filterHotels(hotels, {
        searchQuery,
        country,
        starsRaw: stars,
        minReviewsRaw: minReviews,
        maxPriceRaw: maxPrice,
      }),
    [searchQuery, country, stars, minReviews, maxPrice]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setCountry('');
    setStars('');
    setMinReviews('');
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
        stars={stars}
        onStarsChange={setStars}
        minReviews={minReviews}
        onMinReviewsChange={setMinReviews}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <p className="hotels__empty" role="status">
          Ничего не найдено. Измените запрос или нажмите «Сбросить».
        </p>
      ) : (
        filtered.map((hotel) => 
        <HotelCard
         key={hotel.id}
         hotelId={hotel.id}
         hotel={hotel} />)
      )}
    </Layout>
  );
}

export default Hotels;
