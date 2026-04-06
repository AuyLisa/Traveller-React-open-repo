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
import './Hotels.css';
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

const stars = [
  { value: 0, label: 'все отели'},
  { value: 5, label: '⭐⭐⭐⭐⭐'},
  { value: 4, label: '⭐⭐⭐⭐'},
  { value: 3, label: '⭐⭐⭐'},
  { value: 2, label: '⭐⭐'},
  { value: 1, label: '⭐'},
];

const reviews = [
  { value: 0, label: 'любое число отзывов'},
  { value: 20, label: '20+ отзывов'},
  { value: 50, label: '50+ отзывов'},
  { value: 100, label: '100+ отзывов'},
  { value: 200, label: '200+ отзывов'},
  { value: 500, label: '500+ отзывов'}
]

const prices = [
  { value: '', label: 'все цены'},
  { value: 'asc', label: 'сначала дешевые'},
  { value: 'desc', label: 'сначала дорогие'}
]

function Hotels() {

  const [chosenCountry, setCountry] = useState('');
  const [chosenStars, setStars] = useState(0);
  //const [chosenOptions, setOptions] = useState([]); // -
  const [minReviews, setminReviews] = useState(0);
  const [chosenSortPrice, setSortPrice] = useState('');



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
      <h1 className="hotels__title">Отели</h1>
      <div className="hotels__filters">

        {/* по странам */}
        <select className="hotels__select"
        value={chosenCountry} onChange={(e) => setCountry(e.target.value)}>
          {countries.map(country => (<option key={country.value} value={country.value}> 
          {country.label}
          </option>
          ))}
        </select>

        {/* по звездам */}
        <select className="hotels__select"
        value={chosenStars} onChange={(e) => setStars(Number(e.target.value))}>
          {stars.map(star => (<option key={star.value} value={star.value}> 
          {star.label}
          </option>
          ))}
        </select>


        {/* по числу отзывов */}
        <select className="hotels__select"
        value={minReviews} onChange={(e) => setminReviews(Number(e.target.value))}>
          {reviews.map(review => (<option key={review.value} value={review.value}> 
            {review.label}
            </option>
            ))}
        </select>

        {/* по цене */}
        <select className="hotels__select"
        value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
          {prices.map(price => (<option key={price.value} value={price.value}> 
            {price.label}
            </option>
            ))}
        </select>


      </div>

      <div className="hotels__results">
        Найдено отелей:  
        <span className="hotels__count"> {res.length}</span>
      </div>

      {res.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
    </Layout>
  );
}

export default Hotels;
