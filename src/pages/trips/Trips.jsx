{/* для фильтрации будут 3 параметра
+1 country
+2 duration
+3 price разделится на дешевые и дорогие
*/}


import Layout from '../../components/layout/Layout';
import TripCard from '../../components/trip-card/TripCard';
import trips from '../../data/trips'; 
import './Trips.css';
import {useState} from 'react';


const countries = [
  { value: '', label: 'все страны'},
  { value: 'Турция', label: 'Турция'},
  { value: 'ОАЭ', label: 'ОАЭ'},
  { value: 'Египет', label: 'Египет'},
  { value: 'Таиланд', label: 'Таиланд'},
  { value: 'Грузия', label: 'Грузия'},
  { value: 'Мальдивы', label: 'Мальдивы'}
];

const durations = [
  { value: '0', label: 'любое количество дней'},
  { value: '3', label: 'от 3х дней'},
  { value: '7', label: 'от 7 дней'},
  { value: '21', label: 'от 21 дня'},
  { value: '30', label: 'от месяца'},
  { value: '100', label: 'от 100 дней'}
];

const prices = [
  {value: '', label: 'все цены'},
  {value: "asc", label: 'сначала дешевые'},
  {value: "desc", label: 'сначала дорогие'}
]

function Trips() {

  const [chosenCountry, setCountry] = useState('');
  const [chosenDuration, setDuration] = useState(0);
  const [chosenSortPrice, setSortPrice] = useState('');


  //по странам
  const c_filtered = chosenCountry === ''
  ? trips
  : trips.filter(trip => trip.country === chosenCountry);

  //по продолжительности
  const d_filtered = chosenDuration === 0
  ? c_filtered
  : c_filtered.filter(trip => trip.duration >= chosenDuration);

   //по цене
   const p_filtered = [...d_filtered] 
   if (chosenSortPrice === 'asc') 
       p_filtered.sort((a, b) => a.price - b.price); 
   if (chosenSortPrice === 'desc') 
       p_filtered.sort((a, b) => b.price - a.price); 

  const res = p_filtered;

  return (
    <Layout>
      <h1 className="trips__title">Туры</h1>
      <div className="trips__filters">

        {/* по странам */}
        <select className="trips__select"
        value={chosenCountry} onChange={(e) => setCountry(e.target.value)}>
          {countries.map(country => (<option key={country.value} value={country.value}> {country.label}
          </option>
          ))}
        </select>

        {/* по продолжительности */}
        <select className="trips__select"
        value={chosenDuration} onChange={(e) => setDuration(Number(e.target.value))}>
          {durations.map(duration => (<option key={duration.value} value={duration.value}> {duration.label}
          </option>
          ))}
        </select>


        {/* по цене */}
        <select className="trips__select"
        value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
        {prices.map(price => (<option key={price.value} value={price.value}> {price.label}
          </option>
          ))}
        </select>

    </div>

    <div className="trips__results">
        Найдено туров:  
        <span className="trips__count"> {res.length}</span>
    </div>

    <div className="trips__grid">
        {res.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
    </div>
    </Layout>
  );
}

export default Trips;
