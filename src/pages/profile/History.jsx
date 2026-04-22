import Layout from '../../components/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import './Profile.css';
import { useUser } from '../../context/UserContext';

function History() {
  const { currentUser } = useUser();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">История бронирований</h1>
        
        <div className="profile__empty">
          <p>Здесь будут отображаться ваши бронирования</p>
        </div>

        <Link to="/profile" className="profile__back-link">
          Назад в личный кабинет
        </Link>
      </div>
    </Layout>
  );
}

export default History;