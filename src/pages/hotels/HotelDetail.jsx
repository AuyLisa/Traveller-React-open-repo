import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

//components
import Layout from '@ui/layout/Layout';
import CardCartControls from '@cart/card-cart-controls/CardCartControls';
import HotelAmenities from '@hotels/hotel-amenities/HotelAmenities';
import RoomCard from '@rooms/room-card/RoomCard';

//data
import hotels from '@data/hotels/hotels';
import { MEAL_OPTIONS, ROOM_SIZE_OPTIONS } from '@constants/hotelRoomOptions';
import rooms from '@data/hotels/rooms';


import { hotelToCartPayload } from '@utils/cartItemBuilders';
import './HotelDetail.css';

function HotelDetail() {

  const [selectedMeal, setSelectedMeal] = useState(MEAL_OPTIONS[0].value);
  const [selectedSize, setSelectedSize] = useState(ROOM_SIZE_OPTIONS[0].value);

  const { id } = useParams();
  const hotelId = Number(id);
  const hotel = hotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return (
      <Layout>
        <div className="hotel-detail">
          <h1 className="hotel-detail__title">Отель не найден</h1>
          <Link className="hotel-detail__back" to="/hotels">
            ← К списку отелей
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="hotel-detail">
        <Link className="hotel-detail__back" to="/hotels">
          ← К списку отелей
        </Link>

        <h1 className="hotel-detail__mainparts">{hotel.title}</h1>

        <div className="hotel-detail__photo" aria-hidden="true" />

        <dl className="hotel-detail__list">
          <div className="hotel-detail__row">
            <dt className="hotel-detail__term">Где</dt>
            <dd className="hotel-detail__value">
              {hotel.country}
              {hotel.city ? `, ${hotel.city}` : ''}
            </dd>
          </div>

          <div className="hotel-detail__row">
            <dt className="hotel-detail__term">Место / регион</dt>
            <dd className="hotel-detail__value">
              {hotel.city
                ? `${hotel.city}, ${hotel.country}`
                : hotel.country}
            </dd>
          </div>

          <div className="hotel-detail__row">
            <dt className="hotel-detail__term">Продолжительность</dt>
            <dd className="hotel-detail__value">{hotel.duration} ночей</dd>
          </div>

          <div className="hotel-detail__row">
            <dt className="hotel-detail__term">Стоимость</dt>
            <dd className="hotel-detail__value hotel-detail__price">
              {hotel.price.toLocaleString('ru-RU')} ₽
            </dd>
          </div>
        </dl>

        <section className="hotel-detail__section">
          <h2 className="hotel-detail__subtitle">Описание</h2>
          <p className="hotel-detail__description">{hotel.description}</p>
        </section>

         {/* ВСЕ иконки удобств отеля (без ограничений) */}
        <section className="hotel-detail__section">
          <h2 className="hotel-detail__subtitle">Удобства отеля</h2>
          <HotelAmenities options={hotel.options} />
        </section>


        <section className="hotel-detail__section">
          <h2 className="hotel-detail__subtitle">Цена за 2 взрослых, вылет на 10.05, на 7 ночей</h2>
          {/*фильтры колво чел  дата вылета  колво детей*/}
          {/*карусель по дате и цене*/}
        </section>




        <section className="hotel-detail__section space">
          <h2 className="hotel-detail__mainparts">Выбор номера</h2>

          <section className="hotel-detail__section-selects">
            {/*выпадающий список питание*/}
            <div className="hotel-detail__select-group">
              <label className="hotel-detail__label">Питание</label>
              <select 
                className="hotel-detail__select"
                value={selectedMeal}
                onChange={(e) => setSelectedMeal(e.target.value)}
              >
                {MEAL_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/*выпадающий список размер номера*/}
            <div className="hotel-detail__select-group">
              <label className="hotel-detail__label">Размер номера</label>
              <select 
                className="hotel-detail__select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {ROOM_SIZE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="hotel-detail__section"> 
            <div className="rooms__results">
            Найдено номеров:
            <span className="hotels__count"> {rooms.length}</span>
          </div>
          {rooms.map((room) => (
            <RoomCard key={room.id} roomId={room.id} room={room} />
          ))}
          </section>


    
        
        
        </section>



      </div>
    </Layout>
  );
}

export default HotelDetail;