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
  const c = country ?? '';
  if (!c) return true;
  return normStr(trip.country) === normStr(c);
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

/**
 * @param {object[]} allTrips
 * @param {{ searchQuery?: string, country?: string, durationMin?: number, priceRange?: string }} criteria
 */
export function filterTrips(allTrips, criteria) {
  const {
    searchQuery = '',
    country = '',
    durationMin = 0,
    priceRange = '',
  } = criteria;

  return allTrips.filter(
    (trip) =>
      tripMatchesSearch(trip, searchQuery) &&
      tripMatchesCountry(trip, country) &&
      tripMatchesDuration(trip, durationMin) &&
      tripMatchesPriceRange(trip, priceRange),
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
