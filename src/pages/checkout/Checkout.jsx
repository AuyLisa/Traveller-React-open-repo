import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import CheckoutOrderSummary from '../../components/checkout-order-summary/CheckoutOrderSummary';
import CheckoutSuccess from '../../components/checkout-success/CheckoutSuccess';
import { useCart } from '../../hooks/useCart';
import { clearCart } from '../../utils/cart';
import { addOrder, buildOrderRecord } from '../../utils/orders';
import './Checkout.css';

function Checkout() {
  const cart = useCart();
  const isEmpty = cart.length === 0;
  const [completedOrderId, setCompletedOrderId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleValidSubmit = (formValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const itemsSnapshot = JSON.parse(JSON.stringify(cart));
    const totalPrice = itemsSnapshot.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0,
    );

    const order = buildOrderRecord({
      items: itemsSnapshot,
      totalPrice,
      passengers: formValues.passengers,
      contacts: {
        email: formValues.email,
        phone: formValues.phone,
      },
      comment: formValues.comment,
      contactPreference: formValues.contactPreference,
    });

    addOrder(order);
    clearCart();
    setCompletedOrderId(order.id);
  };

  if (completedOrderId) {
    return (
      <Layout>
        <div className="checkout-page">
          <CheckoutSuccess orderId={completedOrderId} />
        </div>
      </Layout>
    );
  }

  if (isEmpty) {
    return (
      <Layout>
        <div className="checkout-page">
          <h1 className="checkout-page__title">Оформление заказа</h1>
          <div className="checkout-page__empty">
            <p className="checkout-page__empty-text">Корзина пуста.</p>
            <p className="checkout-page__empty-hint">
              Добавьте туры, отели или авиабилеты, затем вернитесь к оформлению.
            </p>
            <div className="checkout-page__empty-links">
              <Link className="checkout-page__link" to="/trips">
                Туры
              </Link>
              <Link className="checkout-page__link" to="/hotels">
                Отели
              </Link>
              <Link className="checkout-page__link" to="/avia">
                Авиабилеты
              </Link>
            </div>
            <Link className="checkout-page__back" to="/cart">
              ← В корзину
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="checkout-page">
        <h1 className="checkout-page__title">Оформление заказа</h1>
        <Link className="checkout-page__back" to="/cart">
          ← Вернуться в корзину
        </Link>

        <div className="checkout-page__layout">
          <CheckoutOrderSummary
            items={cart}
            totalPrice={cart.reduce((s, i) => s + i.price * i.quantity, 0)}
          />
          <CheckoutForm
            onValidSubmit={handleValidSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
