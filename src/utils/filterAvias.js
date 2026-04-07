import { normalizeText, parseMaxPrice } from './filterHelpers';

function matchesTextFilter(haystack, needle) {
  const n = normalizeText(needle);
  if (!n) return true;
  return normalizeText(haystack).includes(n);
}

export function filterAvias(avias, { searchQuery, from, to, airline, durationRaw, maxPriceRaw }) {
  const q = normalizeText(searchQuery);
  const maxPrice = parseMaxPrice(maxPriceRaw);

  return avias.filter((a) => {
    if (q) {
      const chunks = [
        a.from,
        a.to,
        a.airline,
        a.duration,
        a.departure,
        a.arrival,
        String(a.price ?? ''),
      ].map(normalizeText);
      if (!chunks.some((chunk) => chunk.includes(q))) return false;
    }

    if (!matchesTextFilter(a.from, from)) return false;
    if (!matchesTextFilter(a.to, to)) return false;
    if (!matchesTextFilter(a.airline, airline)) return false;
    if (!matchesTextFilter(a.duration, durationRaw)) return false;

    if (maxPrice !== null) {
      if (Number(a.price) > maxPrice) return false;
    }

    return true;
  });
}

export function buildAviaFilterOptions(avias) {
  const froms = [...new Set(avias.map((x) => x.from).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const tos = [...new Set(avias.map((x) => x.to).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const airlines = [...new Set(avias.map((x) => x.airline).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const durations = [...new Set(avias.map((x) => x.duration).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'ru')
  );
  const pricePoints = [...new Set(avias.map((x) => x.price).filter((n) => Number.isFinite(n)))].sort(
    (a, b) => a - b
  );
  return { froms, tos, airlines, durations, pricePoints };
}
