import {
  normalizeText,
  parseStrictPositiveInt,
  parsePriceBound,
} from './filterHelpers';

function applySort(trips, sort) {
  if (!sort) return trips;

  const copy = [...trips];

  switch (sort) {
    case 'price_asc':
      copy.sort((a, b) => Number(a.price) - Number(b.price));
      return copy;
    case 'price_desc':
      copy.sort((a, b) => Number(b.price) - Number(a.price));
      return copy;
    case 'nights_asc':
      copy.sort((a, b) => Number(a.duration) - Number(b.duration));
      return copy;
    case 'nights_desc':
      copy.sort((a, b) => Number(b.duration) - Number(a.duration));
      return copy;
    case 'stars_desc':
      copy.sort((a, b) => Number(b.stars ?? 0) - Number(a.stars ?? 0));
      return copy;
    default:
      return trips;
  }
}

export function filterTrips(
  trips,
  { searchQuery, country, selectedStars, nightsRaw, minPriceRaw, maxPriceRaw, sort }
) {
  const q = normalizeText(searchQuery);
  const countryFilter = String(country ?? '').trim();
  const starSet =
    Array.isArray(selectedStars) && selectedStars.length > 0
      ? new Set(selectedStars.map((n) => Number(n)).filter((n) => Number.isFinite(n) && n >= 1))
      : null;
  const nights = parseStrictPositiveInt(nightsRaw);
  const minPrice = parsePriceBound(minPriceRaw);
  const maxPrice = parsePriceBound(maxPriceRaw);

  const filtered = trips.filter((trip) => {
    if (q) {
      const chunks = [
        trip.title,
        trip.description,
        trip.country,
        trip.city ?? '',
      ].map(normalizeText);
      const matchesSearch = chunks.some((chunk) => chunk.includes(q));
      if (!matchesSearch) return false;
    }

    if (countryFilter) {
      if (normalizeText(trip.country) !== normalizeText(countryFilter)) {
        return false;
      }
    }

    if (starSet !== null) {
      if (!starSet.has(Number(trip.stars))) return false;
    }

    if (nights !== null) {
      if (Number(trip.duration) !== nights) return false;
    }

    const price = Number(trip.price);
    if (minPrice !== null && price < minPrice) return false;
    if (maxPrice !== null && price > maxPrice) return false;

    return true;
  });

  return applySort(filtered, String(sort ?? ''));
}

export function buildTripFilterOptions(trips) {
  const countries = [...new Set(trips.map((t) => t.country).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const stars = [...new Set(trips.map((t) => t.stars).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  const nights = [...new Set(trips.map((t) => t.duration).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  return { countries, stars, nights };
}
