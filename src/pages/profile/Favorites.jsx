import Layout from '../../components/layout/Layout';
import './Profile.css';
import { Navigate, Link } from 'react-router-dom';


function Favorites() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
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