import { Link } from 'react-router-dom';
import './CheckoutSuccess.css';

function CheckoutSuccess({ orderId }) {
  return (
    <div className="checkout-success">
      <h1 className="checkout-success__title">Заказ оформлен</h1>
      <p className="checkout-success__lead">
        Номер заказа:{' '}
        <span className="checkout-success__id">{orderId}</span>
      </p>
      <p className="checkout-success__hint">
        Мы свяжемся с вами по указанным контактам для подтверждения бронирования.
      </p>
      <div className="checkout-success__links">
        <Link className="checkout-success__link checkout-success__link--primary" to="/">
          На главную
        </Link>
        <Link className="checkout-success__link" to="/trips">
          Туры
        </Link>
        <Link className="checkout-success__link" to="/hotels">
          Отели
        </Link>
        <Link className="checkout-success__link" to="/avia">
          Авиабилеты
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
