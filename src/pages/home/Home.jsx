import Layout from '../../components/layout/Layout';
import TripTop from '../../components/trip-top/TripTop';
import './Home.css';

const toptrips = [
  {
    id: 1,
    country: "Турция",
    price: 45000,
    image: ""
  },
  {
    id: 2,
    country: "Египет",
    price: 52000,
    image: ""
  },
  {
    id: 3,
    country: "Таиланд",
    price: 67000,
    image: ""
  },
  {
    id: 4,
    country: "ОАЭ",
    price: 89000,
    image: ""
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

