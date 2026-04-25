import './CardTripToHotel.css';
import HotelButton from '@home/hotel-button/HotelButton.jsx';

function CardTripToHotel({ tripId, hotel}) {
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
        key={tripId}
        hotelId={tripId}
        hotel={hotel} />

    </div>
  );
}

export default CardTripToHotel;