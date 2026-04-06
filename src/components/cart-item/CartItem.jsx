import { removeCartItem, updateCartItemQuantity } from '../../utils/cart';
import {
  CART_TYPE_LABELS,
  formatCartItemMeta,
} from '../../utils/cartItemMeta';
import './CartItem.css';

function CartItem({ item }) {
  const lineTotal = item.price * item.quantity;
  const typeLabel = CART_TYPE_LABELS[item.type] || item.type;

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
        <p className="cart-item__meta">{formatCartItemMeta(item)}</p>
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
