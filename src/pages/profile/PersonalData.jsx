import { useUser } from '@context/UserContext';
import Layout from '@ui/layout/Layout';
import { Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { normalizePhoneDigits } from '@utils/formValidation';
import DownSelect from '@down-select/DownSelect';
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
  
  //берем данные из контекста
  const { currentUser, userProfile, updateProfile } = useUser();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Состояния для каждого поля (теперь с сохранением в контекст)
  const [phone, setPhone] = useState(userProfile.phone || '');
  const [gender, setGender] = useState(userProfile.gender || '');
  const [age, setAge] = useState(userProfile.age || '');
  const [country, setCountry] = useState(userProfile.country || '');
  const [language, setLanguage] = useState(userProfile.language || '');
  const [currency, setCurrency] = useState(userProfile.currency || 'RUB');

  // Сохраняем изменения в контекст при их обновлении
  useEffect(() => {
    updateProfile({ phone, gender, age, country, language, currency });
  }, [phone, gender, age, country, language, currency]);


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
            <DownSelect
              id="profile-gender"
              className="profile__select"
              value={gender}
              onChange={setGender}
              options={GENDER_OPTIONS.map((o) => ({
                value: o.label,
                label: o.label,
              }))}
            />
          </div>


{/* Возраст (выпадающий список) */}
          <div className="profile__field">
            <strong>Возраст:</strong>
            <DownSelect
              id="profile-age"
              className="profile__select"
              value={age}
              onChange={setAge}
              options={AGE_OPTIONS.map((o) => ({
                value: o.label,
                label: o.label,
              }))}
            />
          </div>


{/* Страна (выпадающий список) */}
          <div className="profile__field">
            <strong>Страна:</strong>
            <DownSelect
              id="profile-country"
              className="profile__select"
              value={country}
              onChange={setCountry}
              options={COUNTRY_OPTIONS.map((o) => ({
                value: o.label,
                label: o.label,
              }))}
            />
          </div>
          
{/* Язык(выпадающий список) */}
          <div className="profile__field">
            <strong>Язык:</strong>
            <DownSelect
              id="profile-language"
              className="profile__select"
              value={language}
              onChange={setLanguage}
              options={LANGUAGE_OPTIONS.map((o) => ({
                value: o.label,
                label: o.label,
              }))}
            />
          </div>

{/* Валюта (выпадающий список) */}
          <div className="profile__field">
            <strong>Валюта:</strong>
            <DownSelect
              id="profile-currency"
              className="profile__select"
              value={currency}
              onChange={setCurrency}
              options={CURRENCY_OPTIONS.map((o) => ({
                value: o.label,
                label: o.label,
              }))}
            />
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