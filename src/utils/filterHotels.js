import { normalizeText, parsePositiveInt, parseMaxPrice } from './filterHelpers';

export function filterHotels(hotels, { searchQuery, country, starsRaw, minReviewsRaw, maxPriceRaw }) {
  const q = normalizeText(searchQuery);
  const countryFilter = String(country ?? '').trim();
  const stars = parsePositiveInt(starsRaw);
  const minReviews = parsePositiveInt(minReviewsRaw);
  const maxPrice = parseMaxPrice(maxPriceRaw);

  return hotels.filter((hotel) => {
    if (q) {
      const chunks = [
        hotel.title,
        hotel.description,
        hotel.country,
        hotel.city,
        String(hotel.stars ?? ''),
        String(hotel.reviews ?? ''),
        String(hotel.price ?? ''),
      ].map(normalizeText);
      if (!chunks.some((chunk) => chunk.includes(q))) return false;
    }

    if (countryFilter) {
      if (normalizeText(hotel.country) !== normalizeText(countryFilter)) return false;
    }

    if (stars !== null) {
      if (Number(hotel.stars) !== stars) return false;
    }

    if (minReviews !== null) {
      if (Number(hotel.reviews) < minReviews) return false;
    }

    if (maxPrice !== null) {
      if (Number(hotel.price) > maxPrice) return false;
    }

    return true;
  });
}

export function buildHotelFilterOptions(hotels) {
  const countries = [...new Set(hotels.map((h) => h.country).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const starOptions = [...new Set(hotels.map((h) => h.star).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  const reviewPoints = [...new Set(hotels.map((h) => h.review).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  const pricePoints = [...new Set(hotels.map((h) => h.price).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  return { countries, starOptions, reviewPoints, pricePoints };
}
