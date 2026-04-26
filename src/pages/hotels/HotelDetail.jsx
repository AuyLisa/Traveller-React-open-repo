import { Link, useParams } from 'react-router-dom';

import Layout from '@ui/layout/Layout';
import CardCartControls from '@cart/card-cart-controls/CardCartControls';

import hotels from '@data/hotels/hotels';

import { hotelToCartPayload } from '@utils/cartItemBuilders';
import './HotelDetail.css';

function HotelDetail() {
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

        <h1 className="hotel-detail__title">{hotel.title}</h1>

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

        <div className="hotel-detail__actions">
          <CardCartControls
            type="hotel"
            itemId={hotel.id}
            payload={hotelToCartPayload(hotel)}
            variant="hotel-detail"
          />
        </div>
      </div>
    </Layout>
  );
}

export default HotelDetail;