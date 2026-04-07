import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';


function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    console.log('Войти:', formData);
    navigate('/');
  };

  //обработчик отправки на страницу регистрации
  const handleRegistration = (e) => {
    e.preventDefault(); 
    navigate('/registration');
  };
  return (
    <form className="log-in" onSubmit={handleSubmit}>
      <div className="log-in__field">
        <label className="log-in__label">Email</label>
        <input
          type="email"
          name="email"
          className="log-in__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="log-in__field">
        <label className="log-in__label">Пароль</label>
        <input
          type="password"
          name="password"
          className="log-in__input"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="log-in__button">
        Войти
      </button>

      <p className="log-in__registration-link">
        Нет аккаунта? <a href="/registration" onClick={handleRegistration}>Зарегистрироваться</a>
      </p>
    </form>
  );
}

export default LogIn;