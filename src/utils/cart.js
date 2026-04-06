/**
 * Корзина: localStorage + кэш в памяти для синхронизации UI (useSyncExternalStore).
 * При оформлении заказа: при необходимости проверить авторизацию и подставить данные профиля.
 */

const STORAGE_KEY = 'traveller-cart';

let cartCache = null;
const listeners = new Set();

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function initCache() {
  if (cartCache === null) {
    cartCache = loadFromStorage();
  }
  return cartCache;
}

function persistAndNotify(nextCart) {
  cartCache = nextCart;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCart));
  } catch (e) {
    console.error('cart save failed', e);
  }
  listeners.forEach((fn) => fn());
}

export function subscribeCart(onChange) {
  initCache();
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

/** @returns {object[]} */
export function getCart() {
  return initCache();
}

/** @param {object[]} cart */
export function saveCart(cart) {
  persistAndNotify([...cart]);
}

/**
 * @param {{ type: string, itemId: number, title: string, price: number, meta?: object }} payload
 */
export function addCartItem(payload) {
  const { type, itemId, title, price, meta = {} } = payload;
  const cart = [...getCart()];
  const id = `${type}-${itemId}`;
  const idx = cart.findIndex((i) => i.type === type && i.itemId === itemId);

  if (idx >= 0) {
    const prev = cart[idx];
    cart[idx] = { ...prev, quantity: prev.quantity + 1 };
  } else {
    cart.push({
      id,
      type,
      itemId,
      title,
      price,
      quantity: 1,
      meta,
    });
  }
  persistAndNotify(cart);
}

export function removeCartItem(id) {
  persistAndNotify(getCart().filter((i) => i.id !== id));
}

/**
 * @param {object[]} cart
 * @param {string} type
 * @param {number} itemId
 * @returns {object | null}
 */
export function findCartLine(cart, type, itemId) {
  return cart.find((i) => i.type === type && i.itemId === itemId) ?? null;
}

/**
 * Количество позиции в корзине или 0, если строки нет.
 * @param {object[]} cart
 * @param {string} type
 * @param {number} itemId
 */
export function getCartItemQuantity(cart, type, itemId) {
  const line = findCartLine(cart, type, itemId);
  return line ? line.quantity : 0;
}

/**
 * @param {string} id
 * @param {number} quantity — при 0 или меньше позиция удаляется из корзины
 */
export function updateCartItemQuantity(id, quantity) {
  const q = Math.floor(Number(quantity));
  if (Number.isNaN(q)) return;
  if (q <= 0) {
    persistAndNotify(getCart().filter((i) => i.id !== id));
    return;
  }
  persistAndNotify(
    getCart().map((i) => (i.id === id ? { ...i, quantity: q } : i)),
  );
}

export function clearCart() {
  persistAndNotify([]);
}

export function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.quantity, 0);
}
