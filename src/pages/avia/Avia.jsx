{/* для фильтрации будут 
1 from
2 to
3 price разделится на дешевые и дорогие
4 airline
*/}


import Layout from '../../components/layout/Layout';
import AviaCard from '../../components/avia-card/AviaCard';
import avias from '../../data/avia';
import {useState} from 'react';

function Avia() {
  const [chosenCountry1, setCountry1] = useState('');
  const [chosenCountry2, setCountry2] = useState('');
  const [chosenSortPrice, setSortPrice] = useState('');


  //по странам 1вылет
  const c1_filtered = chosenCountry1 === ''
  ? avias
  : avias.filter(avia => avia.from === chosenCountry1);

  //по странам 2вылет
  const c2_filtered = chosenCountry2 === ''
  ? c1_filtered
  : c1_filtered.filter(avia => avia.to === chosenCountry2);

   //по цене
   const p_filtered = [...c2_filtered] 
   if (chosenSortPrice === 'asc') 
       p_filtered.sort((a, b) => a.price - b.price); 
   if (chosenSortPrice === 'desc') 
       p_filtered.sort((a, b) => b.price - a.price); 


  const res = p_filtered;


  return (
    <Layout>
      <h1>Авиабилеты</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        {/* по странам 1 вылет*/}
        <select value={chosenCountry1} onChange={(e) => setCountry1(e.target.value)}>
          <option value="">вылет</option>
          <option value="Москва (VKO)"> Москва (VKO) </option>
          <option value="Москва (SVO)"> Москва (SVO) </option>
          <option value="Москва (DME)"> Москва (DME) </option>
          <option value="Санкт-Петербург (LED)"> Санкт-Петербург (LED) </option>
          <option value="Екатеринбург (SVX)"> Екатеринбург (SVX) </option>
          <option value="Сочи (AER)"> Сочи (AER) </option>
        </select>

        {/* по странам 1 прилет*/}
        <select value={chosenCountry2} onChange={(e) => setCountry2(e.target.value)}>
          <option value="">прилет</option>
          <option value="Стамбул (IST)"> Стамбул (IST) </option>
          <option value="Анталия (AYT)"> Анталия (AYT) </option>
          <option value="Дубай (DXB)"> Дубай (DXB) </option>
          <option value="Бангкок (BKK)"> Бангкок (BKK) </option>
          <option value="Пхукет (HKT)"> Пхукет (HKT) </option>
          <option value="Тбилиси (TBS)"> Тбилиси (TBS) </option>
          <option value="Тбилиси (TBS)"> Тбилиси (TBS) </option>
          <option value="Париж (CDG)"> Париж (CDG) </option>
        </select>

        {/* по цене */}
        <select value={chosenSortPrice} onChange={(e) => setSortPrice(e.target.value)}>
          <option value="">все цены</option>
          <option value="asc"> сначала дешевые</option>
          <option value="desc"> сначала дорогие</option>
        </select>


      </div>
      <p>Найдено авиаперелетов: {res.length}</p>
      {res.map(avia => (
          <AviaCard key={avia.id} avia={avia} />
        ))}
    </Layout>
  );
}

export default Avia;