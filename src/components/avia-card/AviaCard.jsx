import CardCartControls from '../card-cart-controls/CardCartControls';
import { flightToCartPayload } from '../../utils/cartItemBuilders';
import './AviaCard.css';

function AviaCard( { aviaCardId, avia} ) {
  return (
    <div className="aviacard">

      <div className="aviacard__title">
        <p className="aviacard__from">{avia.from}</p>
        <p className="aviacard__to">{avia.to}</p>
      </div>

      <div className="aviacard__timetable">
        <p className="aviacard__departure">{avia.departure}</p>
        <p className="aviacard__arrival">{avia.arrival}</p>
      </div>

      <p className="aviacard__duration"> В пути: {avia.duration}</p>
      <p className="aviacard__airline">{avia.airline}</p>
      <p className="aviacard__price">от {avia.price.toLocaleString('ru-RU')} ₽</p>
      <div className="aviacard__actions">
        <button type="button" className="aviacard__button">Подробнее</button>
        <CardCartControls
          type="flight"
          itemId={aviaCardId}
          payload={flightToCartPayload(avia)}
          variant="avia"
        />
      </div>
    </div>
  );
}

export default AviaCard;

