import { normalizeText, parsePositiveInt, parsePriceBound } from './filterHelpers';

export function filterHotels(
  hotels,
  {
    searchQuery,
    country,
    city,
    selectedStars,
    minReviewsRaw,
    maxReviewsRaw,
    minPriceRaw,
    maxPriceRaw,
  }
) {
  const q = normalizeText(searchQuery);
  const countryFilter = String(country ?? '').trim();
  const cityFilter = String(city ?? '').trim();
  const starSet =
    Array.isArray(selectedStars) && selectedStars.length > 0
      ? new Set(
          selectedStars
            .map((n) => Number(n))
            .filter((n) => Number.isFinite(n) && n >= 1 && n <= 5)
        )
      : null;
  const minReviews = parsePositiveInt(minReviewsRaw);
  const maxReviews = parsePositiveInt(maxReviewsRaw);
  const minPrice = parsePriceBound(minPriceRaw);
  const maxPrice = parsePriceBound(maxPriceRaw);

  return hotels.filter((hotel) => {
    if (q) {
      const chunks = [
        hotel.title,
        hotel.description,
        hotel.country,
        hotel.city,
        String(hotel.star ?? ''),
        String(hotel.review ?? ''),
        String(hotel.price ?? ''),
      ].map(normalizeText);
      if (!chunks.some((chunk) => chunk.includes(q))) return false;
    }

    if (countryFilter) {
      if (normalizeText(hotel.country) !== normalizeText(countryFilter)) return false;
    }

    if (cityFilter) {
      if (normalizeText(hotel.city) !== normalizeText(cityFilter)) return false;
    }

    if (starSet !== null) {
      if (!starSet.has(Number(hotel.star))) return false;
    }

    const rev = Number(hotel.review);
    if (minReviews !== null && rev < minReviews) return false;
    if (maxReviews !== null && rev > maxReviews) return false;

    const price = Number(hotel.price);
    if (minPrice !== null && price < minPrice) return false;
    if (maxPrice !== null && price > maxPrice) return false;

    return true;
  });
}

export function buildHotelFilterOptions(hotels) {
  const countries = [...new Set(hotels.map((h) => h.country).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const cities = [...new Set(hotels.map((h) => h.city).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const starOptions = [...new Set(hotels.map((h) => h.star).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  return { countries, cities, starOptions };
}