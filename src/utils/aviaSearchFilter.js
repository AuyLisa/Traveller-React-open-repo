function normStr(v) {
  if (v == null) return '';
  return String(v).toLowerCase();
}

function parseOptionalBound(raw) {
  if (raw == null || raw === '') return null;
  const n = Number(String(raw).replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

function hasCustomPriceBounds(priceMin, priceMax) {
  return parseOptionalBound(priceMin) != null || parseOptionalBound(priceMax) != null;
}

function aviaMatchesSearch(avia, rawQuery) {
  const q = (rawQuery ?? '').trim().toLowerCase();
  if (!q) return true;
  const fields = [
    avia.from,
    avia.to,
    avia.airline,
    avia.duration,
    avia.departure,
    avia.arrival,
  ];
  return fields.some((field) => normStr(field).includes(q));
}

function aviaMatchesFrom(avia, from) {
  const f = (from ?? '').trim();
  if (!f) return true;
  return normStr(avia.from).includes(normStr(f));
}

function aviaMatchesTo(avia, to) {
  const t = (to ?? '').trim();
  if (!t) return true;
  return normStr(avia.to).includes(normStr(t));
}

function aviaMatchesAirline(avia, airline) {
  const a = (airline ?? '').trim();
  if (!a) return true;
  return normStr(avia.airline).includes(normStr(a));
}

function aviaMatchesPriceRange(avia, rangeKey) {
  const key = rangeKey ?? '';
  if (!key || key === 'all') return true;
  if (avia.price == null || avia.price === '') return false;
  const p = Number(avia.price);
  if (Number.isNaN(p)) return false;
  switch (key) {
    case 'budget':
      return p < 70000;
    case 'mid':
      return p >= 70000 && p < 120000;
    case 'premium':
      return p >= 120000;
    default:
      return true;
  }
}

function aviaMatchesPriceCustom(avia, priceMin, priceMax) {
  if (avia.price == null || avia.price === '') return false;
  const p = Number(avia.price);
  if (Number.isNaN(p)) return false;
  const min = parseOptionalBound(priceMin);
  const max = parseOptionalBound(priceMax);
  if (min != null && p < min) return false;
  if (max != null && p > max) return false;
  return true;
}

export function filterAvias(allAvias, criteria) {
  const {
    searchQuery = '',
    from = '',
    to = '',
    airline = '',
    priceRange = '',
    priceMin = '',
    priceMax = '',
  } = criteria;

  const useCustomPrice = hasCustomPriceBounds(priceMin, priceMax);

  return allAvias.filter(
    (avia) =>
      aviaMatchesSearch(avia, searchQuery) &&
      aviaMatchesFrom(avia, from) &&
      aviaMatchesTo(avia, to) &&
      aviaMatchesAirline(avia, airline) &&
      (useCustomPrice
        ? aviaMatchesPriceCustom(avia, priceMin, priceMax)
        : aviaMatchesPriceRange(avia, priceRange)),
  );
}

export function getUniqueFrom(avias) {
  const set = new Set();
  for (const a of avias) {
    if (a?.from != null && String(a.from).trim() !== '') set.add(String(a.from).trim());
  }
  return [...set].sort((x, y) => x.localeCompare(y, 'ru'));
}

export function getUniqueTo(avias) {
  const set = new Set();
  for (const a of avias) {
    if (a?.to != null && String(a.to).trim() !== '') set.add(String(a.to).trim());
  }
  return [...set].sort((x, y) => x.localeCompare(y, 'ru'));
}

export function getUniqueAirlines(avias) {
  const set = new Set();
  for (const a of avias) {
    if (a?.airline != null && String(a.airline).trim() !== '') {
      set.add(String(a.airline).trim());
    }
  }
  return [...set].sort((x, y) => x.localeCompare(y, 'ru'));
}
