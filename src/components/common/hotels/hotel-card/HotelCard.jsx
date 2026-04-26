import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';

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


  return (
    <div className="hotelcard">

      <div className="hotelcard__image">
        <img 
          src={currentImage.src} 
          alt={hotel.title}
          className="hotelcard__photo"
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

      <div className="hotelcard__content">
        <h3 className="hotelcard__title">{hotel.title} {'⭐'.repeat(hotel.star)}</h3>
        <p className="hotelcard__location">{locationLabel}</p>
        <p className="hotelcard__description">{hotel.description}</p>

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
            Подробнее
          </button>
          <CardCartControls
            type="hotel"
            itemId={hotelId}
            payload={hotelToCartPayload(hotel)}
            variant="hotel"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
