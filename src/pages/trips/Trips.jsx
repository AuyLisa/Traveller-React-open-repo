{/* для фильтрации будут 3 параметра
+1 country
+2 duration
+3 price разделится на дешевые и дорогие
*/}


import Layout from '../../components/layout/Layout';
import TripCard from '../../components/trip-card/TripCard';
import trips from '../../data/trips'; 
import {useState} from 'react';


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
      <h1>Наши туры</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>

        {/* по странам */}
        <select value={chosenCountry} onChange={(e) => setCountry(e.target.value)}>
          <option value="">все страны</option>
          <option value="Турция"> Турция </option>
          <option value="ОАЭ"> ОАЭ </option>
          <option value="Египет"> Египет </option>
          <option value="Таиланд"> Таиланд </option>
          <option value="Грузия"> Грузия </option>
          <option value="Мальдивы"> Мальдивы </option>
        </select>

        {/* по продолжительности */}
        <select value={chosenDuration} onChange={(e) => setDuration(Number(e.target.value))}>
          <option value="0">любое количество дней</option>
          <option value="3"> от 3х дней</option>
          <option value="7"> от 7 дней</option>
          <option value="21"> от 21 дня</option>
          <option value="30"> от 30 дней</option>
          <option value="50"> от 50 дней</option>
          <option value="100"> от 100 дней</option>
        </select>

        {/* по цене */}
        <select value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
          <option value="">все цены</option>
          <option value="asc"> сначала дешевые</option>
          <option value="desc"> сначала дорогие</option>
        </select>

    </div>
    <p>Найдено туров: {res.length}</p>
      {res.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
    </Layout>
  );
}

export default Trips;