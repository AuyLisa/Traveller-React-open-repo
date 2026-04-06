function normStr(v) {
  if (v == null) return '';
  return String(v).toLowerCase();
}

function tripMatchesSearch(trip, rawQuery) {
  const q = (rawQuery ?? '').trim().toLowerCase();
  if (!q) return true;
  const haystacks = [trip.title, trip.description, trip.country, trip.city];
  return haystacks.some((field) => normStr(field).includes(q));
}

function tripMatchesCountry(trip, country) {
  const c = (country ?? '').trim();
  if (!c) return true;
  const hay = normStr(trip.country);
  if (!hay) return false;
  const q = normStr(c);
  return hay.includes(q);
}

function tripMatchesDuration(trip, minDays) {
  const min = Number(minDays);
  if (!Number.isFinite(min) || min <= 0) return true;
  if (trip.duration == null || trip.duration === '') return false;
  const d = Number(trip.duration);
  if (Number.isNaN(d)) return false;
  return d >= min;
}

function tripMatchesPriceRange(trip, rangeKey) {
  const key = rangeKey ?? '';
  if (!key || key === 'all') return true;
  if (trip.price == null || trip.price === '') return false;
  const p = Number(trip.price);
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

function parseOptionalBound(raw) {
  if (raw == null || raw === '') return null;
  const n = Number(String(raw).replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

function hasCustomPriceBounds(priceMin, priceMax) {
  return parseOptionalBound(priceMin) != null || parseOptionalBound(priceMax) != null;
}

function tripMatchesPriceCustom(trip, priceMin, priceMax) {
  if (trip.price == null || trip.price === '') return false;
  const p = Number(trip.price);
  if (Number.isNaN(p)) return false;
  const min = parseOptionalBound(priceMin);
  const max = parseOptionalBound(priceMax);
  if (min != null && p < min) return false;
  if (max != null && p > max) return false;
  return true;
}

/**
 * @param {object[]} allTrips
 * @param {{ searchQuery?: string, country?: string, durationMin?: number, priceRange?: string, priceMin?: string, priceMax?: string }} criteria
 */
export function filterTrips(allTrips, criteria) {
  const {
    searchQuery = '',
    country = '',
    durationMin = 0,
    priceRange = '',
    priceMin = '',
    priceMax = '',
  } = criteria;

  const useCustomPrice = hasCustomPriceBounds(priceMin, priceMax);

  return allTrips.filter(
    (trip) =>
      tripMatchesSearch(trip, searchQuery) &&
      tripMatchesCountry(trip, country) &&
      tripMatchesDuration(trip, durationMin) &&
      (useCustomPrice
        ? tripMatchesPriceCustom(trip, priceMin, priceMax)
        : tripMatchesPriceRange(trip, priceRange)),
  );
}

export function getUniqueCountries(allTrips) {
  const set = new Set();
  for (const t of allTrips) {
    if (t && t.country != null && String(t.country).trim() !== '') {
      set.add(String(t.country).trim());
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'ru'));
}
