import { useCart } from '../../hooks/useCart';
import {
  addCartItem,
  findCartLine,
  getCartItemQuantity,
  updateCartItemQuantity,
} from '../../utils/cart';
import './CardCartControls.css';

function CardCartControls({ type, itemId, payload, variant = 'trip' }) {
  const cart = useCart();
  const qty = getCartItemQuantity(cart, type, itemId);

  const handleAddOrInc = () => {
    addCartItem(payload);
  };

  const handleDec = () => {
    const line = findCartLine(cart, type, itemId);
    if (!line) return;
    updateCartItemQuantity(line.id, line.quantity - 1);
  };

  const rootClass = `card-cart-controls card-cart-controls--${variant}`;

  if (qty === 0) {
    return (
      <div className={rootClass}>
        <button
          type="button"
          className="card-cart-controls__add"
          onClick={handleAddOrInc}
        >
          Добавить в корзину
        </button>
      </div>
    );
  }

  return (
    <div className={rootClass}>
      <div
        className="card-cart-controls__row"
        role="group"
        aria-label="Количество в корзине"
      >
        <button
          type="button"
          className="card-cart-controls__step"
          onClick={handleDec}
          aria-label="Уменьшить количество"
        >
          −
        </button>
        <span className="card-cart-controls__qty" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          className="card-cart-controls__step"
          onClick={handleAddOrInc}
          aria-label="Увеличить количество"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CardCartControls;
