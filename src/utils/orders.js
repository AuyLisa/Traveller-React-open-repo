/**
 * История заказов в localStorage (без синхронизации между вкладками).
 * При появлении ЛК: можно связать заказ с userId и подтягивать с сервера.
 */

const STORAGE_KEY = 'traveller-orders';

export function getOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveOrders(orders) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch (e) {
    console.error('orders save failed', e);
  }
}

export function addOrder(order) {
  const next = [order, ...getOrders()];
  saveOrders(next);
  return order;
}

export function createOrderId() {
  return `ord-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * @param {object} params
 * @param {object[]} params.items — снимок позиций корзины
 * @param {number} params.totalPrice
 * @param {object[]} params.passengers — пассажиры с паспортными данными
 * @param {{ email: string, phone: string }} params.contacts
 * @param {string} [params.comment]
 * @param {string} [params.contactPreference]
 */
export function buildOrderRecord(params) {
  const {
    items,
    totalPrice,
    passengers,
    contacts,
    comment = '',
    contactPreference = '',
  } = params;

  return {
    id: createOrderId(),
    items,
    totalPrice,
    passengers,
    contacts,
    comment: comment.trim(),
    contactPreference: contactPreference || undefined,
    createdAt: new Date().toISOString(),
    status: 'created',
  };
}
