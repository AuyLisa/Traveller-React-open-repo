import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from '../../utils/formValidation';
import { useUser } from '../../context/UserContext'; 
import './LogIn.css';


function LogIn() {
  const navigate = useNavigate();
  const { login } = useUser(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = validateLoginForm(formData);
    if (!isValid) {
      setFieldErrors(errors);
      setError('');
      return;
    }
    setFieldErrors({});

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(user =>
    user.email === formData.email.trim() &&
    user.password === formData.password
    );
    
    if (user) {
      // используем контекст
      login({
        id: user.id,
        name: user.name,
        email: user.email
      });
        navigate('/profile');
    } else {
      if (users.some(user => user.email === formData.email.trim())) {
        setError('Неправильный пароль');
        return;
      }
      setError('Аккаунт не существует');
    }
  };


  const handleRegistration = (e) => {
    e.preventDefault(); 
    navigate('/registration');
  };
  return (
    <form className="log-in" onSubmit={handleSubmit} noValidate>
      {error && <p className="log-in__error">{error}</p>}

      <div className="log-in__field">
        <label className="log-in__label" htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          name="email"
          className={`log-in__input ${fieldErrors.email ? 'log-in__input--error' : ''}`}
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {fieldErrors.email && (
          <p className="log-in__field-error">{fieldErrors.email}</p>
        )}
      </div>

      <div className="log-in__field">
        <label className="log-in__label" htmlFor="login-password">Пароль</label>
        <input
          id="login-password"
          type="password"
          name="password"
          className={`log-in__input ${fieldErrors.password ? 'log-in__input--error' : ''}`}
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        {fieldErrors.password && (
          <p className="log-in__field-error">{fieldErrors.password}</p>
        )}
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
