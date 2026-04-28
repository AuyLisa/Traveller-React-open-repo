import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import HeartLike from '@ui/heart-like/HeartLike';
import ImageDots from '@ui/image-dots/ImageDots';
import HotelAmenities from '@hotels/hotel-amenities/HotelAmenities';


import { hotelToCartPayload } from '@utils/cartItemBuilders';
import './HotelCard.css';

function getNightsText(duration) {
  const lastDigit = duration % 10;
  const lastTwoDigits = duration % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'ночей';
  }
  if (lastDigit === 1) {
    return 'ночь';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'ночи';
  }
  return 'ночей';
}


function getReviewsText(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'отзывов';
  }
  if (lastDigit === 1) {
    return 'отзыв';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'отзыва';
  }
  return 'отзывов';
}

// Функция для ограничения количества опций (максимум 6)
function limitOptions(options, maxCount = 5) {
  if (!options) return {};
  
  const entries = Object.entries(options).filter(([_, value]) => value === true);
  const limitedEntries = entries.slice(0, maxCount);
  
  // Возвращаем объект только с первыми maxCount опциями
  return Object.fromEntries(limitedEntries);
}


function HotelCard( { hotelId, hotel} ) {
  const navigate = useNavigate();
  const locationLabel = [hotel.city, hotel.country].filter(Boolean).join(', ');


  //логика карусель фотографий
  const images = hotel.images;
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

  const limitedOptions = limitOptions(hotel.options, 5);

  return (
    <div className="hotelcard">
      <div className="hotelcard__image">
        <div className="hotelcard__photo">

          {/* Кнопка сердечка крепится к hotelcard__photo*/}
          <HeartLike onToggle={(liked) => console.log('Лайк:', liked)} />
        
          {/* Галерея фотографий */}
          <img 
            src={currentImage.src} 
            alt={hotel.title}
          />
          {/* стрелки появляются если 2+ фото*/}
          {/* стрелки крепятся к hotelcard__photo*/}
          {images.length > 1 && (
          <>
            <ImageArrows
              onPrev={handlePrev1}
              onNext={handleNext1}
              isPrevDisabled={index === 0}
              isNextDisabled={index === lastIndex}
            />

            <ImageDots
              total={images.length}
              current={index}
              onDotClick={(dotIndex) => setIndex(dotIndex)}
            />
          </>
          )}
        </div>
      </div>

      <div className="hotelcard__content">
        <h3 className="hotelcard__title">{hotel.title} {'⭐'.repeat(hotel.star)}</h3>
        <p className="hotelcard__location">{locationLabel}</p>
        <p className="hotelcard__description">{hotel.description}</p>

        
        {/* Передаём ограниченные опции (только 6) */}
        <HotelAmenities options={limitedOptions} />
     
        <div className="hotelcard__rating">
          <p className="hotelcard__duration">{hotel.duration} {getNightsText(hotel.duration)}</p>
          <p className="hotelcard__reviews">{hotel.review} {getReviewsText(hotel.review)}</p>
        </div>


        <p className="hotelcard__price"> от {hotel.price} ₽</p>
        <div className="hotelcard__actions">
          <button 
          type="button" 
          className="hotelcard__button"
          onClick={() => navigate(`/hotels/${hotelId}`)}
          >
            Посмотреть номера
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
