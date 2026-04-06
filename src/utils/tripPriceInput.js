import { PRICE_RANGE_OPTIONS } from '../pages/trips/tripFilterOptions';

function cleanNum(s) {
  return String(s).replace(/\s/g, '').replace(',', '.');
}

function parseOptionalBound(raw) {
  if (raw == null || raw === '') return null;
  const n = Number(cleanNum(raw));
  return Number.isFinite(n) ? n : null;
}

function hasCustomBounds(priceMin, priceMax) {
  return parseOptionalBound(priceMin) != null || parseOptionalBound(priceMax) != null;
}

/**
 * Строка для поля «Цена»: пресет или ручной диапазон / одно число (максимум).
 */
export function formatPriceFilterDisplay({ priceRange, priceMin, priceMax }) {
  if (hasCustomBounds(priceMin, priceMax)) {
    const m = parseOptionalBound(priceMin);
    const x = parseOptionalBound(priceMax);
    if (m != null && x != null) return `${m}-${x}`;
    if (m != null && x == null) return `${m}-`;
    if (m == null && x != null) return `${x}`;
  }
  const key = priceRange ?? 'all';
  if (key === 'all' || key === '') {
    return '';
  }
  const opt = PRICE_RANGE_OPTIONS.find((o) => o.value === key);
  return opt ? opt.label : '';
}

/**
 * Разбор поля «Цена» → те же поля, что ожидает filterTrips.
 */
export function parsePriceFilterInput(text) {
  const t = text.trim();
  if (!t) return { priceRange: 'all', priceMin: '', priceMax: '' };

  const preset = PRICE_RANGE_OPTIONS.find((o) => o.label === t);
  if (preset) {
    return { priceRange: preset.value, priceMin: '', priceMax: '' };
  }

  const rangeMatch = t.match(/^(\d[\d\s.,]*)\s*-\s*(\d[\d\s.,]+)$/);
  if (rangeMatch) {
    return {
      priceRange: 'all',
      priceMin: cleanNum(rangeMatch[1]),
      priceMax: cleanNum(rangeMatch[2]),
    };
  }

  const trailing = t.match(/^(\d[\d\s.,]+)\s*-\s*$/);
  if (trailing) {
    return { priceRange: 'all', priceMin: cleanNum(trailing[1]), priceMax: '' };
  }

  if (/^\d[\d\s.,]*$/.test(t)) {
    return { priceRange: 'all', priceMin: '', priceMax: cleanNum(t) };
  }

  return { priceRange: 'all', priceMin: '', priceMax: '' };
}
