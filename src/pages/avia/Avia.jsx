{/* для фильтрации будут 
1 from
2 to
3 price разделится на дешевые и дорогие
4 airline
*/}


import Layout from '../../components/layout/Layout';
import AviaCard from '../../components/avia-card/AviaCard';
import avias from '../../data/avia';
import './Avia.css';
import {useState} from 'react';

const citiesFrom = [
  { value: '', label: 'вылет' },
  { value: 'Москва (VKO)', label: 'Москва (VKO)' },
  { value: 'Москва (SVO)', label: 'Москва (SVO)' },
  { value: 'Москва (DME)', label: 'Москва (DME)' },
  { value: 'Санкт-Петербург (LED)', label: 'Санкт-Петербург (LED)' },
  { value: 'Екатеринбург (SVX)', label: 'Екатеринбург (SVX)' },
  { value: 'Сочи (AER)', label: 'Сочи (AER)' }
];

const citiesTo = [
  { value: '', label: 'прилет' },
  { value: 'Стамбул (IST)', label: 'Стамбул (IST)' },
  { value: 'Анталия (AYT)', label: 'Анталия (AYT)' },
  { value: 'Дубай (DXB)', label: 'Дубай (DXB)' },
  { value: 'Бангкок (BKK)', label: 'Бангкок (BKK)' },
  { value: 'Пхукет (HKT)', label: 'Пхукет (HKT)' },
  { value: 'Тбилиси (TBS)', label: 'Тбилиси (TBS)' },
  { value: 'Париж (CDG)', label: 'Париж (CDG)' }
];

const prices = [
  { value: '', label: 'все цены'},
  { value: 'asc', label: 'сначала дешевые'},
  { value: 'desc', label: 'сначала дорогие'}
]


function Avia() {
  const [chosenCity1, setCity1] = useState('');
  const [chosenCity2, setCity2] = useState('');
  const [chosenSortPrice, setSortPrice] = useState('');


  //по странам 1вылет
  const c1_filtered = chosenCity1 === ''
  ? avias
  : avias.filter(avia => avia.from === chosenCity1);

  //по странам 2вылет
  const c2_filtered = chosenCity2 === ''
  ? c1_filtered
  : c1_filtered.filter(avia => avia.to === chosenCity2);

   //по цене
   const p_filtered = [...c2_filtered] 
   if (chosenSortPrice === 'asc') 
       p_filtered.sort((a, b) => a.price - b.price); 
   if (chosenSortPrice === 'desc') 
       p_filtered.sort((a, b) => b.price - a.price); 


  const res = p_filtered;


  return (
    <Layout>
      <h1 className="avia__title">Авиабилеты</h1>
      <div className="avia__filters">
        {/* по странам 1 вылет*/}
        <select className="avia__select"
        value={chosenCity1} onChange={(e) => setCity1(e.target.value)}>
        {citiesFrom.map(city => (<option key={city.value} value={city.value}>
            {city.label}
            </option>
          ))}
        </select>


        {/* по странам 1 прилет*/}
        <select className="avia__select"
        value={chosenCity2} onChange={(e) => setCity2(e.target.value)}>
        {citiesTo.map(city => (<option key={city.value} value={city.value}>
            {city.label}
            </option>
          ))}
        </select>

        {/* по цене */}
        <select className="avia__select"
        value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
        {prices.map(price => (<option key={price.value} value={price.value}>
            {price.label}
            </option>
          ))}
        </select>
      </div>


      <div className="avia__results">
        Найдено авиаперелетов:  
        <span className="avia__count"> {res.length}</span>
      </div>

      {res.map(avia => (
          <AviaCard key={avia.id} avia={avia} />
        ))}
    </Layout>
  );
}

export default Avia;
