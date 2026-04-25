import { Link } from 'react-router-dom';

//components
import Layout from '@ui/layout/Layout';
import CartSection from '@cart/cart-section/CartSection';


import { CART_SECTIONS } from '@constants/cartSections';
import { useCart } from '@hooks/useCart';
import { clearCart, getCartTotal } from '@utils/cart';
import './Cart.css';

function Cart() {
  const cart = useCart();
  const total = getCartTotal();
  const isEmpty = cart.length === 0;

  return (
    <Layout>
      <div className="cart-page">
        <h1 className="cart-page__title">Корзина</h1>

        {isEmpty ? (
          <div className="cart-page__empty">
            <p className="cart-page__empty-text">Корзина пуста.</p>
            <p className="cart-page__empty-hint">
              Добавьте туры, отели или авиабилеты из соответствующих разделов.
            </p>
            <div className="cart-page__empty-links">
              <Link className="cart-page__link" to="/trips">
                Туры
              </Link>
              <Link className="cart-page__link" to="/avia">
                Авиабилеты
              </Link>
              <Link className="cart-page__link" to="/hotels">
                Отели
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-page__sections">
              {CART_SECTIONS.map(({ type, sectionId, title }) => (
                <CartSection
                  key={type}
                  sectionId={sectionId}
                  title={title}
                  items={cart.filter((item) => item.type === type)}
                />
              ))}
            </div>

            <div className="cart-page__footer">
              <button
                type="button"
                className="cart-page__clear"
                onClick={() => {
                  if (window.confirm('Очистить корзину?')) clearCart();
                }}
              >
                Очистить корзину
              </button>

              <div className="cart-page__summary">
                <div className="cart-page__total-row">
                  <span className="cart-page__total-label">Итого</span>
                  <span className="cart-page__total-value">
                    {total.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Link className="cart-page__checkout" to="/checkout">
                  Перейти к оформлению
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
