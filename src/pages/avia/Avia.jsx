import { useMemo, useState, useCallback } from 'react';
import Layout from '../../components/layout/Layout';
import AviaCard from '../../components/avia-card/AviaCard';
import AviaToolbar from '../../components/avia-toolbar/AviaToolbar';
import avias from '../../data/avia';
import { filterAvias } from '../../utils/filterAvias';
import './Avia.css';

function Avia() {
  const [searchQuery, setSearchQuery] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [airline, setAirline] = useState('');
  const [duration, setDuration] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = useMemo(
    () =>
      filterAvias(avias, {
        searchQuery,
        from,
        to,
        airline,
        durationRaw: duration,
        maxPriceRaw: maxPrice,
      }),
    [searchQuery, from, to, airline, duration, maxPrice]
  );

  const handleReset = useCallback(() => {
    setSearchQuery('');
    setFrom('');
    setTo('');
    setAirline('');
    setDuration('');
    setMaxPrice('');
  }, []);

  return (
    <Layout>
      <h1 className="avia__title">Авиабилеты</h1>
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
        duration={duration}
        onDurationChange={setDuration}
        maxPrice={maxPrice}
        onMaxPriceChange={setMaxPrice}
        onReset={handleReset}
      />

      {filtered.length === 0 ? (
        <p className="avia__empty" role="status">
          Ничего не найдено. Измените запрос или нажмите «Сбросить».
        </p>
      ) : (
        filtered.map((avia) => <AviaCard key={avia.id} avia={avia} />)
      )}
    </Layout>
  );
}

export default Avia;
