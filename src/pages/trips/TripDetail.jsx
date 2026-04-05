import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import trips from '../../data/trips';
import './TripDetail.css';

function TripDetail() {
  const { id } = useParams();
  const tripId = Number(id);
  const trip = trips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <Layout>
        <div className="trip-detail">
          <h1 className="trip-detail__title">Тур не найден</h1>
          <Link className="trip-detail__back" to="/trips">
            ← К списку туров
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="trip-detail">
        <Link className="trip-detail__back" to="/trips">
          ← К списку туров
        </Link>

        <h1 className="trip-detail__title">{trip.title}</h1>

        <div className="trip-detail__photo" aria-hidden="true" />

        <dl className="trip-detail__list">
          <div className="trip-detail__row">
            <dt className="trip-detail__term">Куда</dt>
            <dd className="trip-detail__value">
              {trip.country}
              {trip.city ? `, ${trip.city}` : ''}
            </dd>
          </div>

          <div className="trip-detail__row">
            <dt className="trip-detail__term">Место / регион</dt>
            <dd className="trip-detail__value">
              {trip.city
                ? `${trip.city}, ${trip.country}`
                : trip.country}
            </dd>
          </div>

          <div className="trip-detail__row">
            <dt className="trip-detail__term">Продолжительность</dt>
            <dd className="trip-detail__value">
              {trip.duration != null &&
              trip.duration !== '' &&
              !Number.isNaN(Number(trip.duration))
                ? `${trip.duration} ночей`
                : '—'}
            </dd>
          </div>

          <div className="trip-detail__row">
            <dt className="trip-detail__term">Стоимость</dt>
            <dd className="trip-detail__value trip-detail__price">
              {trip.price != null &&
              trip.price !== '' &&
              !Number.isNaN(Number(trip.price))
                ? `${Number(trip.price).toLocaleString('ru-RU')} ₽`
                : '—'}
            </dd>
          </div>
        </dl>

        <section className="trip-detail__section">
          <h2 className="trip-detail__subtitle">Описание</h2>
          <p className="trip-detail__description">{trip.description}</p>
        </section>
      </div>
    </Layout>
  );
}

export default TripDetail;
