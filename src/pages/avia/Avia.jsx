import { useMemo, useState, useCallback } from 'react';
import Layout from '../../components/layout/Layout';
import SearchSectionSwitch from '../../components/search-section-switch/SearchSectionSwitch';
import AviaCard from '../../components/avia-card/AviaCard';
import AviaToolbar from '../../components/avia-toolbar/AviaToolbar';
import AviaClasses from '../../components/avia-classes/AviaClasses';
import avias from '../../data/avia';
import { filterAvias } from '../../utils/filterAvias';
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
      <h1 className="avia__title">Авиабилеты</h1>
      <div className="search-switch-row">
        <SearchSectionSwitch />
      </div>
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

          <div className="avia__flights">
            {filtered.map((avia) => (
              <div className="avia__row" key={avia.id}>
                <AviaCard aviaCardId={avia.id} avia={avia} />

                <AviaClasses aviaClassesId={avia.id} price={avia.price} duration={avia.duration} />
              </div>
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}

export default Avia;
