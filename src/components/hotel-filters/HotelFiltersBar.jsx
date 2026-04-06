import { useEffect, useState } from 'react';
import { PRICE_RANGE_OPTIONS } from '../../pages/trips/tripFilterOptions';
import { REVIEW_OPTIONS, STAR_OPTIONS } from '../../pages/hotels/hotelFilterOptions';
import { formatPriceFilterDisplay, parsePriceFilterInput } from '../../utils/priceFilterInput';
import '../trip-filters/TripFiltersBar.css';

function HotelFiltersBar({
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  countryOptions,
  starsExact,
  onStarsExactChange,
  minReviews,
  onMinReviewsChange,
  priceRange,
  priceMin,
  priceMax,
  onPriceFilterChange,
  onReset,
}) {
  const [priceText, setPriceText] = useState(() =>
    formatPriceFilterDisplay({ priceRange, priceMin, priceMax }),
  );

  useEffect(() => {
    setPriceText(formatPriceFilterDisplay({ priceRange, priceMin, priceMax }));
  }, [priceRange, priceMin, priceMax]);

  const applyPriceFromString = (raw) => {
    onPriceFilterChange(parsePriceFilterInput(raw));
  };

  const handlePriceChange = (e) => {
    const v = e.target.value;
    setPriceText(v);
    const presetHit = PRICE_RANGE_OPTIONS.some((o) => o.label === v.trim());
    if (presetHit) applyPriceFromString(v);
  };

  const handlePriceBlur = () => {
    const parsed = parsePriceFilterInput(priceText);
    onPriceFilterChange(parsed);
    setPriceText(formatPriceFilterDisplay(parsed));
  };

  const handleStarsChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      onStarsExactChange(0);
      return;
    }
    const digits = raw.replace(/\D/g, '');
    if (digits === '') {
      onStarsExactChange(0);
      return;
    }
    let n = Number.parseInt(digits, 10);
    if (Number.isNaN(n)) return;
    n = Math.min(5, Math.max(0, n));
    onStarsExactChange(n);
  };

  const handleReviewsChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      onMinReviewsChange(0);
      return;
    }
    const digits = raw.replace(/\D/g, '');
    if (digits === '') {
      onMinReviewsChange(0);
      return;
    }
    const n = Number.parseInt(digits, 10);
    if (!Number.isNaN(n)) onMinReviewsChange(Math.max(0, n));
  };

  return (
    <div className="trip-filters">
      <div className="trip-filters__search-block">
        <label htmlFor="hotel-filters-search-input" className="trip-filters__label-text">
          Поиск
        </label>
        <input
          id="hotel-filters-search-input"
          type="search"
          className="trip-filters__search"
          placeholder="Название, описание, страна, город…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="trip-filters__row">
        <div className="trip-filters__field">
          <label htmlFor="hotel-filters-country" className="trip-filters__label-text">
            Страна
          </label>
          <input
            id="hotel-filters-country"
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            list="hotel-country-dl"
            placeholder="Все"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            autoComplete="off"
          />
          <datalist id="hotel-country-dl">
            {countryOptions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="hotel-filters-stars" className="trip-filters__label-text">
            Звёзды
          </label>
          <input
            id="hotel-filters-stars"
            type="text"
            className="trip-filters__combo trip-filters__combo--nights trip-filters__combo--with-list"
            inputMode="numeric"
            list="hotel-stars-dl"
            placeholder="Введите количество звёзд"
            value={starsExact === 0 ? '' : String(starsExact)}
            onChange={handleStarsChange}
            autoComplete="off"
          />
          <datalist id="hotel-stars-dl">
            {STAR_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="hotel-filters-reviews" className="trip-filters__label-text">
            Отзывы
          </label>
          <input
            id="hotel-filters-reviews"
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            inputMode="numeric"
            list="hotel-reviews-dl"
            placeholder="Мин. число отзывов"
            value={minReviews === 0 ? '' : String(minReviews)}
            onChange={handleReviewsChange}
            autoComplete="off"
          />
          <datalist id="hotel-reviews-dl">
            {REVIEW_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="hotel-filters-price" className="trip-filters__label-text">
            Цена
          </label>
          <input
            id="hotel-filters-price"
            type="text"
            className="trip-filters__combo trip-filters__combo--price trip-filters__combo--with-list"
            inputMode="text"
            list="hotel-price-dl"
            placeholder="Введите цену"
            value={priceText}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
          />
          <datalist id="hotel-price-dl">
            {PRICE_RANGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.label} />
            ))}
          </datalist>
        </div>

        <button type="button" className="trip-filters__reset" onClick={onReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default HotelFiltersBar;
