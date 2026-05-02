import './CardTripToHotel.css';
import HotelButton from '@home/hotel-button/HotelButton.jsx';

function CardTripToHotel({ hotelId, hotel}) {
  return (
    <div className="card-trip-tohotel">
      <div className="card-trip-tohotel__image">
        <img 
          src={hotel.image} 
          alt={hotel.country}
          className="card-trip-tohotel__photo"
          loading="lazy"
        />
        <span className="card-trip-tohotel__country">{hotel.country}</span>
        <span className="card-trip-tohotel__points">{hotel.points.toLocaleString()}</span>
      </div>

      <div className="card-trip-tohotel__content"> 
        <span className="card-trip-tohotel__name">{hotel.name}</span>
        <span className="card-trip-tohotel__place">{hotel.place}</span>

        <div className="card-trip-tohotel__button-wrapper">
          <HotelButton
          key={hotel.id}
          hotelId={hotel.id}
          hotel={hotel} 
          />
        </div>
      </div>
    </div>
  );
}

export default CardTripToHotel;