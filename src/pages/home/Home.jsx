import {useState} from 'react';
import './Home.css';

//components
import Layout from '@ui/layout/Layout';
import SearchSectionSwitch from '@ui/search-section-switch/SearchSectionSwitch';
import TripTop from '@home/trip-top/TripTop';
import CardTripCountry from '@home/card-trip-country/CardTripCountry';
import CardTripFromMoscow from '@home/card-trip-frommoscow/CardTripFromMoscow';
import CardTripToHotel from '@home/card-trip-tohotel/CardTripToHotel';
import Arrows from '@ui/arrows/Arrows'; 

//data
import fromMoscowData from '@data/recommend/home-trip-frommoscow';  
import hotels from '@data/recommend/home-trip-tohotels';  
import toptrips from '@data/recommend/toptrips';  
import tripcardsdata from '@data/recommend/home-trip-countries'; 
import homeTripCardTurkeyData from '@data/recommend/home-trip-turkey';   



function Home() {
 const cardsPerView = 5;


  //ДЛЯ СЕКЦИИ 1-ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ+ data=toptrips
  //startIndex в границах [0, lastStartIndex]
  const [startIndex1, setStartIndex1] = useState(0);
  const totalCards1 = toptrips.length;
  const lastStartIndex1 = Math.max(0, totalCards1 - cardsPerView);

  //клик на ❮
  function handleNext1() {
    setStartIndex1(prev => Math.min(prev + 1, lastStartIndex1));
  }

  //клик на ❯
  function handlePrev1() {
    setStartIndex1(prev => Math.max(prev - 1, 0));
  }

  // Показываем только 5 карточек начиная с startIndex
  const visibleCards1 = toptrips.slice(startIndex1, startIndex1 + cardsPerView);




  //ДЛЯ СЕКЦИИ 2-МАЙСКИЕ ПРАЗДНИКИ+ data=tripcardsdata
  //startIndex в границах [0, lastStartIndex]
  const [startIndex2, setStartIndex2] = useState(0);
  const totalCards2 = tripcardsdata.length;
  const lastStartIndex2 = Math.max(0, totalCards2 - cardsPerView);

  //клик на ❮
  function handleNext2() {
    setStartIndex2(prev => Math.min(prev + 1, lastStartIndex2));
  }

  //клик на ❯
  function handlePrev2() {
    setStartIndex2(prev => Math.max(prev - 1, 0));
  }

  // Показываем только 5 карточек начиная с startIndex
  const visibleCards2 = tripcardsdata.slice(startIndex2, startIndex2 + cardsPerView);




  //ДЛЯ СЕКЦИИ 3-ТУРЫ В ТУРЦИЮ data=homeTripCardTurkeyData
  //startIndex в границах [0, lastStartIndex]
  const [startIndex3, setStartIndex3] = useState(0);
  const totalCards3 = homeTripCardTurkeyData.length;
  const lastStartIndex3 = Math.max(0, totalCards3 - cardsPerView);

  //клик на ❮
  function handleNext3() {
    setStartIndex3(prev => Math.min(prev + 1, lastStartIndex3));
  }

  //клик на ❯
  function handlePrev3() {
    setStartIndex3(prev => Math.max(prev - 1, 0));
  }

  // Показываем только 5 карточек начиная с startIndex
  const visibleCards3 = homeTripCardTurkeyData.slice(startIndex3, startIndex3 + cardsPerView);



  //ДЛЯ СЕКЦИИ 4-УЛЕТЕТЬ ИЗ МОСКВЫ data=fromMoscowData
  //startIndex в границах [0, lastStartIndex]
  const [startIndex4, setStartIndex4] = useState(0);
  const totalCards4 = fromMoscowData.length;
  const lastStartIndex4 = Math.max(0, totalCards4 - cardsPerView);

  //клик на ❮
  function handleNext4() {
    setStartIndex4(prev => Math.min(prev + 1, lastStartIndex4));
  }

  //клик на ❯
  function handlePrev4() {
    setStartIndex4(prev => Math.max(prev - 1, 0));
  }

  // Показываем только 5 карточек начиная с startIndex
  const visibleCards4 = fromMoscowData.slice(startIndex4, startIndex4 + cardsPerView);



//ДЛЯ СЕКЦИИ 5-ТУРЫ В ОТЕЛИ data=hotels
  //startIndex в границах [0, lastStartIndex]
  const [startIndex5, setStartIndex5] = useState(0);
  const totalCards5 = hotels.length;
  const lastStartIndex5 = Math.max(0, totalCards5 - cardsPerView);

  //клик на ❮
  function handleNext5() {
    setStartIndex5(prev => Math.min(prev + 1, lastStartIndex5));
  }

  //клик на ❯
  function handlePrev5() {
    setStartIndex5(prev => Math.max(prev - 1, 0));
  }

  // Показываем только 5 карточек начиная с startIndex
  const visibleCards5 = hotels.slice(startIndex5, startIndex5 + cardsPerView);




  return (
    <Layout>
      <div className="home">
        <h1 className="home__title">Добро пожаловать в Traveller!</h1>
        <p className="home__slogan">Туры, отели и авиабилеты в одном месте</p>
        <div className="home__search-switch">
          <SearchSectionSwitch />
        </div>
      </div>


      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">Популярные направления</h2>
          <Arrows 
            onPrev={handlePrev1}
            onNext={handleNext1}
            isPrevDisabled={startIndex1 === 0}
            isNextDisabled={startIndex1 >= lastStartIndex1}
          />
        </div>
        
        <div className="home__grid">
          {visibleCards1.map(trip => (
            <TripTop 
             key={trip.id} //невидимый-Для React оптимизации-перерисовывает не все, а только поменявшуюся карточку
             tripId={trip.id} //видимый-Для логики (удалить, купить, открыть)
             trip={trip} />  //Все данные тура (страна, цена, фото)
          ))}
        </div>
      </section>



      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">Лучшие цены на майские праздники</h2>
          <Arrows 
            onPrev={handlePrev2}
            onNext={handleNext2}
            isPrevDisabled={startIndex2 === 0}
            isNextDisabled={startIndex2 >= lastStartIndex2}
          />
         </div>
        
        <div className="home__grid">
          {visibleCards2.map(trip => (
            <CardTripCountry
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>



      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title"> Раннее бронирование туров в Турцию </h2>
          <Arrows 
            onPrev={handlePrev3}
            onNext={handleNext3}
            isPrevDisabled={startIndex3 === 0}
            isNextDisabled={startIndex3 >= lastStartIndex3}
          />
         </div>

        <div className="home__grid">
          {visibleCards3.map(trip => (
            <CardTripCountry
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>


      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">Улететь прямо сейчас из Москвы</h2>
          <Arrows 
            onPrev={handlePrev4}
            onNext={handleNext4}
            isPrevDisabled={startIndex4 === 0}
            isNextDisabled={startIndex4 >= lastStartIndex4}
          />
         </div>

        <div className="home__grid">
          {visibleCards4.map(trip => (
            <CardTripFromMoscow
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>



      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">Посмотрите туры в эти отели</h2>
          <Arrows 
            onPrev={handlePrev5}
            onNext={handleNext5}
            isPrevDisabled={startIndex5 === 0}
            isNextDisabled={startIndex5 >= lastStartIndex5}
          />
        </div>

        <div className="home__grid">
          {visibleCards5.map(hotel => (
            <CardTripToHotel
             key={hotel.id}
             tripId={hotel.id}
             hotel={hotel} />
          ))}
        </div>
      </section>

    </Layout>
  );
}

export default Home;

