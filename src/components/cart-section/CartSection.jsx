import CartItem from '../cart-item/CartItem';
import './CartSection.css';

/**
 * Секция корзины по одному типу позиций. Пустая секция не рендерится.
 *
 * @param {object} props
 * @param {string} props.title — заголовок (на экране)
 * @param {string} props.sectionId — стабильный id для a11y (латиница)
 * @param {object[]} props.items
 */
function CartSection({ title, sectionId, items }) {
  if (!items.length) return null;

  const headingId = `cart-section-${sectionId}`;

  return (
    <section className="cart-section" aria-labelledby={headingId}>
      <h2 className="cart-section__title" id={headingId}>
        {title}
      </h2>
      <ul className="cart-section__list">
        {items.map((item) => (
          <li key={item.id} className="cart-section__item">
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartSection;
