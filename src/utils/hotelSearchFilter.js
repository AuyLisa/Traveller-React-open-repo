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

function hotelMatchesSearch(hotel, rawQuery) {
  const q = (rawQuery ?? '').trim().toLowerCase();
  if (!q) return true;
  const fields = [hotel.title, hotel.description, hotel.country, hotel.city];
  return fields.some((field) => normStr(field).includes(q));
}

function hotelMatchesCountry(hotel, country) {
  const c = (country ?? '').trim();
  if (!c) return true;
  const hay = normStr(hotel.country);
  if (!hay) return false;
  return hay.includes(normStr(c));
}

function hotelMatchesStars(hotel, starsExact) {
  const s = Number(starsExact);
  if (!Number.isFinite(s) || s <= 0) return true;
  const hs = Number(hotel.stars);
  if (Number.isNaN(hs)) return false;
  return hs === s;
}

function hotelMatchesReviews(hotel, minReviews) {
  const min = Number(minReviews);
  if (!Number.isFinite(min) || min <= 0) return true;
  const r = Number(hotel.reviews);
  if (Number.isNaN(r)) return false;
  return r >= min;
}

function hotelMatchesPriceRange(hotel, rangeKey) {
  const key = rangeKey ?? '';
  if (!key || key === 'all') return true;
  if (hotel.price == null || hotel.price === '') return false;
  const p = Number(hotel.price);
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

function hotelMatchesPriceCustom(hotel, priceMin, priceMax) {
  if (hotel.price == null || hotel.price === '') return false;
  const p = Number(hotel.price);
  if (Number.isNaN(p)) return false;
  const min = parseOptionalBound(priceMin);
  const max = parseOptionalBound(priceMax);
  if (min != null && p < min) return false;
  if (max != null && p > max) return false;
  return true;
}

export function filterHotels(allHotels, criteria) {
  const {
    searchQuery = '',
    country = '',
    starsExact = 0,
    minReviews = 0,
    priceRange = '',
    priceMin = '',
    priceMax = '',
  } = criteria;

  const useCustomPrice = hasCustomPriceBounds(priceMin, priceMax);

  return allHotels.filter(
    (hotel) =>
      hotelMatchesSearch(hotel, searchQuery) &&
      hotelMatchesCountry(hotel, country) &&
      hotelMatchesStars(hotel, starsExact) &&
      hotelMatchesReviews(hotel, minReviews) &&
      (useCustomPrice
        ? hotelMatchesPriceCustom(hotel, priceMin, priceMax)
        : hotelMatchesPriceRange(hotel, priceRange)),
  );
}

export function getUniqueHotelCountries(hotels) {
  const set = new Set();
  for (const h of hotels) {
    if (h && h.country != null && String(h.country).trim() !== '') {
      set.add(String(h.country).trim());
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'ru'));
}
