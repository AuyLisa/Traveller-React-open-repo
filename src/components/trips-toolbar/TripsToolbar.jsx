import { useMemo } from 'react';
import { buildTripFilterOptions } from '../../utils/filterTrips';
import './TripsToolbar.css';

function TripsToolbar({
  trips,
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  stars,
  onStarsChange,
  nights,
  onNightsChange,
  maxPrice,
  onMaxPriceChange,
  sort,
  onSortChange,
  onReset,
}) {
  const { countries, stars: starOptions, nights: nightOptions, pricePoints } = useMemo(
    () => buildTripFilterOptions(trips),
    [trips]
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
          <select
            id="trips-toolbar-country"
            className="trips-toolbar__input"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
          >
            <option value="">Все страны</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-stars">
            Категория
          </label>
          <select
            id="trips-toolbar-stars"
            className="trips-toolbar__input"
            value={stars}
            onChange={(e) => onStarsChange(e.target.value)}
          >
            <option value="">Любая категория</option>
            {starOptions.map((n) => (
              <option key={n} value={String(n)}>
                {n}*
              </option>
            ))}
          </select>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-nights">
            Количество ночей
          </label>
          <select
            id="trips-toolbar-nights"
            className="trips-toolbar__input"
            value={nights}
            onChange={(e) => onNightsChange(e.target.value)}
          >
            <option value="">Любая длительность</option>
            {nightOptions.map((n) => (
              <option key={n} value={String(n)}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-price">
            Цена
          </label>
          <input
            id="trips-toolbar-price"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            list="trips-toolbar-price-list"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value.replace(/[^\d\s]/g, ''))}
            placeholder="Макс. стоимость, ₽"
            autoComplete="off"
          />
          <datalist id="trips-toolbar-price-list">
            {pricePoints.map((p) => (
              <option key={p} value={String(p)} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-sort">
            Сортировка
          </label>
          <select
            id="trips-toolbar-sort"
            className="trips-toolbar__input"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="">Без сортировки</option>
            <option value="price_asc">Сначала дешевле</option>
            <option value="price_desc">Сначала дороже</option>
            <option value="nights_asc">Ночей меньше</option>
            <option value="nights_desc">Ночей больше</option>
            <option value="stars_desc">Категория выше</option>
          </select>
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
