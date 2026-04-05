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
  onPriceRangeChange,
  durationOptions,
  priceRangeOptions,
  onReset,
}) {
  return (
    <div className="trip-filters">
      <label className="trip-filters__search-label">
        <span className="trip-filters__label-text">Поиск</span>
        <input
          type="search"
          className="trip-filters__search"
          placeholder="Название, описание, страна, город…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          autoComplete="off"
        />
      </label>

      <div className="trip-filters__row">
        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Страна</span>
          <select
            className="trip-filters__select"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
          >
            <option value="">Все страны</option>
            {countryOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>

        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Ночей</span>
          <select
            className="trip-filters__select"
            value={durationMin}
            onChange={(e) => onDurationChange(Number(e.target.value))}
          >
            {durationOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <label className="trip-filters__field">
          <span className="trip-filters__label-text">Цена</span>
          <select
            className="trip-filters__select"
            value={priceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
          >
            {priceRangeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        <button type="button" className="trip-filters__reset" onClick={onReset}>
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default TripFiltersBar;
