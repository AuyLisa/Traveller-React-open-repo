import Layout from '../../components/layout/Layout';
import './Home.css';

function Home() {
  return (
    <Layout>
      <div className="home">
        <h1 className="home__title">Добро пожаловать в Traveller!</h1>
        <p className="home__slogan">Туры, отели и авиабилеты в одном месте</p>
      </div>
    </Layout>
  );
}

export default Home;
