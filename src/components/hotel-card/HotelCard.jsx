import './HotelCard.css';

function HotelCard( {hotel} ) {
  return (
    <div className="hotelcard">

      <div className="hotelcard__image">
        <span className="hotelcard__photo"></span>
      </div>

      <div className="hotelcard__content">
        <h3 className="hotelcard__title">{hotel.title}</h3>
        <p className="hotelcard__location">{hotel.location}</p>
        <p className="hotelcard__description">{hotel.description}</p>

        <div className="hotelcard__rating">
          <span className="hotelcard__stars"> {hotel.star}⭐ </span>
          <span className="hotelcard__reviews">{hotel.reviews} отзывов</span>
        </div>

        <p className="hotelcard__price"> от {hotel.price} ₽</p>
        <button className="hotelcard__button">Подробнее</button>
      </div>
    </div>
  );
}

export default HotelCard;
