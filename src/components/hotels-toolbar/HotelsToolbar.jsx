import { useMemo } from 'react';
import { buildHotelFilterOptions } from '../../utils/filterHotels';
import '../trips-toolbar/TripsToolbar.css';

function HotelsToolbar({
  hotels,
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  stars,
  onStarsChange,
  minReviews,
  onMinReviewsChange,
  maxPrice,
  onMaxPriceChange,
  onReset,
}) {
  const { countries, starOptions, reviewPoints, pricePoints } = useMemo(
    () => buildHotelFilterOptions(hotels),
    [hotels]
  );

  return (
    <div className="trips-toolbar">
      <div className="trips-toolbar__search">
        <label className="trips-toolbar__label" htmlFor="hotels-toolbar-search">
          Поиск
        </label>
        <input
          id="hotels-toolbar-search"
          className="trips-toolbar__input trips-toolbar__input--wide"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Название, описание, страна, город"
          autoComplete="off"
        />
      </div>

      <div className="trips-toolbar__filters">
        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="hotels-toolbar-country">
            Страна
          </label>
          <input
            id="hotels-toolbar-country"
            className="trips-toolbar__input"
            type="text"
            list="hotels-toolbar-country-list"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            placeholder="Страна"
            autoComplete="off"
          />
          <datalist id="hotels-toolbar-country-list">
            {countries.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="hotels-toolbar-stars">
            Звёзды
          </label>
          <input
            id="hotels-toolbar-stars"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            list="hotels-toolbar-stars-list"
            value={stars}
            onChange={(e) => onStarsChange(e.target.value.replace(/\D/g, ''))}
            placeholder="Количество звёзд"
            autoComplete="off"
          />
          <datalist id="hotels-toolbar-stars-list">
            {starOptions.map((n) => (
              <option key={n} value={String(n)} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="hotels-toolbar-reviews">
            Отзывы (мин.)
          </label>
          <input
            id="hotels-toolbar-reviews"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            list="hotels-toolbar-reviews-list"
            value={minReviews}
            onChange={(e) => onMinReviewsChange(e.target.value.replace(/\D/g, ''))}
            placeholder="Минимум отзывов"
            autoComplete="off"
          />
          <datalist id="hotels-toolbar-reviews-list">
            {reviewPoints.map((n) => (
              <option key={n} value={String(n)} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="hotels-toolbar-price">
            Цена
          </label>
          <input
            id="hotels-toolbar-price"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            list="hotels-toolbar-price-list"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value.replace(/[^\d\s]/g, ''))}
            placeholder="Макс. стоимость, ₽"
            autoComplete="off"
          />
          <datalist id="hotels-toolbar-price-list">
            {pricePoints.map((p) => (
              <option key={p} value={String(p)} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__actions">
          <span className="trips-toolbar__actions-spacer" aria-hidden="true" />
          <button type="button" className="trips-toolbar__reset" onClick={onReset}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelsToolbar;