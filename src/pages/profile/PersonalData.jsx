import Layout from '../../components/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { normalizePhoneDigits } from '../../utils/formValidation';
import './Profile.css';

const GENDER_OPTIONS = [
  { value: "", label: "Не выбран" },
  { value: "female", label: "Женский" },
  { value: "male", label: "Мужской" }
];

const AGE_OPTIONS = [
  { value: "", label: "Не выбран" },
  { value: "18-30", label: "18-30 лет" },
  { value: "31-45", label: "31-45 лет" },
  { value: "46-60", label: "46-60 лет" },
  { value: "60+", label: "60+ лет" }
];

const COUNTRY_OPTIONS = [
  { value: "", label: "Не выбрана" },
  { value: "ru", label: "Россия" },
  { value: "kz", label: "Казахстан" },
  { value: "by", label: "Беларусь" },
  { value: "ge", label: "Грузия" },
  { value: "tr", label: "Турция" }
];

const LANGUAGE_OPTIONS = [
  { value: "", label: "Не выбран" },
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" }
];

const CURRENCY_OPTIONS = [
  { value: "RUB", label: "₽ Рубль" },
  { value: "USD", label: "$ Доллар" },
  { value: "EUR", label: "€ Евро" },
  { value: "TRY", label: "₺ Лира" }
];



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
  const [currency, setCurrency] = useState('');

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
              onChange={(e) =>
                setPhone(normalizePhoneDigits(e.target.value).slice(0, 11))
              }
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
            {GENDER_OPTIONS.map(option => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
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
            {AGE_OPTIONS.map(option => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
            ))}
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
            {COUNTRY_OPTIONS.map(option => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
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
            {LANGUAGE_OPTIONS.map(option => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
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
            {CURRENCY_OPTIONS.map(option => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
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