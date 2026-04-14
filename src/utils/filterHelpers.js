export function normalizeText(value) {
  return String(value ?? '')
    .toLowerCase()
    .trim();
}

export function parsePositiveInt(raw) {
  const t = String(raw ?? '').trim();
  if (!t) return null;
  const n = Number.parseInt(t, 10);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

/** Для ночей и т.п.: только целое ≥ 1 или пусто */
export function parseStrictPositiveInt(raw) {
  const t = String(raw ?? '').trim();
  if (!t) return null;
  const n = Number.parseInt(t, 10);
  if (!Number.isFinite(n) || n < 1) return null;
  return n;
}

/** Фильтр «звёзды отеля»: 1…5 или пусто */
export function parseStarsFilter(raw) {
  const n = parseStrictPositiveInt(raw);
  if (n === null || n > 5) return null;
  return n;
}

const MAX_FILTER_PRICE = 1_000_000_000;

export function parseMaxPrice(raw) {
  const t = String(raw ?? '').replace(/\s/g, '').trim();
  if (!t) return null;
  const n = Number.parseInt(t, 10);
  if (!Number.isFinite(n) || n < 0) return null;
  if (n > MAX_FILTER_PRICE) return null;
  return n;
}
