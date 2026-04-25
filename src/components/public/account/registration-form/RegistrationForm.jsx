import { useUser } from '@context/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateRegistrationForm } from '@utils/formValidation';
import './RegistrationForm.css';

function RegistrationForm() {
  const { register } = useUser(); //берем функцию из контекста
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
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
    const fe = fieldErrors[e.target.name];
    if (fe) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = validateRegistrationForm(formData);
    if (!isValid) {
      setFieldErrors(errors);
      setError('');
      return;
    }
    setFieldErrors({});

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some(user => user.email === formData.email.trim())) {
      setError('Аккаунт с таким email уже существует');
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      favorites: { tours: [], hotels: [], flights: [] },
      bookings: []
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // вызываем функцию из контекста
    register({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    });

    navigate('/profile');
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/login');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit} noValidate>
      {error && <p className="registration-form__error">{error}</p>}

      <div className="registration-form__field">
        <label className="registration-form__label" htmlFor="registration-name">Имя</label>
        <input
          id="registration-name"
          type="text"
          name="name"
          className={`registration-form__input ${fieldErrors.name ? 'registration-form__input--error' : ''}`}
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
        />
        {fieldErrors.name && (
          <p className="registration-form__field-error">{fieldErrors.name}</p>
        )}
      </div>

      <div className="registration-form__field">
        <label className="registration-form__label" htmlFor="registration-email">Email</label>
        <input
          id="registration-email"
          type="email"
          name="email"
          className={`registration-form__input ${fieldErrors.email ? 'registration-form__input--error' : ''}`}
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {fieldErrors.email && (
          <p className="registration-form__field-error">{fieldErrors.email}</p>
        )}
      </div>

      <div className="registration-form__field">
        <label className="registration-form__label" htmlFor="registration-password">Пароль</label>
        <input
          id="registration-password"
          type="password"
          name="password"
          className={`registration-form__input ${fieldErrors.password ? 'registration-form__input--error' : ''}`}
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          minLength={6}
        />
        {fieldErrors.password && (
          <p className="registration-form__field-error">{fieldErrors.password}</p>
        )}
      </div>

      <button type="submit" className="registration-form__button">
        Зарегистрироваться
      </button>

      <p className="registration-form__login-link">
        Уже есть аккаунт? <a href="/login" onClick={handleLogin}>Войти</a>
      </p>
    </form>
  );
}

export default RegistrationForm;