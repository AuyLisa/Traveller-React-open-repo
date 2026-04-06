import { CART_SECTIONS } from '../../constants/cartSections';
import {
  CART_TYPE_LABELS,
  formatCartItemMeta,
} from '../../utils/cartItemMeta';
import './CheckoutOrderSummary.css';

function CheckoutSummaryRow({ item }) {
  const lineTotal = item.price * item.quantity;
  const typeLabel = CART_TYPE_LABELS[item.type] || item.type;

  return (
    <li className="checkout-summary-row">
      <div className="checkout-summary-row__main">
        <span className="checkout-summary-row__type">{typeLabel}</span>
        <h3 className="checkout-summary-row__title">{item.title}</h3>
        <p className="checkout-summary-row__meta">
          {formatCartItemMeta(item)}
        </p>
      </div>
      <div className="checkout-summary-row__nums">
        <span className="checkout-summary-row__unit">
          {item.price.toLocaleString('ru-RU')} ₽ за ед.
        </span>
        <span className="checkout-summary-row__qty">
          × {item.quantity}
        </span>
        <span className="checkout-summary-row__line">
          {lineTotal.toLocaleString('ru-RU')} ₽
        </span>
        <span className="checkout-summary-row__hint">итого по позиции</span>
      </div>
    </li>
  );
}

function CheckoutOrderSummary({ items, totalPrice }) {
  return (
    <div className="checkout-summary">
      <h2 className="checkout-summary__title">Состав заказа</h2>

      {CART_SECTIONS.map(({ type, sectionId, title }) => {
        const sectionItems = items.filter((i) => i.type === type);
        if (!sectionItems.length) return null;

        const headingId = `checkout-summary-${sectionId}`;

        return (
          <section
            key={type}
            className="checkout-summary__section"
            aria-labelledby={headingId}
          >
            <h3 className="checkout-summary__section-title" id={headingId}>
              {title}
            </h3>
            <ul className="checkout-summary__list">
              {sectionItems.map((item) => (
                <CheckoutSummaryRow key={item.id} item={item} />
              ))}
            </ul>
          </section>
        );
      })}

      <div className="checkout-summary__total">
        <span className="checkout-summary__total-label">Общая сумма</span>
        <span className="checkout-summary__total-value">
          {totalPrice.toLocaleString('ru-RU')} ₽
        </span>
      </div>
    </div>
  );
}

export default CheckoutOrderSummary;
