import { useEffect, useState } from 'react';
import { DURATION_OPTIONS, PRICE_RANGE_OPTIONS } from '../../pages/trips/tripFilterOptions';
import { formatPriceFilterDisplay, parsePriceFilterInput } from '../../utils/tripPriceInput';
import './TripFiltersBar.css';

function TripFiltersBar({
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  countryOptions,
  durationMin,
  onDurationChange,
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
    const next = parsePriceFilterInput(raw);
    onPriceFilterChange(next);
  };

  const handlePriceChange = (e) => {
    const v = e.target.value;
    setPriceText(v);
    const presetHit = PRICE_RANGE_OPTIONS.some((o) => o.label === v.trim());
    if (presetHit) {
      applyPriceFromString(v);
    }
  };

  const handlePriceBlur = () => {
    const parsed = parsePriceFilterInput(priceText);
    onPriceFilterChange(parsed);
    setPriceText(formatPriceFilterDisplay(parsed));
  };

  const handleDurationChange = (e) => {
    const raw = e.target.value;
    if (raw === '') {
      onDurationChange(0);
      return;
    }
    const digits = raw.replace(/\D/g, '');
    if (digits === '') {
      onDurationChange(0);
      return;
    }
    const n = Number.parseInt(digits, 10);
    if (!Number.isNaN(n)) onDurationChange(Math.max(0, n));
  };

  return (
    <div className="trip-filters">
      <div className="trip-filters__search-block">
        <label htmlFor="trip-filters-search-input" className="trip-filters__label-text">
          Поиск
        </label>
        <input
          id="trip-filters-search-input"
          type="search"
          className="trip-filters__search"
          placeholder="Название, описание, страна, город…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="trip-filters__row">
        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Страна</span>
          <input
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            list="trip-country-suggestions"
            placeholder="Все"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            autoComplete="off"
          />
          <datalist id="trip-country-suggestions">
            {countryOptions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </label>

        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Количество ночей</span>
          <input
            type="text"
            className="trip-filters__combo trip-filters__combo--nights trip-filters__combo--with-list"
            inputMode="numeric"
            list="trip-duration-presets"
            placeholder="Введите количество ночей"
            value={durationMin === 0 ? '' : String(durationMin)}
            onChange={handleDurationChange}
            autoComplete="off"
          />
          <datalist id="trip-duration-presets">
            {DURATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </datalist>
        </label>

        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Цена</span>
          <input
            type="text"
            className="trip-filters__combo trip-filters__combo--price trip-filters__combo--with-list"
            inputMode="text"
            list="trip-price-presets"
            placeholder="Введите цену"
            value={priceText}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
          />
          <datalist id="trip-price-presets">
            {PRICE_RANGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.label} />
            ))}
          </datalist>
        </label>

        <button type="button" className="trip-filters__reset" onClick={onReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default TripFiltersBar;
