import { useMemo } from 'react';
import { buildTripFilterOptions } from '../../utils/filterTrips';
import './TripsToolbar.css';

function TripsToolbar({
  trips,
  searchQuery,
  onSearchChange,
  country,
  onCountryChange,
  nights,
  onNightsChange,
  maxPrice,
  onMaxPriceChange,
  onReset,
}) {
  const { countries, nights: nightOptions, pricePoints } = useMemo(
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
          <input
            id="trips-toolbar-country"
            className="trips-toolbar__input"
            type="text"
            list="trips-toolbar-country-list"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            placeholder="Страна"
            autoComplete="off"
          />
          <datalist id="trips-toolbar-country-list">
            {countries.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="trips-toolbar-nights">
            Количество ночей
          </label>
          <input
            id="trips-toolbar-nights"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            list="trips-toolbar-nights-list"
            value={nights}
            onChange={(e) => onNightsChange(e.target.value.replace(/\D/g, ''))}
            placeholder="Введите количество ночей"
            autoComplete="off"
          />
          <datalist id="trips-toolbar-nights-list">
            {nightOptions.map((n) => (
              <option key={n} value={String(n)} />
            ))}
          </datalist>
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
