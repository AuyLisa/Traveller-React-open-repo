import { useSyncExternalStore } from 'react';
import { getCart, subscribeCart } from '../utils/cart';

export function useCart() {
  return useSyncExternalStore(subscribeCart, getCart, getCart);
}
