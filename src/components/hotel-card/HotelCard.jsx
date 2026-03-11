import './HotelCard.css';

function HotelCard( {hotel} ) {
  return (
   <div className="hotel-card">
      <h3>{hotel.title}</h3>
      <p>{hotel.location}</p>
      <p>{hotel.description}</p>
      <p>{hotel.stars}⭐  {hotel.reviews} отзывов</p>
      <p className="price">{hotel.price} ₽</p> {/* к классу есть стиль для цены*/}
      <button>Подробнее</button>
    </div>
  );
}

export default HotelCard;