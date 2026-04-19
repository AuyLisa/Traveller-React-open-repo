import Layout from '../../components/layout/Layout';
import TripTop from '../../components/trip-top/TripTop';
import CardTripCountry from '../../components/card-trip-country/CardTripCountry';
import CardTripFromMoscow from '../../components/card-trip-frommoscow/CardTripFromMoscow';
import CardTripToHotel from '../../components/card-trip-tohotel/CardTripToHotel';


import './Home.css';

import toptrips from '../../data/toptrips';  


import tripcardsdata from '../../data/home-trip-countries';  
import homeTripCardTurkeyData from '../../data/home-trip-turkey';  
import fromMoscowData from '../../data/home-trip-frommoscow';  
import hotels from '../../data/home-trip-tohotels';  



function Home() {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__title">Добро пожаловать в Traveller!</h1>
        <p className="home__slogan">Туры, отели и авиабилеты в одном месте</p>
      </div>


      <section className="home__section">
        <h2 className="home__section-title">Популярные направления</h2>
        <div className="home__grid">
          {toptrips.map(trip => (
            <TripTop 
             key={trip.id} //невидимый-Для React оптимизации-перерисовывает не все, а только поменявшуюся карточку
             tripId={trip.id} //видимый-Для логики (удалить, купить, открыть)
             trip={trip} />  //Все данные тура (страна, цена, фото)
          ))}
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Лучшие цены на майские праздники</h2>
        <div className="home__grid">
          {tripcardsdata.map(trip => (
            <CardTripCountry
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Раннее бронирование туров в Турцию</h2>
        <div className="home__grid">
          {homeTripCardTurkeyData.map(trip => (
            <CardTripCountry
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>


      <section className="home__section">
        <h2 className="home__section-title">Улететь прямо сейчас из Москвы</h2>
        <div className="home__grid">
          {fromMoscowData.map(trip => (
            <CardTripFromMoscow
             key={trip.id}
             tripId={trip.id}
             trip={trip} />
          ))}
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Посмотрите туры в эти отели</h2>
        <div className="home__grid">
          {hotels.map(hotel => (
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

