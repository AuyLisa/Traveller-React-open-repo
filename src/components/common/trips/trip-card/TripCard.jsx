import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import HeartLike from '@ui/heart-like/HeartLike';
import ImageDots from '@ui/image-dots/ImageDots';

import { tripToCartPayload } from '@utils/cartItemBuilders';
import './TripCard.css';


function TripCard( {tripId, trip} ) {
  const navigate = useNavigate();



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
      <div className="tripcard__image">
        <div className="tripcard__photo">
        
          {/* Кнопка сердечка крепится к tripcard__photo*/}
          <HeartLike onToggle={(liked) => console.log('Лайк:', liked)} />


          {/* Галерея фотографий */}
          <img 
            src={currentImage.src} 
            alt={trip.title}
          />
          {/* стрелки появляются если 2+ фото*/}
          {/* стрелки крепятся к tripcard__photo*/}
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
