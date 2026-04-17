import './CardTripToHotel.css';
import HotelButton from '../hotel-button/HotelButton.jsx';

function CardTripToHotel({ hotel, id }) {
  return (
    <div className="trip-card">
      <div className="trip-card__image">
        <img 
          src={hotel.image} 
          alt={hotel.country}
          className="trip-card__photo"
        />
        <span className="trip-card__country">{hotel.country}</span>
        <span className="trip-card__points">{hotel.points.toLocaleString()}</span>
      </div>

      <span className="trip-card__hotelname">{hotel.name}</span>
      <span className="trip-card__hotelplace">{hotel.place}</span>


      <HotelButton
       key={id}
       id={id}
       hotel={hotel} />

    </div>
  );
}

export default CardTripToHotel;