import { useState, useEffect } from 'react';
import { useUser } from '@context/UserContext'; // уточните путь к вашему файлу с контекстом

export function useFavorites(itemType, itemId) {
  const { currentUser, isAuthenticated } = useUser();
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  // Загрузка состояния лайка при монтировании или смене пользователя
  useEffect(() => {
    if (!isAuthenticated || !currentUser) {
      // Для неавторизованных - проверяем localStorage (гостевые лайки)
      const guestFavorites = localStorage.getItem('guestFavorites');
      if (guestFavorites) {
        const favorites = JSON.parse(guestFavorites);
        const key = `${itemType}_${itemId}`;
        setIsLiked(favorites.includes(key));
      } else {
        setIsLiked(false);
      }
      return;
    }

    // Для авторизованных - загружаем лайки пользователя
    const loadUserFavorite = () => {
      const userFavoritesKey = `favorites_user_${currentUser.id}`;
      const savedFavorites = localStorage.getItem(userFavoritesKey);
      
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        const key = `${itemType}_${itemId}`;
        setIsLiked(favorites.includes(key));
      } else {
        setIsLiked(false);
      }
    };

    loadUserFavorite();
  }, [isAuthenticated, currentUser, itemType, itemId]);

  // Функция для переключения лайка
  const toggleLike = async () => {
    if (!isAuthenticated || !currentUser) {
      // Для неавторизованных - сохраняем в гостевые лайки
      const guestFavoritesKey = 'guestFavorites';
      const saved = localStorage.getItem(guestFavoritesKey);
      let favorites = saved ? JSON.parse(saved) : [];
      const key = `${itemType}_${itemId}`;
      
      if (isLiked) {
        favorites = favorites.filter(favKey => favKey !== key);
      } else {
        favorites.push(key);
      }
      
      localStorage.setItem(guestFavoritesKey, JSON.stringify(favorites));
      setIsLiked(!isLiked);
      
      // Показываем предложение войти в аккаунт
      if (!isLiked) {
        setTimeout(() => {
          const shouldLogin = window.confirm('Войдите в аккаунт, чтобы сохранить лайки навсегда!');
          if (shouldLogin) {
            // Перенаправление на страницу входа
            window.location.href = '/login';
          }
        }, 500);
      }
      return;
    }

    // Для авторизованных пользователей
    setLoading(true);
    try {
      const userFavoritesKey = `favorites_user_${currentUser.id}`;
      const saved = localStorage.getItem(userFavoritesKey);
      let favorites = saved ? JSON.parse(saved) : [];
      const key = `${itemType}_${itemId}`;
      
      if (isLiked) {
        // Удаляем лайк
        favorites = favorites.filter(favKey => favKey !== key);
      } else {
        // Добавляем лайк
        favorites.push(key);
      }
      
      localStorage.setItem(userFavoritesKey, JSON.stringify(favorites));
      setIsLiked(!isLiked);
      
      console.log(`Лайк ${isLiked ? 'удалён' : 'добавлен'} для пользователя ${currentUser.id}`);
      
    } catch (error) {
      console.error('Ошибка при сохранении лайка:', error);
    } finally {
      setLoading(false);
    }
  };

  return { isLiked, toggleLike, loading };
}