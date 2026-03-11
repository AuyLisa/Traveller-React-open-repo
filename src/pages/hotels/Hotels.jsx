{/* для фильтрации будут 
+1 country
+2 stars
+3 price разделится на дешевые и дорогие
-4 options
+5=reviews
*/}


import Layout from '../../components/layout/Layout';
import HotelCard from '../../components/hotel-card/HotelCard';
import hotels from '../../data/hotels'; 
import {useState} from 'react';


function Hotels() {

  const [chosenCountry, setCountry] = useState('');  // по умолч=все страны строка
  const [chosenStars, setStars] = useState(0);  // по умолч=все звезды число (в бд)
  //const [chosenOptions, setOptions] = useState([]); // -
  const [minReviews, setminReviews] = useState(0); // по числу отзывов по умолч=все
  const [chosenSortPrice, setSortPrice] = useState(''); //по умолч без сортировки



  //по странам
  const c_filtered = chosenCountry === ''
  ? hotels
  : hotels.filter(hotel => hotel.country === chosenCountry);

  //по звездам
  const s_filtered = chosenStars === 0
  ? c_filtered  //результат после фильтра по странам
  : c_filtered.filter(hotel => hotel.stars === chosenStars);

  //по опциям пока -
  {/*const op_filtered = chosenOptions.length === 0
  ? s_filtered
  : s_filtered.filter(hotel=> {
    return chosenOptions.every(option => hotel.options.includes(option));
  });
*/}

  //по числу отзывов
  const r_filtered = minReviews === 0
  ? s_filtered 
  : s_filtered.filter(hotel => hotel.reviews >= minReviews);


  //по цене
  const p_filtered = [...r_filtered] 
  if (chosenSortPrice === 'asc') 
      p_filtered.sort((a, b) => a.price - b.price);  //по возр
  if (chosenSortPrice === 'desc') 
      p_filtered.sort((a, b) => b.price - a.price);  //по убыв



  const res = p_filtered;



  return (
    <Layout>
      <h1>Отели</h1>
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

        {/* по звездам */}
        <select value={chosenStars} onChange={(e) => setStars(Number(e.target.value))}>
          <option value="0">все отели</option>
          <option value="5">5 ⭐⭐⭐⭐⭐</option>
          <option value="4">4 ⭐⭐⭐⭐</option>
          <option value="3">3 ⭐⭐⭐</option>
          <option value="2">2 ⭐⭐</option>
          <option value="1">1 ⭐</option>
        </select>


      {/* по числу отзывов */}
      <select value={minReviews} onChange={(e) => setminReviews(Number(e.target.value))}>
          <option value="0">любое число отзывов</option>
          <option value="20"> 20+ отзывов</option>
          <option value="50">50+ отзывов</option>
          <option value="100">100+ отзывов</option>
          <option value="200">200+ отзывов</option>
          <option value="500">500+ отзывов</option>
        </select>

      {/* по цене */}
      <select value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
          <option value="">все цены</option>
          <option value="asc"> сначала дешевые</option>
          <option value="desc"> сначала дорогие</option>
        </select>
      </div>


      <p>Найдено отелей: {res.length}</p>
      {res.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
    </Layout>
  );
}

export default Hotels;