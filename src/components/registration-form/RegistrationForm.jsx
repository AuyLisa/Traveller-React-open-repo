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


  // Ошибка если email уже есть
   const [error, setError] = useState('');


  //обработчик изменения полей
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  //ошибка очищается, если пользователь начал что-то записывать
    if (error) setError('');
  };


  //обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  //отменяет стандартное поведение браузера для события
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // some() проверяет, есть ли хотя бы один элемент, подходящий под условие
    if (users.some(user => user.email === formData.email)) {
      setError('Аккаунт с таким email уже существует');
      return;
    }

      const newUser = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        password: formData.password, 
        favorites: { tours: [], hotels: [], flights: [] },
        bookings: []
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Автоматически входим после регистрации
      localStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    }));
    
      navigate('/');



  };

  //обработчик отправки на страницу войти
  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      {error && <p className="registration-form__error">{error}</p>}

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