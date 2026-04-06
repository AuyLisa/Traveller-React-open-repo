import { useEffect, useState } from 'react';
import { PRICE_RANGE_OPTIONS } from '../../pages/trips/tripFilterOptions';
import { formatPriceFilterDisplay, parsePriceFilterInput } from '../../utils/priceFilterInput';
import '../trip-filters/TripFiltersBar.css';

function AviaFiltersBar({
  searchQuery,
  onSearchChange,
  from,
  onFromChange,
  fromOptions,
  to,
  onToChange,
  toOptions,
  airline,
  onAirlineChange,
  airlineOptions,
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

  const handlePriceChange = (e) => {
    const v = e.target.value;
    setPriceText(v);
    const presetHit = PRICE_RANGE_OPTIONS.some((o) => o.label === v.trim());
    if (presetHit) {
      onPriceFilterChange(parsePriceFilterInput(v));
    }
  };

  const handlePriceBlur = () => {
    const parsed = parsePriceFilterInput(priceText);
    onPriceFilterChange(parsed);
    setPriceText(formatPriceFilterDisplay(parsed));
  };

  return (
    <div className="trip-filters">
      <div className="trip-filters__search-block">
        <label htmlFor="avia-filters-search-input" className="trip-filters__label-text">
          Поиск
        </label>
        <input
          id="avia-filters-search-input"
          type="search"
          className="trip-filters__search"
          placeholder="Откуда, куда, авиакомпания, время…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="trip-filters__row">
        <div className="trip-filters__field">
          <label htmlFor="avia-filters-from" className="trip-filters__label-text">
            Откуда
          </label>
          <input
            id="avia-filters-from"
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            list="avia-from-dl"
            placeholder="Город вылета"
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
            autoComplete="off"
          />
          <datalist id="avia-from-dl">
            {fromOptions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="avia-filters-to" className="trip-filters__label-text">
            Куда
          </label>
          <input
            id="avia-filters-to"
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            list="avia-to-dl"
            placeholder="Город прилёта"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
            autoComplete="off"
          />
          <datalist id="avia-to-dl">
            {toOptions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="avia-filters-airline" className="trip-filters__label-text">
            Авиакомпания
          </label>
          <input
            id="avia-filters-airline"
            type="text"
            className="trip-filters__combo trip-filters__combo--with-list"
            list="avia-airline-dl"
            placeholder="Название перевозчика"
            value={airline}
            onChange={(e) => onAirlineChange(e.target.value)}
            autoComplete="off"
          />
          <datalist id="avia-airline-dl">
            {airlineOptions.map((name) => (
              <option key={name} value={name} />
            ))}
          </datalist>
        </div>

        <div className="trip-filters__field">
          <label htmlFor="avia-filters-price" className="trip-filters__label-text">
            Цена
          </label>
          <input
            id="avia-filters-price"
            type="text"
            className="trip-filters__combo trip-filters__combo--price trip-filters__combo--with-list"
            inputMode="text"
            list="avia-price-dl"
            placeholder="Введите цену"
            value={priceText}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
          />
          <datalist id="avia-price-dl">
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

export default AviaFiltersBar;
