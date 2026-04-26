import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import HeartLiked from '@assets/icons/HeartLiked.svg?react'; {/*vite+svgr=svg файл в react компонент*/}
import HeartNoAction from '@assets/icons/HeartNoAction.svg?react';


import { tripToCartPayload } from '@utils/cartItemBuilders';
import './TripCard.css';


function TripCard( {tripId, trip} ) {
  const navigate = useNavigate();

  // Состояние для сердечка
  const [isLiked, setIsLiked] = useState(false);

  // Функция для переключения лайка
  const handleLikeClick = () => {
    // TODO: позже добавим проверку на авторизацию
    setIsLiked(!isLiked);
  };


  //логика карусель фотографий
  const images = trip.images;
  const [index, setIndex] = useState(0);
  const lastIndex = images.length - 1;
  
  //клик на ❯
  function handleNext1() {
    setIndex(prev => Math.min(prev + 1, lastIndex));
  }
  
  //клик на ❮
  function handlePrev1() {
    setIndex(prev => Math.max(prev - 1, 0));
  }
  
  // Текущее фото для показа
  const currentImage = images[index];
  // index=0
  //currentImage = images[0] = { id: 101, src: "фото1.jpg", alt: "..." }
  //index=1 
  //currentImage = images[1] = { id: 102, src: "фото2.jpg", alt: "..." }



  return (
   <div className="tripcard">
      {/* Кнопка сердечка */}
      <button 
        className={`tripcard__like ${isLiked ? 'tripcard__like--active' : ''}`}
        onClick={handleLikeClick}
        aria-label={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        {isLiked ? <HeartLiked /> : <HeartNoAction />}
      </button>


      {/* Галерея фотографий */}
      <div className="tripcard__image">
        <img 
          src={currentImage.src} 
          alt={trip.title}
          className="tripcard__photo"
        />
        {/* стрелки появляются если 2+ фото*/}
        {images.length > 1 && (
          <ImageArrows
            onPrev={handlePrev1}
            onNext={handleNext1}
            isPrevDisabled={index === 0}
            isNextDisabled={index === lastIndex}
          />
        )}
      </div>



      <div className="tripcard__content">
        <h3 className="tripcard__title">{trip.title}</h3>
        <p className="tripcard__description">{trip.description}</p>
        <p className="tripcard__stars">отель {'⭐'.repeat(trip.stars)}</p>
        <p className="tripcard__price">{trip.price} ₽</p>

        <div className="tripcard__actions">
          <button
            type="button"
            className="tripcard__button"
            onClick={() => navigate(`/trips/${tripId}`)}
          >
            Подробнее
          </button>
          <CardCartControls
            type="trip"
            itemId={tripId}
            payload={tripToCartPayload(trip)}
            variant="trip"
          />
        </div>
    </div>
  </div>
  );
}

export default TripCard;
