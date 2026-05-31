import './AviaClasses.css';

function AviaClasses({ aviaClassesId, price, duration }) {
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
        <div key={cls.id} className={`avia-class-card ${cls.name === 'Эконом' ? 'avia-class-card-econom' : ''} ${cls.name === 'Комфорт' ? 'avia-class-card-comfort' : ''} ${cls.name === 'Бизнес' ? 'avia-class-card-business' : ''}`}>
          <h4 className="avia-class-card__name">{cls.name}</h4>
          <p className="avia-class-card__seats">{cls.seats}</p>
          <p className="avia-class-card__price">{cls.priceFrom.toLocaleString()} руб</p>
        </div>
      ))}
    </div>
  );
}

export default AviaClasses;