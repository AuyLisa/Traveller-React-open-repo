import { useMemo } from 'react';
import { buildTripFilterOptions } from '@utils/filterTrips';
import DownSelect from '@down-select/DownSelect';
import './TripsToolbar.css';

function starsEmoji(n) {
  return '⭐'.repeat(Math.min(5, Math.max(1, Number(n))));
}

function TripsToolbar({
  trips,
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  selectedStars,
  onStarToggle,
  nights,
  onNightsChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  sort,
  onSortChange,
  onReset,
}) {
  const { countries, stars: starOptions, nights: nightOptions } = useMemo(
    () => buildTripFilterOptions(trips),
    [trips]
  );

  const countrySelectOptions = useMemo(
    () => [
      { value: '', label: 'Все страны' },
      ...countries.map((c) => ({ value: c, label: c })),
    ],
    [countries]
  );

  const nightsSelectOptions = useMemo(
    () => [
      { value: '', label: 'Любая длительность' },
      ...nightOptions.map((n) => ({ value: String(n), label: String(n) })),
    ],
    [nightOptions]
  );

  const sortSelectOptions = useMemo(
    () => [
      { value: '', label: 'Без сортировки' },
      { value: 'price_asc', label: 'Сначала дешевле' },
      { value: 'price_desc', label: 'Сначала дороже' },
      { value: 'nights_asc', label: 'Ночей меньше' },
      { value: 'nights_desc', label: 'Ночей больше' },
      { value: 'stars_desc', label: 'Звёзды выше' },
    ],
    []
  );

  return (
    <div className="trips-toolbar">
      <div className="trips-toolbar__search">
        <label className="trips-toolbar__label" htmlFor="trips-toolbar-search">
          Поиск
        </label>
        <input
          id="trips-toolbar-search"
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
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-country">
            Страна
          </label>
          <DownSelect
            id="trips-toolbar-country"
            className="trips-toolbar__input"
            value={country}
            onChange={onCountryChange}
            options={countrySelectOptions}
          />
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--stars">
          <span className="trips-toolbar__label" id="trips-toolbar-stars-legend">
            Количество звёзд
          </span>
          <div
            className="trips-toolbar__checkbox-group"
            role="group"
            aria-labelledby="trips-toolbar-stars-legend"
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

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-nights">
            Количество ночей
          </label>
          <DownSelect
            id="trips-toolbar-nights"
            className="trips-toolbar__input"
            value={nights}
            onChange={onNightsChange}
            options={nightsSelectOptions}
          />
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--range">
          <span className="trips-toolbar__label" id="trips-toolbar-price-legend">
            Цена, ₽
          </span>
          <div
            className="trips-toolbar__range"
            role="group"
            aria-labelledby="trips-toolbar-price-legend"
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

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-sort">
            Сортировка
          </label>
          <DownSelect
            id="trips-toolbar-sort"
            className="trips-toolbar__input"
            value={sort}
            onChange={onSortChange}
            options={sortSelectOptions}
          />
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

export default TripsToolbar;
