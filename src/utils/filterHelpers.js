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

export function parseMaxPrice(raw) {
  const t = String(raw ?? '').replace(/\s/g, '').trim();
  if (!t) return null;
  const n = Number.parseInt(t, 10);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}
