import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';


function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

//обработчик изменения полей
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value  // обновляем только изменённое поле
    });
  };

  //обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  // не перезагружать страницу чтобы после кнопки регистрация выйти в главный экан
    console.log('Регистрация:', formData);
    navigate('/');
  };

  //обработчик отправки на страницу войти
  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="registration-form__field">
        <label className="registration-form__label">Имя</label>
        <input
          type="text"
          name="name"
          className="registration-form__input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="registration-form__field">
        <label className="registration-form__label">Email</label>
        <input
          type="email"
          name="email"
          className="registration-form__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="registration-form__field">
        <label className="registration-form__label">Пароль</label>
        <input
          type="password"
          name="password"
          className="registration-form__input"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="registration-form__button">
        Зарегистрироваться
      </button>

      <p className="registration-form__login-link">
        Уже есть аккаунт? <a href="/login" onClick={handleLogin}> Войти</a>
      </p>
    </form>
  );
}

export default RegistrationForm;