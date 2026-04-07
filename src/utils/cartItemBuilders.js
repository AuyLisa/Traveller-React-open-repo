export function tripToCartPayload(trip) {
  return {
    type: 'trip',
    itemId: trip.id,
    title: trip.title,
    price: trip.price,
    meta: {
      country: trip.country,
      city: trip.city || '',
      duration: trip.duration,
    },
  };
}

export function hotelToCartPayload(hotel) {
  return {
    type: 'hotel',
    itemId: hotel.id,
    title: hotel.title,
    price: hotel.price,
    meta: {
      country: hotel.country,
      city: hotel.city,
      stars: hotel.stars,
    },
  };
}

export function flightToCartPayload(avia) {
  return {
    type: 'flight',
    itemId: avia.id,
    title: `${avia.from} → ${avia.to}`,
    price: avia.price,
    meta: {
      from: avia.from,
      to: avia.to,
      airline: avia.airline,
      departure: avia.departure,
      arrival: avia.arrival,
    },
  };
}
