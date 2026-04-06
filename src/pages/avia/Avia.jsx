import { useMemo, useState } from 'react';
import Layout from '../../components/layout/Layout';
import AviaCard from '../../components/avia-card/AviaCard';
import AviaFiltersBar from '../../components/avia-filters/AviaFiltersBar';
import avias from '../../data/avia';
import {
  filterAvias,
  getUniqueAirlines,
  getUniqueFrom,
  getUniqueTo,
} from '../../utils/aviaSearchFilter';
import './Avia.css';

const INITIAL_FILTERS = {
  searchQuery: '',
  from: '',
  to: '',
  airline: '',
  priceRange: 'all',
  priceMin: '',
  priceMax: '',
};

function Avia() {
  const [searchQuery, setSearchQuery] = useState(INITIAL_FILTERS.searchQuery);
  const [from, setFrom] = useState(INITIAL_FILTERS.from);
  const [to, setTo] = useState(INITIAL_FILTERS.to);
  const [airline, setAirline] = useState(INITIAL_FILTERS.airline);
  const [priceRange, setPriceRange] = useState(INITIAL_FILTERS.priceRange);
  const [priceMin, setPriceMin] = useState(INITIAL_FILTERS.priceMin);
  const [priceMax, setPriceMax] = useState(INITIAL_FILTERS.priceMax);

  const fromOptions = useMemo(() => getUniqueFrom(avias), []);
  const toOptions = useMemo(() => getUniqueTo(avias), []);
  const airlineOptions = useMemo(() => getUniqueAirlines(avias), []);

  const filteredAvias = useMemo(
    () =>
      filterAvias(avias, {
        searchQuery,
        from,
        to,
        airline,
        priceRange,
        priceMin,
        priceMax,
      }),
    [searchQuery, from, to, airline, priceRange, priceMin, priceMax],
  );

  const handleReset = () => {
    setSearchQuery(INITIAL_FILTERS.searchQuery);
    setFrom(INITIAL_FILTERS.from);
    setTo(INITIAL_FILTERS.to);
    setAirline(INITIAL_FILTERS.airline);
    setPriceRange(INITIAL_FILTERS.priceRange);
    setPriceMin(INITIAL_FILTERS.priceMin);
    setPriceMax(INITIAL_FILTERS.priceMax);
  };

  const handlePriceFilterChange = (next) => {
    setPriceRange(next.priceRange);
    setPriceMin(next.priceMin);
    setPriceMax(next.priceMax);
  };

  return (
    <Layout>
      <h1 className="avia__title">Авиабилеты</h1>

      <AviaFiltersBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        from={from}
        onFromChange={setFrom}
        fromOptions={fromOptions}
        to={to}
        onToChange={setTo}
        toOptions={toOptions}
        airline={airline}
        onAirlineChange={setAirline}
        airlineOptions={airlineOptions}
        priceRange={priceRange}
        priceMin={priceMin}
        priceMax={priceMax}
        onPriceFilterChange={handlePriceFilterChange}
        onReset={handleReset}
      />

      <div className="avia__results">
        Найдено рейсов:
        <span className="avia__count"> {filteredAvias.length}</span>
      </div>

      {filteredAvias.length === 0 ? (
        <p className="avia__empty" role="status">
          Ничего не найдено. Попробуйте изменить запрос или сбросить фильтры.
        </p>
      ) : (
        <div className="avia__list">
          {filteredAvias.map((avia) => (
            <AviaCard key={avia.id} avia={avia} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Avia;
