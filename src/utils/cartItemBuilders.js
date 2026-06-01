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


export function flightClassToCartPayload(avia, flightClass) {
  return {
    type: 'flight',
    itemId: `${avia.id}-${flightClass.id}`,   // "1-economy"
    title: `${avia.from} → ${avia.to}, ${flightClass.name} класс`,
    price: flightClass.priceFrom,
    meta: {
      // Эти поля использует formatCartItemMeta
      from: avia.from,
      to: avia.to,
      airline: avia.airline,
      departure: avia.departure,
      arrival: avia.arrival,
      
      // Дополнительные поля для корзины
      duration: avia.duration,
      planeName: avia.planeName,
      classType: flightClass.name,
      seats: flightClass.seats,
      originalPrice: avia.price,
      flightId: avia.id,
    },
  };
}
  
export function roomToCartPayload(room, hotel) {
  return {
    type: 'room',
    itemId: room.id,
    title: room.title,
    price: room.pricePerNight,
    meta: {
      hotelId: hotel?.id,
      hotelTitle: hotel?.title,
      hotelCountry: hotel?.country,
      hotelCity: hotel?.city,
      size: room.size,
      capacity: room.capacity,
      nights: 1,
    },
  }
}