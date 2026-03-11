import './AviaCard.css';

function AviaCard( {avia} ) {
  return (
    <div className="avia-card">
      <h3>{avia.from} → {avia.to}</h3>
      <p>{avia.departure} → {avia.arrival}</p>
      <p className="price">{avia.price} ₽</p>
      <p>{avia.airline}</p>
      <p>{avia.duration}</p>
      <button>Подробнее</button>
    </div>
  );
}

export default AviaCard;

