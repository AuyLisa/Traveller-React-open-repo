import { createContext, useContext, useState, useEffect } from 'react';

// Создаём контекст
const UserContext = createContext();

// Хук для удобного использования контекста
export function useUser() {
  return useContext(UserContext);
}

// Провайдер, который оборачивает всё приложение
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState({
    phone: '',
    gender: '',
    age: '',
    country: '',
    language: '',
    currency: 'RUB'
  });

  // При загрузке приложения - читаем из localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Функция входа
  const login = (userData) => {
    setCurrentUser(userData);
    //1 React понимает: "Состояние изменилось"
    //2 React ищет все компоненты, которые используют этот контекс
    //3 React перерисовывает эти компоненты
    //4 Новые данные попадают в компоненты через useUser()
    
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  // Функция выхода
  const logout = () => {
    setCurrentUser(null);  // Очищает состояние React
    // Все компоненты, использующие useUser(), сразу узнают, что пользователь вышел
    localStorage.removeItem('currentUser');
    //userProfile НЕ удаляется- Теперь при следующем входе данные профиля восстановятся
  };

  // Функция обновления профиля
  const updateProfile = (newProfileData) => {
    setUserProfile(prev => {
      const updated = { ...prev, ...newProfileData }; // Обновляет контекст
      localStorage.setItem('userProfile', JSON.stringify(updated)); // Сохраняет в localStorage
      return updated;
    });
  };

  // Функция регистрации
  const register = (userData) => {
    // Здесь можно добавить логику сохранения в базу данных
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  // Значения, которые будут доступны во всём приложении
  const value = {
    currentUser,
    userProfile,
    login,
    logout,
    register,
    updateProfile,
    isAuthenticated: !!currentUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}