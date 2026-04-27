import { useEffect, useMemo } from 'react';
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
  city,
  onCityChange,
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
  const { countries, cities: allCities, starOptions } = useMemo(
    () => buildHotelFilterOptions(hotels),
    [hotels]
  );

  const availableCities = useMemo(() => {
    const selectedCountry = String(country ?? '').trim();
    if (!selectedCountry) return allCities;

    const cities = [
      ...new Set(
        hotels
          .filter((h) => String(h.country ?? '').trim() === selectedCountry)
          .map((h) => h.city)
          .filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b, 'ru'));

    return cities;
  }, [allCities, hotels, country]);

  useEffect(() => {
    const selectedCity = String(city ?? '').trim();
    if (!selectedCity) return;
    if (!availableCities.includes(selectedCity)) onCityChange('');
  }, [city, availableCities, onCityChange]);

  const countrySelectOptions = useMemo(
    () => [
      { value: '', label: 'Все страны' },
      ...countries.map((c) => ({ value: c, label: c })),
    ],
    [countries]
  );

  const citySelectOptions = useMemo(
    () => [
      { value: '', label: 'Все города' },
      ...availableCities.map((c) => ({ value: c, label: c })),
    ],
    [availableCities]
  );

  return (
    <div className="hotels-toolbar">
      <div className="hotels-toolbar__search">
        <label className="hotels-toolbar__label" htmlFor="hotels-toolbar-search">
          Поиск
        </label>
        <input
          id="hotels-toolbar-search"
          className="hotels-toolbar__input hotels-toolbar__input--wide"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Название, описание, страна, город"
          autoComplete="off"
        />
      </div>

      <div className="hotels-toolbar__filters">
        <div className="hotels-toolbar__field">
          <label className="hotels-toolbar__label" htmlFor="hotels-toolbar-country">
            Страна
          </label>
          <DownSelect
            id="hotels-toolbar-country"
            className="hotels-toolbar__input"
            value={country}
            onChange={onCountryChange}
            options={countrySelectOptions}
          />
        </div>

        <div className="hotels-toolbar__field">
          <label className="hotels-toolbar__label" htmlFor="hotels-toolbar-city">
            Город
          </label>
          <DownSelect
            id="hotels-toolbar-city"
            className="hotels-toolbar__input"
            value={city}
            onChange={onCityChange}
            options={citySelectOptions}
          />
        </div>

        <div className="hotels-toolbar__field hotels-toolbar__field--stars">
          <span className="hotels-toolbar__label" id="hotels-toolbar-stars-legend">
            Звёзды
          </span>
          <div
            className="hotels-toolbar__checkbox-group"
            role="group"
            aria-labelledby="hotels-toolbar-stars-legend"
          >
            {starOptions.map((n) => (
              <label key={n} className="hotels-toolbar__checkbox-label">
                <input
                  type="checkbox"
                  className="hotels-toolbar__checkbox"
                  checked={selectedStars.includes(n)}
                  onChange={() => onStarToggle(n)}
                />
                <span className="hotels-toolbar__checkbox-text" title={`${n} звёзд`}>
                  {starsEmoji(n)}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="hotels-toolbar__field hotels-toolbar__field--range">
          <span className="hotels-toolbar__label" id="hotels-toolbar-reviews-legend">
            Количество отзывов
          </span>
          <div
            className="hotels-toolbar__range"
            role="group"
            aria-labelledby="hotels-toolbar-reviews-legend"
          >
            <input
              className="hotels-toolbar__input hotels-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={minReviews}
              onChange={(e) => onMinReviewsChange(e.target.value)}
              placeholder="от"
              autoComplete="off"
              aria-label="Количество отзывов от"
            />
            <span className="hotels-toolbar__range-sep" aria-hidden="true">
              —
            </span>
            <input
              className="hotels-toolbar__input hotels-toolbar__input--numeric"
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

        <div className="hotels-toolbar__field hotels-toolbar__field--range">
          <span className="hotels-toolbar__label" id="hotels-toolbar-price-legend">
            Цена, ₽
          </span>
          <div
            className="hotels-toolbar__range"
            role="group"
            aria-labelledby="hotels-toolbar-price-legend"
          >
            <input
              className="hotels-toolbar__input hotels-toolbar__input--numeric"
              type="number"
              min="0"
              inputMode="numeric"
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              placeholder="от"
              autoComplete="off"
              aria-label="Цена от, ₽"
            />
            <span className="hotels-toolbar__range-sep" aria-hidden="true">
              —
            </span>
            <input
              className="hotels-toolbar__input hotels-toolbar__input--numeric"
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

        <div className="hotels-toolbar__actions">
          <span className="hotels-toolbar__actions-spacer" aria-hidden="true" />
          <button type="button" className="hotels-toolbar__reset" onClick={onReset}>
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelsToolbar;