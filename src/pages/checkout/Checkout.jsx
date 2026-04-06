import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import './Checkout.css';

/**
 * Заглушка оформления. На следующем этапе:
 * — загрузить позиции корзины (getCart / утилита корзины);
 * — если пользователь авторизован — подставить контакты из профиля;
 * — иначе показать форму гостя или редирект на вход.
 */
function Checkout() {
  return (
    <Layout>
      <div className="checkout">
        <h1 className="checkout__title">Оформление заказа</h1>
        <p className="checkout__lead">
          Здесь будет форма бронирования: контакты, способ оплаты и подтверждение
          выбранных позиций из корзины.
        </p>
        <Link className="checkout__back" to="/cart">
          ← Вернуться в корзину
        </Link>
      </div>
    </Layout>
  );
}

export default Checkout;
