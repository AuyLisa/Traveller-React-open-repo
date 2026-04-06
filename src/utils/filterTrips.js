import { normalizeText, parsePositiveInt, parseMaxPrice } from './filterHelpers';

export function filterTrips(trips, { searchQuery, country, nightsRaw, maxPriceRaw }) {
  const q = normalizeText(searchQuery);
  const countryFilter = String(country ?? '').trim();
  const nights = parsePositiveInt(nightsRaw);
  const maxPrice = parseMaxPrice(maxPriceRaw);

  return trips.filter((trip) => {
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

    if (nights !== null) {
      if (Number(trip.duration) !== nights) return false;
    }

    if (maxPrice !== null) {
      if (Number(trip.price) > maxPrice) return false;
    }

    return true;
  });
}

export function buildTripFilterOptions(trips) {
  const countries = [...new Set(trips.map((t) => t.country).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const nights = [...new Set(trips.map((t) => t.duration).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  const pricePoints = [...new Set(trips.map((t) => t.price).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  return { countries, nights, pricePoints };
}
