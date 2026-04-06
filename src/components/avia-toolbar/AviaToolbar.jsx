import { useMemo } from 'react';
import { buildAviaFilterOptions } from '../../utils/filterAvias';
import '../trips-toolbar/TripsToolbar.css';

function AviaToolbar({
  avias,
  searchQuery,
  onSearchChange,
  from,
  onFromChange,
  to,
  onToChange,
  airline,
  onAirlineChange,
  duration,
  onDurationChange,
  maxPrice,
  onMaxPriceChange,
  onReset,
}) {
  const { froms, tos, airlines, durations, pricePoints } = useMemo(
    () => buildAviaFilterOptions(avias),
    [avias]
  );

  return (
    <div className="trips-toolbar">
      <div className="trips-toolbar__search">
        <label className="trips-toolbar__label" htmlFor="avia-toolbar-search">
          Поиск
        </label>
        <input
          id="avia-toolbar-search"
          className="trips-toolbar__input trips-toolbar__input--wide"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Откуда, куда, авиакомпания, время"
          autoComplete="off"
        />
      </div>

      <div className="trips-toolbar__filters">
        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-from">
            Откуда
          </label>
          <input
            id="avia-toolbar-from"
            className="trips-toolbar__input"
            type="text"
            list="avia-toolbar-from-list"
            value={from}
            onChange={(e) => onFromChange(e.target.value)}
            placeholder="Город вылета"
            autoComplete="off"
          />
          <datalist id="avia-toolbar-from-list">
            {froms.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-to">
            Куда
          </label>
          <input
            id="avia-toolbar-to"
            className="trips-toolbar__input"
            type="text"
            list="avia-toolbar-to-list"
            value={to}
            onChange={(e) => onToChange(e.target.value)}
            placeholder="Город прилёта"
            autoComplete="off"
          />
          <datalist id="avia-toolbar-to-list">
            {tos.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-airline">
            Авиакомпания
          </label>
          <input
            id="avia-toolbar-airline"
            className="trips-toolbar__input"
            type="text"
            list="avia-toolbar-airline-list"
            value={airline}
            onChange={(e) => onAirlineChange(e.target.value)}
            placeholder="Авиакомпания"
            autoComplete="off"
          />
          <datalist id="avia-toolbar-airline-list">
            {airlines.map((a) => (
              <option key={a} value={a} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-duration">
            Длительность
          </label>
          <input
            id="avia-toolbar-duration"
            className="trips-toolbar__input"
            type="text"
            list="avia-toolbar-duration-list"
            value={duration}
            onChange={(e) => onDurationChange(e.target.value)}
            placeholder="Напр. 3ч 30м"
            autoComplete="off"
          />
          <datalist id="avia-toolbar-duration-list">
            {durations.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-price">
            Цена
          </label>
          <input
            id="avia-toolbar-price"
            className="trips-toolbar__input trips-toolbar__input--numeric"
            type="text"
            inputMode="numeric"
            list="avia-toolbar-price-list"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value.replace(/[^\d\s]/g, ''))}
            placeholder="Макс. стоимость, ₽"
            autoComplete="off"
          />
          <datalist id="avia-toolbar-price-list">
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

export default AviaToolbar;
