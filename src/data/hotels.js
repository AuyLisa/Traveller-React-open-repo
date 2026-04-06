// Данные отелей: country, stars, price, reviews — для фильтрации на странице /hotels

const hotels = [
  {
    id: 1,
    title: 'Отель Sun Paradise',
    country: 'Турция',
    city: 'Анталия',
    price: 50000,
    stars: 3,
    reviews: 10,
    description: 'Уютный семейный отель в 5 минутах от пляжа. Большая зеленая территория, открытый бассейн, детская анимация.',
    options: {
      wifi: true,
      parking: true,
      pool: true,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: true,
      beach: true
    }
  },

  {
    id: 2,
    title: 'Отель Dubai Palace',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 100000,
    stars: 5,
    reviews: 89,
    description: 'Роскошный 5-звездочный отель в самом сердце Дубая. Панорамный вид на город, спа-центр, и закрытый пляж.',
    options: {
      wifi: true,
      parking: true,
      pool: true,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: true,
      beach: true
    }
  },

  {
    id: 3,
    title: 'Отель Star Beach',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 65000,
    stars: 4,
    reviews: 34,
    description: 'Отель на первой береговой линии с собственным коралловым рифом. Отличное место для дайвинга.',
    options: {
      wifi: true,
      parking: false,
      pool: true,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: false,
      beach: true
    }
  },

  {
    id: 4,
    title: 'Отель Thai Bay',
    country: 'Таиланд',
    city: 'Пхукет',
    price: 110000,
    stars: 3,
    reviews: 15,
    description: 'Уютный отель в традиционном тайском стиле. Расположен в тихом районе, рядом с ночной жизнью Патонга.',
    options: {
      wifi: true,
      parking: false,
      pool: true,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: false,
      beach: true
    }
  },

  { 
    id: 5,
    title: 'Отель Tbilisi Old Town',
    country: 'Грузия',
    city: 'Тбилиси',
    price: 45000,
    stars: 5,
    reviews: 6,
    description: 'Бутик-отель с уникальным дизайном в историческом центре Тбилиси.',
    options: {
      wifi: true,
      parking: false,
      pool: false,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: false,
      beach: false
    }
  },

  {
    id: 6,
    title: 'Отель Maldives Paradise',
    country: 'Мальдивы',
    city: 'Мале',
    price: 250000,
    stars: 5,
    reviews: 41,
    description: 'Роскошные виллы на воде с частным бассейном и выходом к океану. Идеальное место для отдыха.',
    options: {
      wifi: true,
      parking: true,
      pool: true,
      breakfast: true,
      restaurant: true,
      playground: true,
      spa: false,
      beach: true
    }
  }
];

export default hotels;