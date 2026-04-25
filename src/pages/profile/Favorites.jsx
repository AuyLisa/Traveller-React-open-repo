import Layout from '@ui/layout/Layout';
import './Profile.css';
import { Navigate, Link } from 'react-router-dom';
import { useUser } from '@context/UserContext';

function Favorites() {
  const { currentUser } = useUser();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Избранное</h1>
        
        <div className="profile__empty">
          <p>Здесь будут избранные туры, отели и авиабилеты</p>
        </div>

        <Link to="/profile" className="profile__back-link">
          Назад в личный кабинет
        </Link>
      </div>
    </Layout>
  );
}

export default Favorites;