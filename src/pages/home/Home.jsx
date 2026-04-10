import Layout from '../../components/layout/Layout';
import TripTop from '../../components/trip-top/TripTop';
import './Home.css';

const toptrips = [
  {
    id: 1,
    image: "/images/home-trips/turkey.jpg",
    country: "Туры в Турцию",
    description: "Аланья, Анталья, Белек, Бодрум, Кемер, Маримарис",
    price: "45 125",

  },
  {
    id: 2,
    image: "/images/home-trips/egypt.jpg",
    country: "Туры в Египет",
    description: "Дахаб, Марса-Эль-Алам / Эль-Кусейр, Хургада, Шарм-эль-Шейх, Эль Гуна",
    price: "89 300",
  },
  {
    id: 3,
    image: "/images/home-trips/thailand.jpg",
    country: "Туры в Таиланд",
    description: "Пхукет, Самуи, Паттайя, Бангкок, о. Ко Панган",
    price: "94 832",
  },
  {
    id: 4,
    image: "/images/home-trips/uae.jpg",
    country: "Туры в ОАЭ",
    description: "Абу Даби / Аль Айн, Дубай, Фуджейра, Шарджа",
    price: "91 387",
  },
    {
    id: 5,
    image: "/images/home-trips/russia.jpg",
    country: "Туры в по России",
    description: "Геленджик, Калининградская обл., Краснодарский край, Санкт-Петербург, Сочи",
    price: "5 869"
  },
    {
    id: 6,
    image: "/images/home-trips/maldives.jpg",
    country: "Туры на Мальдивы",
    description: "Мале Атоллы, Северный Мале Атолл, Южный Мале Атолл, Ари Атолл",
    price: "131 318"
  },
    {
    id: 7,
    image: "/images/home-trips/sri-lanka.jpg",
    country: "Туры на Шри-Ланку",
    description: "Хиккадува, Бентота, Негомбо, Ваддува, Унаватуна",
    price: "125 583"
  }
];

function Home() {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__title">Добро пожаловать в Traveller!</h1>
        <p className="home__slogan">Туры, отели и авиабилеты в одном месте</p>
      </div>

      <div className="home__section">
        <h2 className="home__section-title">Популярные направления</h2>
        <div className="home__grid">
          {toptrips.map(trip => (
            <TripTop key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;

