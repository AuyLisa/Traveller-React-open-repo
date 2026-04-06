import { removeCartItem, updateCartItemQuantity } from '../../utils/cart';
import './CartItem.css';

const TYPE_LABELS = {
  trip: 'Тур',
  hotel: 'Отель',
  flight: 'Авиабилет',
};

function formatMeta(item) {
  const { type, meta } = item;
  if (!meta) return '';
  if (type === 'trip') {
    const parts = [meta.country, meta.city, `${meta.duration} ноч.`].filter(
      Boolean,
    );
    return parts.join(' · ');
  }
  if (type === 'hotel') {
    return [meta.country, meta.city, `${meta.stars}★`].filter(Boolean).join(
      ' · ',
    );
  }
  if (type === 'flight') {
    return `${meta.from} → ${meta.to} · ${meta.airline} · ${meta.departure}–${meta.arrival}`;
  }
  return '';
}

function CartItem({ item }) {
  const lineTotal = item.price * item.quantity;
  const typeLabel = TYPE_LABELS[item.type] || item.type;

  const dec = () => {
    updateCartItemQuantity(item.id, item.quantity - 1);
  };

  const inc = () => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  return (
    <article className="cart-item">
      <div className="cart-item__main">
        <span className="cart-item__type">{typeLabel}</span>
        <h3 className="cart-item__title">{item.title}</h3>
        <p className="cart-item__meta">{formatMeta(item)}</p>
      </div>

      <div className="cart-item__price-block">
        <span className="cart-item__unit">{item.price.toLocaleString('ru-RU')} ₽</span>
        <span className="cart-item__per">за ед.</span>
      </div>

      <div className="cart-item__qty">
        <button
          type="button"
          className="cart-item__qty-btn"
          onClick={dec}
          aria-label="Уменьшить количество"
        >
          −
        </button>
        <span className="cart-item__qty-value">{item.quantity}</span>
        <button
          type="button"
          className="cart-item__qty-btn"
          onClick={inc}
          aria-label="Увеличить количество"
        >
          +
        </button>
      </div>

      <div className="cart-item__line-total">
        <span className="cart-item__line-sum">
          {lineTotal.toLocaleString('ru-RU')} ₽
        </span>
        <span className="cart-item__line-hint">итого по позиции</span>
      </div>

      <button
        type="button"
        className="cart-item__remove"
        onClick={() => removeCartItem(item.id)}
      >
        Удалить
      </button>
    </article>
  );
}

export default CartItem;
