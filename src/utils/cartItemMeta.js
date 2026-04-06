export const CART_TYPE_LABELS = {
  trip: 'Тур',
  hotel: 'Отель',
  flight: 'Авиабилет',
};

export function formatCartItemMeta(item) {
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
