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


// Функция валидации
const validateProfile = (profile) => {
  const errors = {};
  
  // Валидация телефона (должен быть 11 цифр)
  if (profile.phone && profile.phone.length !== 11) {
    errors.phone = 'Телефон должен содержать 11 цифр';
  }
  
  return errors;
};


function PersonalData() {
  
  //берем данные из контекста
  const { currentUser, userProfile, updateProfile } = useUser();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

 const [profile, setProfile] = useState({
    phone: userProfile.phone || '',
    gender: userProfile.gender || '',
    age: userProfile.age || '',
    country: userProfile.country || '',
    language: userProfile.language || '',
    currency: userProfile.currency || 'RUB'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Обработчик изменения полей
  const handleFieldChange = (field, value) => {
    // Специальная обработка для телефона
    if (field === 'phone') {
      value = normalizePhoneDigits(value).slice(0, 11);
    }
    
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Очищаем ошибку для этого поля при изменении
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Валидация и сохранение
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateProfile(profile);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await updateProfile(profile);
      alert('Профиль успешно обновлен!');
    } catch (error) {
      console.error('Ошибка при обновлении профиля:', error);
      alert('Произошла ошибка при сохранении профиля');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Личные данные</h1>
        
        <form onSubmit={handleSubmit} className="profile__card">
          <div className="profile__field">
            <strong>Имя:</strong> {currentUser.name}
          </div>

          <div className="profile__field">
            <strong>Телефон:</strong> 
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              placeholder="+7 (XXX) XXX-XX-XX"
              maxLength={11}
              className={`profile__input ${errors.phone ? 'profile__input--error' : ''}`}
            />
            {errors.phone && <span className="profile__error">{errors.phone}</span>}
          </div>

          <div className="profile__field">
            <strong>Email:</strong> {currentUser.email}
          </div>

{/* Пол (выпадающий список) */}
          <div className="profile__field">
            <strong>Пол:</strong>
            <DownSelect
              id="profile-gender"
              className={`profile__select ${errors.gender ? 'profile__select--error' : ''}`}
              value={profile.gender}
              onChange={(value) => handleFieldChange('gender', value)}
              options={GENDER_OPTIONS}

            />
            {errors.gender && <span className="profile__error">{errors.gender}</span>}
          </div>


{/* Возраст (выпадающий список) */}
          <div className="profile__field">
            <strong>Возраст:</strong>
            <DownSelect
              id="profile-age"
              className={`profile__select ${errors.age ? 'profile__select--error' : ''}`}
              value={profile.age}
              onChange={(value) => handleFieldChange('age', value)}
              options={AGE_OPTIONS}
            />
            {errors.age && <span className="profile__error">{errors.age}</span>}
          </div>


{/* Страна (выпадающий список) */}
          <div className="profile__field">
            <strong>Страна:</strong>
            <DownSelect
              id="profile-country"
              className={`profile__select ${errors.country ? 'profile__select--error' : ''}`}
              value={profile.country}
              onChange={(value) => handleFieldChange('country', value)}
              options={COUNTRY_OPTIONS}
            />
            {errors.country && <span className="profile__error">{errors.country}</span>}
          </div>
          
{/* Язык(выпадающий список) */}
          <div className="profile__field">
            <strong>Язык:</strong>
            <DownSelect
              id="profile-language"
              className={`profile__select ${errors.language ? 'profile__select--error' : ''}`}
              value={profile.language}
              onChange={(value) => handleFieldChange('language', value)}
              options={LANGUAGE_OPTIONS}
            />
            {errors.language && <span className="profile__error">{errors.language}</span>}
          </div>

{/* Валюта (выпадающий список) */}
          <div className="profile__field">
            <strong>Валюта:</strong>
            <DownSelect
              id="profile-currency"
              className="profile__select"
              value={profile.currency}
              onChange={(value) => handleFieldChange('currency', value)}
              options={CURRENCY_OPTIONS}
            />
          </div>
  
          <div className="profile__actions">
            <button 
              type="submit" 
              className="profile__save-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
            </button>
          </div>
        </form>
        
        <Link to="/profile" className="profile__back-link">
          Назад в личный кабинет
        </Link>
      </div>
    </Layout>
  );
}

export default PersonalData;