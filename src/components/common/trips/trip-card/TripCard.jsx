import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import HeartLike from '@ui/heart-like/HeartLike';
import ImageDots from '@ui/image-dots/ImageDots';
import { useFavorites } from '@hooks/useFavorites'; // импортируем хук
import { tripToCartPayload } from '@utils/cartItemBuilders';
import './TripCard.css';

function TripCard({ tripId, trip }) {
  const navigate = useNavigate();
  
  //хук для управления лайками
  const { isLiked, toggleLike, loading } = useFavorites('trip', tripId);

  // Логика карусели фотографий
  const images = trip.images;
  const [index, setIndex] = useState(0);
  const lastIndex = images.length - 1;
  
  function handleNext() {
    setIndex(prev => Math.min(prev + 1, lastIndex));
  }
  
  function handlePrev() {
    setIndex(prev => Math.max(prev - 1, 0));
  }
  
  const currentImage = images[index];

  return (
    <div className="tripcard">
      <div className="tripcard__image">
        <div className="tripcard__photo">
          {/* Передаём состояние в HeartLike */}
          <HeartLike 
            liked={isLiked}
            onToggle={toggleLike}
            disabled={loading}
          />

          <img 
            src={currentImage.src} 
            alt={trip.title}
          />
          
          {images.length > 1 && (
            <>
              <ImageArrows
                onPrev={handleNext}
                onNext={handlePrev}
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