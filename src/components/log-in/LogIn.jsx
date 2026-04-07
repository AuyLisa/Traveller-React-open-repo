import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';


function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  //обработчик изменения полей
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value  // обновляем только изменённое поле
    });
    if (error) setError('');
  };


  //обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  // не перезагружать страницу чтобы после кнопки регистрация выйти в главный экран
    const users = JSON.parse(localStorage.getItem('users') || '[]');
   
   
    // неверно
    //if (users.some(user => user.email === formData.email)) {
    //if ((users.some(user => user.password === formData.password))) {
    
    const user = users.find(user => 
    user.email === formData.email && 
    user.password === formData.password
    );
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email
      }));
      navigate('/');

    } else {

      if (users.some(user => user.email === formData.email)) {
        setError('Неправильный пароль');
        return;
      } else {
        setError('Аккаунт не существует');
        return;
  }
  }
};

  //обработчик отправки на страницу регистрации
  const handleRegistration = (e) => {
    e.preventDefault(); 
    navigate('/registration');
  };
  return (
    <form className="log-in" onSubmit={handleSubmit}>
      {error && <p className="log-in__error">{error}</p>}

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