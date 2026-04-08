import Layout from '../../components/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import './Profile.css';


function PersonalData() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Личные данные</h1>
        
        <div className="profile__card">
          <div className="profile__field">
            <strong>Имя:</strong> {currentUser.name}
          </div>

          <div className="profile__field">
            <strong>Email:</strong> {currentUser.email}
          </div>
        </div>
        
        <Link to="/profile" className="profile__back-link">
          Назад в личный кабинет
        </Link>
      </div>
    </Layout>
  );
}

export default PersonalData;