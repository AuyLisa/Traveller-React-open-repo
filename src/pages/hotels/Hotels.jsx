import { useMemo, useState } from 'react';
import Layout from '../../components/layout/Layout';
import HotelCard from '../../components/hotel-card/HotelCard';
import HotelFiltersBar from '../../components/hotel-filters/HotelFiltersBar';
import hotels from '../../data/hotels';
import { filterHotels, getUniqueHotelCountries } from '../../utils/hotelSearchFilter';
import './Hotels.css';

const INITIAL_FILTERS = {
  searchQuery: '',
  country: '',
  starsExact: 0,
  minReviews: 0,
  priceRange: 'all',
  priceMin: '',
  priceMax: '',
};

function Hotels() {
  const [searchQuery, setSearchQuery] = useState(INITIAL_FILTERS.searchQuery);
  const [country, setCountry] = useState(INITIAL_FILTERS.country);
  const [starsExact, setStarsExact] = useState(INITIAL_FILTERS.starsExact);
  const [minReviews, setMinReviews] = useState(INITIAL_FILTERS.minReviews);
  const [priceRange, setPriceRange] = useState(INITIAL_FILTERS.priceRange);
  const [priceMin, setPriceMin] = useState(INITIAL_FILTERS.priceMin);
  const [priceMax, setPriceMax] = useState(INITIAL_FILTERS.priceMax);

  const countryOptions = useMemo(() => getUniqueHotelCountries(hotels), []);

  const filteredHotels = useMemo(
    () =>
      filterHotels(hotels, {
        searchQuery,
        country,
        starsExact,
        minReviews,
        priceRange,
        priceMin,
        priceMax,
      }),
    [searchQuery, country, starsExact, minReviews, priceRange, priceMin, priceMax],
  );

<<<<<<< misha/feature/search
  const handleReset = () => {
    setSearchQuery(INITIAL_FILTERS.searchQuery);
    setCountry(INITIAL_FILTERS.country);
    setStarsExact(INITIAL_FILTERS.starsExact);
    setMinReviews(INITIAL_FILTERS.minReviews);
    setPriceRange(INITIAL_FILTERS.priceRange);
    setPriceMin(INITIAL_FILTERS.priceMin);
    setPriceMax(INITIAL_FILTERS.priceMax);
  };

  const handlePriceFilterChange = (next) => {
    setPriceRange(next.priceRange);
    setPriceMin(next.priceMin);
    setPriceMax(next.priceMax);
  };
=======
  const [chosenCountry, setCountry] = useState('');
  const [chosenStars, setStars] = useState(0);
  //const [chosenOptions, setOptions] = useState([]); // -
  const [minReviews, setminReviews] = useState(0);
  const [chosenSortPrice, setSortPrice] = useState('');



  //по странам
  const c_filtered = chosenCountry === ''
  ? hotels
  : hotels.filter(hotel => hotel.country === chosenCountry);

  //по звездам
  const s_filtered = chosenStars === 0
  ? c_filtered  //результат после фильтра по странам
  : c_filtered.filter(hotel => hotel.stars === chosenStars);

  //по опциям пока -
  {/*const op_filtered = chosenOptions.length === 0
  ? s_filtered
  : s_filtered.filter(hotel=> {
    return chosenOptions.every(option => hotel.options.includes(option));
  });
*/}

  //по числу отзывов
  const r_filtered = minReviews === 0
  ? s_filtered 
  : s_filtered.filter(hotel => hotel.reviews >= minReviews);


  //по цене
  const p_filtered = [...r_filtered] 
  if (chosenSortPrice === 'asc') 
      p_filtered.sort((a, b) => a.price - b.price);  //по возр
  if (chosenSortPrice === 'desc') 
      p_filtered.sort((a, b) => b.price - a.price);  //по убыв



  const res = p_filtered;


>>>>>>> main

  return (
    <Layout>
      <h1 className="hotels__title">Отели</h1>

      <HotelFiltersBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        country={country}
        onCountryChange={setCountry}
        countryOptions={countryOptions}
        starsExact={starsExact}
        onStarsExactChange={setStarsExact}
        minReviews={minReviews}
        onMinReviewsChange={setMinReviews}
        priceRange={priceRange}
        priceMin={priceMin}
        priceMax={priceMax}
        onPriceFilterChange={handlePriceFilterChange}
        onReset={handleReset}
      />

      <div className="hotels__results">
        Найдено отелей:
        <span className="hotels__count"> {filteredHotels.length}</span>
      </div>

      {filteredHotels.length === 0 ? (
        <p className="hotels__empty" role="status">
          Ничего не найдено. Попробуйте изменить запрос или сбросить фильтры.
        </p>
      ) : (
        <div className="hotels__list">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Hotels;
