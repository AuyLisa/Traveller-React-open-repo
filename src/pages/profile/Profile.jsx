import Layout from '@ui/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import { useUser } from '@context/UserContext'; 
import { useState, useEffect } from 'react';
import './Profile.css';


function Profile() {
  const { currentUser } = useUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Личный кабинет</h1>
        
        <div className="profile__card">
          <h2>Привет, {currentUser.name}!</h2>
        </div>
        
        <div className="profile__menu">
          <Link to="/profile/PersonalData" className="profile__menu-item">
            Личные данные
          </Link>
          <Link to="/cart" className="profile__menu-item">
            Корзина
          </Link>
          <Link to="/profile/Favorites" className="profile__menu-item">
            Избранное
          </Link>
          <Link to="/profile/History" className="profile__menu-item">
            История бронирований
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;