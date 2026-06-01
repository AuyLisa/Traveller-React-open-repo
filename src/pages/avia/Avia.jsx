import { useMemo, useState, useCallback } from 'react';

// components
import Layout from '@ui/layout/Layout';
import SearchSectionSwitch from '@ui/search-section-switch/SearchSectionSwitch';
import AviaCard from '@avias/avia-card/AviaCard';
import AviaToolbar from '@avias/avia-toolbar/AviaToolbar';
import AviaClasses from '@avias/avia-classes/AviaClasses';

// data
import avias from '@data/avias/avia';

import { filterAvias } from '@utils/filterAvias';
import './Avia.css';

function Avia() {
  const [searchQuery, setSearchQuery] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [airline, setAirline] = useState('');
  const [durationMinHours, setDurationMinHours] = useState('');
  const [durationMaxHours, setDurationMaxHours] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(
    () =>
      filterAvias(avias, {
        searchQuery,
        from,
        to,
        airline,
        durationMinHoursRaw: durationMinHours,
        durationMaxHoursRaw: durationMaxHours,
        minPriceRaw: minPrice,
        maxPriceRaw: maxPrice,
      }),
    [searchQuery, from, to, airline, durationMinHours, durationMaxHours, minPrice, maxPrice]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setFrom('');
    setTo('');
    setAirline('');
    setDurationMinHours('');
    setDurationMaxHours('');
    setMinPrice('');
    setMaxPrice('');
  }, []);

  return (
    <Layout>

      <div className="top__part"> 
        <h1 className="avia__title">Авиабилеты</h1>
        <div className="search-switch-row">
          <SearchSectionSwitch />
        </div>
      </div>

      {/* Основной контейнер с фильтрами и билетами */}
      <div className="avia__layout">
        {/* Фильтры - слева */}
        <aside className="avia__filters-sidebar">
          <AviaToolbar
            avias={avias}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            from={from}
            onFromChange={setFrom}
            to={to}
            onToChange={setTo}
            airline={airline}
            onAirlineChange={setAirline}
            durationMinHours={durationMinHours}
            durationMaxHours={durationMaxHours}
            onDurationMinChange={setDurationMinHours}
            onDurationMaxChange={setDurationMaxHours}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onReset={handleReset}
          />
        </aside>

        {/* Билеты - справа */}
        <div className="avia__content">
          {filtered.length === 0 ? (
            <p className="avia__empty" role="status">
              Ничего не найдено. Измените запрос или нажмите «Сбросить».
            </p>
          ) : (
            <>
              <div className="avia__results">
                Найдено авиаперелетов:
                <span className="avia__count"> {filtered.length}</span>
              </div>

              <div className="avia__all">
                {filtered.map((avia) => (
                  <div className="avia__ticket" key={avia.id}>
                    <AviaCard aviaCardId={avia.id} avia={avia} />
                    <AviaClasses 
                      avia={avia} 
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Avia;