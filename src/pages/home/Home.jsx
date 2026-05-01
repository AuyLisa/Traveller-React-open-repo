import {useState} from 'react';
import './Home.css';

//components
import Layout from '@ui/layout/Layout';
import SearchSectionSwitch from '@ui/search-section-switch/SearchSectionSwitch';
import TripTop from '@home/trip-top/TripTop';
import CardTripCountry from '@home/card-trip-country/CardTripCountry';
import CardTripMonth from '@home/card-trip-month/CardTripMonth';

import CardTripFromMoscow from '@home/card-trip-frommoscow/CardTripFromMoscow';
import CardTripToHotel from '@home/card-trip-tohotel/CardTripToHotel';
import Arrows from '@ui/arrows/Arrows'; 

//hooks
import usePagination from '@hooks/usePagination';
import useCardsPerRow from '@hooks/useCardsPerRow';


//data
import toptrips from '@data/recommend/toptrips';  
import tripsСardsCountryData from '@data/recommend/home-trip-countries'; 
import homeTripCardTurkeyData from '@data/recommend/home-trip-turkey';   


import fromMoscowData from '@data/recommend/home-trip-frommoscow';  
import hotels from '@data/recommend/home-trip-tohotels';  





function Home() {

  //ДЛЯ СЕКЦИИ 1-ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ+ data=toptrips
  //ДЛЯ СЕКЦИИ 2-МАЙСКИЕ ПРАЗДНИКИ+ data=tripcardsdata
  //ДЛЯ СЕКЦИИ 3-ТУРЫ В ТУРЦИЮ data=homeTripCardTurkeyData
  //ДЛЯ СЕКЦИИ 4-УЛЕТЕТЬ ИЗ МОСКВЫ data=fromMoscowData
  //ДЛЯ СЕКЦИИ 5-ТУРЫ В ОТЕЛИ data=hotels

  const cardsPerRow = useCardsPerRow();  // ← будет 1,2,3 или 4

   // Используем хук для каждой секции
  const pagination1 = usePagination(toptrips.length, cardsPerRow);
  const pagination2 = usePagination(tripsСardsCountryData.length, cardsPerRow);
  const pagination3 = usePagination(homeTripCardTurkeyData.length, cardsPerRow);
  
  const pagination4 = usePagination(fromMoscowData.length, cardsPerRow);
  const pagination5 = usePagination(hotels.length, cardsPerRow);

  const visibleCards1 = pagination1.visibleItems(toptrips);
  const visibleCards2 = pagination2.visibleItems(tripsСardsCountryData);
  const visibleCards3 = pagination3.visibleItems(homeTripCardTurkeyData);
  const visibleCards4 = pagination4.visibleItems(fromMoscowData);
  const visibleCards5 = pagination5.visibleItems(hotels);
  
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
          <div className="arrows">
            <Arrows 
              onPrev={pagination1.handlePrev}
              onNext={pagination1.handleNext}
              isPrevDisabled={pagination1.isPrevDisabled}
              isNextDisabled={pagination1.isNextDisabled}
            />
          </div>
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
            onPrev={pagination2.handlePrev}
            onNext={pagination2.handleNext}
            isPrevDisabled={pagination2.isPrevDisabled}
            isNextDisabled={pagination2.isNextDisabled}
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
            onPrev={pagination3.handlePrev}
            onNext={pagination3.handleNext}
            isPrevDisabled={pagination3.isPrevDisabled}
            isNextDisabled={pagination3.isNextDisabled}
          />
         </div>

        <div className="home__grid">
          {visibleCards3.map(trip => (
            <CardTripMonth
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
            onPrev={pagination4.handlePrev}
            onNext={pagination4.handleNext}
            isPrevDisabled={pagination4.isPrevDisabled}
            isNextDisabled={pagination4.isNextDisabled}
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
            onPrev={pagination5.handlePrev}
            onNext={pagination5.handleNext}
            isPrevDisabled={pagination5.isPrevDisabled}
            isNextDisabled={pagination5.isNextDisabled}
          />
        </div>

        <div className="home__grid">
          {visibleCards5.map(hotel => (
            <CardTripToHotel
             key={hotel.id}
             hotelId={hotel.id}
             hotel={hotel} />
          ))}
        </div>
      </section>

    </Layout>
  );
}

export default Home;

