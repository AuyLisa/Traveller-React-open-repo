import Layout from '../../components/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Profile.css';


function PersonalData() {
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Состояния для каждого поля
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [currency, setCurrency] = useState('RUB');

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Личные данные</h1>
        
        <div className="profile__card">

          <div className="profile__field">
            <strong>Имя:</strong> {currentUser.name}
          </div>

          <div className="profile__field">
            <strong>Телефон:</strong> 
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="+7 (XXX) XXX-XX-XX"
               maxLength={11}
              className="profile__input"
            />
          </div>

          <div className="profile__field">
            <strong>Email:</strong> {currentUser.email}
          </div>

{/* Пол (выпадающий список) */}
          <div className="profile__field">
            <strong>Пол:</strong>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              className="profile__select"
            >
              <option value="">Не выбран</option>
              <option value="female">Женский</option>
              <option value="male">Мужской</option>
            </select>
          </div>


{/* Возраст (выпадающий список) */}
          <div className="profile__field">
            <strong>Возраст:</strong>
            <select 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              className="profile__select"
            >
              <option value="">Не выбран</option>
              <option value="18-30">18-30 лет</option>
              <option value="31-45">31-45 лет</option>
              <option value="46-60">46-60 лет</option>
              <option value="60+">60+ лет</option>
            </select>
          </div>


{/* Страна (выпадающий список) */}
          <div className="profile__field">
            <strong>Страна:</strong>
            <select 
              value={country} 
              onChange={(e) => setCountry(e.target.value)}
              className="profile__select"
            >
              <option value="">Не выбрана</option>
              <option value="ru">Россия</option>
              <option value="kz">Казахстан</option>
              <option value="by">Беларусь</option>
              <option value="ge">Грузия</option>
              <option value="tr">Турция</option>
            </select>
          </div>
          
{/* Язык(выпадающий список) */}
          <div className="profile__field">
            <strong>Язык:</strong>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="profile__select"
            >
              <option value="">Не выбран</option>
              <option value="ру">русский</option>
              <option value="en">english</option>
            </select>
          </div>

{/* Валюта (выпадающий список) */}
          <div className="profile__field">
            <strong>Валюта:</strong>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="profile__select"
            >
              <option value="RUB">₽ Рубль</option>
              <option value="USD">$ Доллар</option>
              <option value="EUR">€ Евро</option>
              <option value="TRY">₺ Лира</option>
            </select>
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