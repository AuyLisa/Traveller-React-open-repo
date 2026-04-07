import CartItem from '../cart-item/CartItem';
import './CartSection.css';

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
