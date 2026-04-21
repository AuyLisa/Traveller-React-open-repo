import { normalizeText, parsePriceBound, parseHoursToMinutes } from './filterHelpers';

function matchesExactFilter(haystack, needle) {
  const n = normalizeText(needle);
  if (!n) return true;
  return normalizeText(haystack) === n;
}

/** Парсит строки вида «3ч 30мин» в минуты */
function parseAviaDurationToMinutes(str) {
  const s = String(str ?? '').trim();
  const m = s.match(/(\d+)\s*ч\s*(\d+)\s*мин/i);
  if (m) return Number(m[1]) * 60 + Number(m[2]);
  const m2 = s.match(/(\d+)\s*ч/i);
  if (m2) return Number(m2[1]) * 60;
  return null;
}

export function filterAvias(
  avias,
  {
    searchQuery,
    from,
    to,
    airline,
    durationMinHoursRaw,
    durationMaxHoursRaw,
    minPriceRaw,
    maxPriceRaw,
  }
) {
  const q = normalizeText(searchQuery);
  const minPrice = parsePriceBound(minPriceRaw);
  const maxPrice = parsePriceBound(maxPriceRaw);
  const durMin = parseHoursToMinutes(durationMinHoursRaw);
  const durMax = parseHoursToMinutes(durationMaxHoursRaw);

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

    if (!matchesExactFilter(a.from, from)) return false;
    if (!matchesExactFilter(a.to, to)) return false;
    if (!matchesExactFilter(a.airline, airline)) return false;

    const flightMin = parseAviaDurationToMinutes(a.duration);
    if (flightMin === null) return false;
    if (durMin !== null && flightMin < durMin) return false;
    if (durMax !== null && flightMin > durMax) return false;

    const price = Number(a.price);
    if (minPrice !== null && price < minPrice) return false;
    if (maxPrice !== null && price > maxPrice) return false;

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
  return { froms, tos, airlines };
}
