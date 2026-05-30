import { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Layout from '@ui/layout/Layout';
import { useUser } from '@context/UserContext';
import TripCard from '@trips/trip-card/TripCard';
import HotelCard from '@hotels/hotel-card/HotelCard'; 
import AviaCard from '@avias/avia-card/AviaCard'; 
import trips from '@data/trips/trips';
import hotels from '@data/hotels/hotels';
import avias from '@data/avias/avia';
import './Profile.css';

function Favorites() {
  const { currentUser, isAuthenticated } = useUser();
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Функция для получения элемента по типу и ID
  const getItemById = (type, id) => {
    switch(type) {
      case 'trip': return trips.find(item => item.id === id);
      case 'hotel': return hotels.find(item => item.id === id);
      case 'avia': return avias.find(item => item.id === id);
      default: return null;
    }
  };

  // Функция для рендера правильной карточки
  const renderCard = (item, type, id) => {
    switch(type) {
      case 'trip':
        return <TripCard tripId={id} trip={item} />;
      case 'hotel':
        return <HotelCard hotelId={id} hotel={item} />;
      case 'avia':
        return <AviaCard aviaCardId={id} avia={item} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !currentUser) return;

    const loadFavorites = () => {
      setLoading(true);
      try {
        const userFavoritesKey = `favorites_user_${currentUser.id}`;
        const saved = localStorage.getItem(userFavoritesKey);
        
        if (saved) {
          const favorites = JSON.parse(saved);
          
          // Загружаем все типы избранного
          const loadedItems = favorites
            .map(key => {
              const [type, id] = key.split('_');
              const itemId = parseInt(id);
              const item = getItemById(type, itemId);
              
              if (item) {
                return { type, id: itemId, data: item };
              }
              return null;
            })
            .filter(item => item !== null);
          
          setFavoriteItems(loadedItems);
          console.log('Загружено избранных элементов:', loadedItems.length);
        } else {
          setFavoriteItems([]);
        }
      } catch (error) {
        console.error('Ошибка загрузки избранного:', error);
        setFavoriteItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [isAuthenticated, currentUser]);

  // Функция для удаления из избранного
  const handleRemoveFromFavorites = (type, id) => {
    const userFavoritesKey = `favorites_user_${currentUser.id}`;
    const saved = localStorage.getItem(userFavoritesKey);
    
    if (saved) {
      let favorites = JSON.parse(saved);
      favorites = favorites.filter(key => key !== `${type}_${id}`);
      localStorage.setItem(userFavoritesKey, JSON.stringify(favorites));
      
      // Обновляем состояние
      setFavoriteItems(prev => prev.filter(item => !(item.type === type && item.id === id)));
    }
  };

  // Подсчёт статистики
  const stats = {
    trips: favoriteItems.filter(item => item.type === 'trip').length,
    hotels: favoriteItems.filter(item => item.type === 'hotel').length,
    avias: favoriteItems.filter(item => item.type === 'avia').length,
    total: favoriteItems.length
  };

  return (
    <Layout>
      <div className="profile-page">
        <h1 className="profile__title">Избранное</h1>
        
        {loading ? (
          <div className="profile__loading">Загрузка...</div>
        ) : favoriteItems.length === 0 ? (
          <div className="profile__empty">
            <p>У вас пока нет избранных элементов</p>
            <div className="profile__empty-links">
              <Link to="/trips" className="profile__browse-link">Посмотреть туры</Link>
              <Link to="/hotels" className="profile__browse-link">Посмотреть отели</Link>
              <Link to="/avia" className="profile__browse-link">Посмотреть авиабилеты</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="profile__stats">
              <p>Всего в избранном: {stats.total}</p>
              <div className="profile__stats-details">
                {stats.trips > 0 && <span>Туры: {stats.trips}</span>}
                {stats.hotels > 0 && <span>Отели: {stats.hotels}</span>}
                {stats.avias > 0 && <span>Авиа: {stats.avias}</span>}
              </div>
            </div>
            
            <div className="favorites__grid">
              {favoriteItems.map(({ type, id, data }) => (
                <div key={`${type}_${id}`} className="favorites__item">
                  {renderCard(data, type, id)}
                  <button 
                    className="favorites__remove-btn"
                    onClick={() => handleRemoveFromFavorites(type, id)}
                    aria-label="Удалить из избранного"
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <Link to="/profile" className="profile__back-link">
          ← Назад в личный кабинет
        </Link>
      </div>
    </Layout>
  );
}

export default Favorites;