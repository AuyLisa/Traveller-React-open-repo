import { useMemo } from 'react';
import { buildAviaFilterOptions } from '@utils/filterAvias';
import DownSelect from '@down-select/DownSelect';
import './AviaToolbar.css';

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
  durationMinHours,
  durationMaxHours,
  onDurationMinChange,
  onDurationMaxChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}) {
  const { froms, tos, airlines } = useMemo(() => buildAviaFilterOptions(avias), [avias]);

  const fromOptions = useMemo(
    () => [
      { value: '', label: 'Любой город' },
      ...froms.map((c) => ({ value: c, label: c })),
    ],
    [froms]
  );
  const toOptions = useMemo(
    () => [
      { value: '', label: 'Любой город' },
      ...tos.map((c) => ({ value: c, label: c })),
    ],
    [tos]
  );
  const airlineOptions = useMemo(
    () => [
      { value: '', label: 'Любая авиакомпания' },
      ...airlines.map((a) => ({ value: a, label: a })),
    ],
    [airlines]
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
          <DownSelect
            id="avia-toolbar-from"
            className="trips-toolbar__input"
            value={from}
            onChange={onFromChange}
            options={fromOptions}
          />
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-to">
            Куда
          </label>
          <DownSelect
            id="avia-toolbar-to"
            className="trips-toolbar__input"
            value={to}
            onChange={onToChange}
            options={toOptions}
          />
        </div>

        <div className="trips-toolbar__field">
          <label className="trips-toolbar__label" htmlFor="avia-toolbar-airline">
            Авиакомпания
          </label>
          <DownSelect
            id="avia-toolbar-airline"
            className="trips-toolbar__input"
            value={airline}
            onChange={onAirlineChange}
            options={airlineOptions}
          />
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--range">
          <span className="trips-toolbar__label" id="avia-toolbar-duration-legend">
            Длительность, ч
          </span>
          <div
            className="trips-toolbar__range"
            role="group"
            aria-labelledby="avia-toolbar-duration-legend"
          >
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              max="48"
              step="0.25"
              inputMode="decimal"
              value={durationMinHours}
              onChange={(e) => onDurationMinChange(e.target.value)}
              placeholder="от"
              autoComplete="off"
              aria-label="Длительность от, часы"
            />
            <span className="trips-toolbar__range-sep" aria-hidden="true">
              —
            </span>
            <input
              className="trips-toolbar__input trips-toolbar__input--numeric"
              type="number"
              min="0"
              max="48"
              step="0.25"
              inputMode="decimal"
              value={durationMaxHours}
              onChange={(e) => onDurationMaxChange(e.target.value)}
              placeholder="до"
              autoComplete="off"
              aria-label="Длительность до, часы"
            />
          </div>
        </div>

        <div className="trips-toolbar__field trips-toolbar__field--range">
          <span className="trips-toolbar__label" id="avia-toolbar-price-legend">
            Цена, ₽
          </span>
          <div
            className="trips-toolbar__range"
            role="group"
            aria-labelledby="avia-toolbar-price-legend"
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

export default AviaToolbar;
