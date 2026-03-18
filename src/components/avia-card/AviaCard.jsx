import './AviaCard.css';

function AviaCard( {avia} ) {
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
      {/*<p className="aviacard__price">{avia.price} ₽</p>
      цены сделать эконом комфорт бизнес*/}
      <button className="aviacard__button">Подробнее</button>
    </div>
  );
}

export default AviaCard;

