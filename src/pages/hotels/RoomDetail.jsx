import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import Layout from '@ui/layout/Layout';
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import ImageArrows from '@ui/image-arrows/ImageArrows';
import ImageDots from '@ui/image-dots/ImageDots';
import RoomAmenities from '@rooms/room-amenities/RoomAmenities';

import rooms from '@data/hotels/rooms';
import hotels from '@data/hotels/hotels';

import './RoomDetail.css';

function RoomDetail() {
  const { hotelId, roomId } = useParams();
  
  const room = rooms.find((r) => r.id === Number(roomId));
  const hotel = hotels.find((h) => h.id === Number(hotelId));

  // Логика карусели фотографий
  const images = room?.images || [];
  const [index, setIndex] = useState(0);
  const lastIndex = images.length - 1;

  function handleNext() {
    setIndex((prev) => Math.min(prev + 1, lastIndex));
  }

  function handlePrev() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  const currentImage = images[index];

  if (!room || !hotel) {
    return (
      <Layout>
        <div className="room-detail__not-found">
          <h1>Номер не найден</h1>
          <Link to="/hotels">← К списку отелей</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="room-detail">
        <Link className="room-detail__back" to={`/hotels/${hotelId}`}>
          ← Назад к отелю «{hotel.title}»
        </Link>

        <h1 className="room-detail__title">{room.title}</h1>

        {/* Галерея фотографий */}
        <div className="room-detail__gallery">
          <div className="room-detail__photo-container">
            <img
              src={currentImage?.src}
              alt={currentImage?.alt || room.title}
              className="room-detail__photo"
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

        {/* Характеристики номера */}
        <dl className="room-detail__list">
          <div className="room-detail__row">
            <dt className="room-detail__term">Площадь</dt>
            <dd className="room-detail__value">{room.size} м²</dd>
          </div>
          <div className="room-detail__row">
            <dt className="room-detail__term">Вместимость</dt>
            <dd className="room-detail__value">до {room.capacity} чел.</dd>
          </div>
          <div className="room-detail__row">
            <dt className="room-detail__term">Отель</dt>
            <dd className="room-detail__value">{hotel.title}</dd>
          </div>
          <div className="room-detail__row">
            <dt className="room-detail__term">Локация</dt>
            <dd className="room-detail__value">
              {hotel.country}, {hotel.city}
            </dd>
          </div>
          <div className="room-detail__row">
            <dt className="room-detail__term">Цена за ночь</dt>
            <dd className="room-detail__value room-detail__price">
              {room.pricePerNight.toLocaleString('ru-RU')} ₽
            </dd>
          </div>
        </dl>

        {/* Удобства номера */}
        <section className="room-detail__section">
          <h2 className="room-detail__subtitle">Удобства в номере</h2>
          <RoomAmenities options={room.options} />
        </section>

        {/* Описание */}
        <section className="room-detail__section">
          <h2 className="room-detail__subtitle">Описание</h2>
          <p className="room-detail__description">{room.description}</p>
        </section>

        {/* Кнопка бронирования */}
        <div className="room-detail__actions">
          <CardCartControls
            type="room"
            itemId={room.id}
            payload={{}}
            variant="room-detail"
          />
        </div>
      </div>
    </Layout>
  );
}

export default RoomDetail;