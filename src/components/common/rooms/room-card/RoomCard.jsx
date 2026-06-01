import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import HeartLike from '@ui/heart-like/HeartLike';
import ImageDots from '@ui/image-dots/ImageDots';
import RoomAmenities from '@rooms/room-amenities/RoomAmenities';
import { useFavorites } from '@hooks/useFavorites'; // ← импорт хука для лайков

import { roomToCartPayload } from '@utils/cartItemBuilders'; 
import './RoomCard.css';

// Функция для ограничения количества опций (максимум 5)
function limitOptions(options, maxCount = 5) {
  if (!options) return {};
  
  const entries = Object.entries(options).filter(([_, value]) => value === true);
  const limitedEntries = entries.slice(0, maxCount);
  
  return Object.fromEntries(limitedEntries);
}

function RoomCard({ roomId, room, hotel }) {
  const navigate = useNavigate();
  
  // хук для управления лайками номеров
  const { isLiked, toggleLike, loading } = useFavorites('room', roomId);

  // Логика карусели фотографий
  const images = room.images;
  const [index, setIndex] = useState(0);
  const lastIndex = images.length - 1;

  function handleNext() {
    setIndex(prev => Math.min(prev + 1, lastIndex));
  }

  function handlePrev() {
    setIndex(prev => Math.max(prev - 1, 0));
  }

  const currentImage = images[index];
  const limitedOptions = limitOptions(room.options, 5);

  return (
    <div className="roomcard">
      <div className="roomcard__image">
        <div className="roomcard__photo">
          {/* ✅ Передаём состояние в HeartLike */}
          <HeartLike 
            liked={isLiked}
            onToggle={toggleLike}
            disabled={loading}
          />
        
          <img 
            src={currentImage.src} 
            alt={room.title}
          />
          
          {images.length > 1 && (
            <>
              <ImageArrows
                onPrev={handlePrev}
                onNext={handleNext}
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

      <div className="roomcard__content">
        <h3 className="roomcard__title">{room.title}</h3>
        <p className="roomcard__size">Площадь: {room.size} м² | Вместимость: до {room.capacity} чел.</p>
        <p className="roomcard__description">{room.description}</p>

        <RoomAmenities options={limitedOptions} />
        <p className="roomcard__description">Подробнее о номере</p>

        <p className="roomcard__price">Цена за 1 ночь: {room.pricePerNight.toLocaleString('ru-RU')} ₽</p>

        <div className="roomcard__actions">
          <CardCartControls
            type="room"
            itemId={roomId}
            payload={roomToCartPayload(room, hotel)}
            variant="room-card"
          />
        </div>
      </div>
    </div>
  );
}

export default RoomCard;