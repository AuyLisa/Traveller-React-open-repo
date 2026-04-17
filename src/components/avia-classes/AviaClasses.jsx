import './AviaClasses.css';

function AviaClasses({ id, price, duration }) {
  const classes = [
    {
      id: 'economy',
      name: 'Эконом',
      seats: '26 мест',
      priceFrom: Math.floor(price * 0.8)
    },
    {
      id: 'comfort',
      name: 'Комфорт',
      seats: '15 мест',
      priceFrom: Math.floor(price * 1.2)
    },
    {
      id: 'business',
      name: 'Бизнес',
      seats: '7 мест',
      priceFrom: Math.floor(price * 2)
    }
  ];

  return (
    <div className="avia-classes">
      {classes.map(cls => (
        <div key={cls.id} className="avia-class-card">
          <div className="avia-class-card__header">
            <h4 className="avia-class-card__name">{cls.name}</h4>
          </div>
          <div className="avia-class-card__details">
            <p className="avia-class-card__seats">{cls.seats}</p>
            <p className="avia-class-card__price">{cls.priceFrom.toLocaleString()} руб</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AviaClasses;