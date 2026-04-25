import { useMemo } from 'react';
import { buildHotelFilterOptions } from '@utils/filterHotels';
import DownSelect from '@down-select/DownSelect';
import './HotelsToolbar.css';

function starsEmoji(n) {
  return '⭐'.repeat(Math.min(5, Math.max(1, Number(n))));
}

function HotelsToolbar({
  hotels,
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  selectedStars,
  onStarToggle,
  minReviews,
  maxReviews,
  onMinReviewsChange,
  onMaxReviewsChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}) {
  const { countries, starOptions } = useMemo(() => buildHotelFilterOptions(hotels), [hotels]);

  const countrySelectOptions = useMemo(
    () => [
      { value: '', label: 'Все страны' },
      ...countries.map((c) => ({ value: c, label: c })),
    ],
    [countries]
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
          <DownSelect
            id="hotels-toolbar-country"
            className="trips-toolbar__input"
            value={country}
            onChange={onCountryChange}
            options={countrySelectOptions}
          />
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--stars">
          <span className="trips-toolbar__label" id="hotels-toolbar-stars-legend">
            Звёзды
          </span>
          <div
            className="trips-toolbar__checkbox-group"
            role="group"
            aria-labelledby="hotels-toolbar-stars-legend"
          >
            {starOptions.map((n) => (
              <label key={n} className="trips-toolbar__checkbox-label">
                <input
                  type="checkbox"
                  className="trips-toolbar__checkbox"
                  checked={selectedStars.includes(n)}
                  onChange={() => onStarToggle(n)}
                />
                <span className="trips-toolbar__checkbox-text" title={`${n} звёзд`}>
                  {starsEmoji(n)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--range">
          <span className="trips-toolbar__label" id="hotels-toolbar-reviews-legend">
            Количество отзывов
          </span>
          <div
            className="trips-toolbar__range"
            role="group"
            aria-labelledby="hotels-toolbar-reviews-legend"
          >
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={minReviews}
              onChange={(e) => onMinReviewsChange(e.target.value)}
              placeholder="от"
              autoComplete="off"
              aria-label="Количество отзывов от"
            />
            <span className="trips-toolbar__range-sep" aria-hidden="true">
              —
            </span>
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={maxReviews}
              onChange={(e) => onMaxReviewsChange(e.target.value)}
              placeholder="до"
              autoComplete="off"
              aria-label="Количество отзывов до"
            />
          </div>
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--range">
          <span className="trips-toolbar__label" id="hotels-toolbar-price-legend">
            Цена, ₽
          </span>
          <div
            className="trips-toolbar__range"
            role="group"
            aria-labelledby="hotels-toolbar-price-legend"
          >
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              placeholder="от"
              autoComplete="off"
              aria-label="Цена от, ₽"
            />
            <span className="trips-toolbar__range-sep" aria-hidden="true">
              —
            </span>
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(e.target.value)}
              placeholder="до"
              autoComplete="off"
              aria-label="Цена до, ₽"
            />
          </div>
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
