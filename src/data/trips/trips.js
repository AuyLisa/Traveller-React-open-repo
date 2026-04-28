const trips = [
  // ТУРЦИЯ 
  {
    id: 1,
    title: 'Тур в Анталию "Солнечный берег"',
    images: [
      { id: 101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, пляж рядом',
    country: 'Турция',
    city: 'Анталия',
    duration: 7,
    price: 48500,
    stars: 4
  },
  {
    id: 2,
    title: 'Тур в Анталию "Все включено"',
    images: [
      { id: 201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, ультра все включено, спа',
    country: 'Турция',
    city: 'Анталия',
    duration: 10,
    price: 78500,
    stars: 5
  },
  {
    id: 3,
    title: 'Тур в Кемер "Лес и море"',
    images: [
      { id: 301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, все включено, анимация',
    country: 'Турция',
    city: 'Кемер',
    duration: 14,
    price: 89500,
    stars: 4
  },
  {
    id: 4,
    title: 'Тур в Белек "Элитный отдых"',
    images: [
      { id: 401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '21 ночь, люкс, поля для гольфа, спа, частный пляж',
    country: 'Турция',
    city: 'Белек',
    duration: 21,
    price: 135000,
    stars: 5
  },
  {
    id: 5,
    title: 'Тур в Стамбул "Город контрастов"',
    images: [
      { id: 501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, экскурсии включены',
    country: 'Турция',
    city: 'Стамбул',
    duration: 5,
    price: 32500,
    stars: 3
  },
  {
    id: 6,
    title: 'Тур в Аланью "Клеопатра"',
    images: [
      { id: 601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, завтрак+ужин, пляж рядом',
    country: 'Турция',
    city: 'Аланья',
    duration: 10,
    price: 42500,
    stars: 3
  },
  {
    id: 7,
    title: 'Тур в Бодрум "Яхтенная марина"',
    images: [
      { id: 701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, полупансион, ночная жизнь',
    country: 'Турция',
    city: 'Бодрум',
    duration: 7,
    price: 68500,
    stars: 5
  },
  {
    id: 8,
    title: 'Тур в Мармарис "Бухта ветров"',
    images: [
      { id: 801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '12 ночей, все включено, аквапарк',
    country: 'Турция',
    city: 'Мармарис',
    duration: 12,
    price: 72500,
    stars: 4
  },
  {
    id: 9,
    title: 'Тур в Сиде "Древний город"',
    images: [
      { id: 901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, все включено, руины рядом',
    country: 'Турция',
    city: 'Сиде',
    duration: 14,
    price: 89500,
    stars: 5
  },
  {
    id: 10,
    title: 'Тур в Фетхие "Лагуна"',
    images: [
      { id: 1001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, завтраки, параглайдинг',
    country: 'Турция',
    city: 'Фетхие',
    duration: 8,
    price: 45500,
    stars: 3
  },
  {
    id: 11,
    title: 'Тур в Каппадокию "Воздушные шары"',
    images: [
      { id: 1101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, пещерный отель, полет на шаре включен',
    country: 'Турция',
    city: 'Каппадокия',
    duration: 4,
    price: 38500,
    stars: 4
  },
  {
    id: 12,
    title: 'Тур в Памуккале "Термальные ванны"',
    images: [
      { id: 1201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, термальный отель, лечение, экскурсии',
    country: 'Турция',
    city: 'Памуккале',
    duration: 5,
    price: 28500,
    stars: 4
  },
  {
    id: 13,
    title: 'Тур в Лара "Песчаные пляжи"',
    images: [
      { id: 1301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, ультра все включено, аквапарк',
    country: 'Турция',
    city: 'Лара',
    duration: 10,
    price: 82500,
    stars: 5
  },
  {
    id: 14,
    title: 'Тур в Кушадасы "Эгейское море"',
    images: [
      { id: 1401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '9 ночей, все включено, экскурсия в Эфес',
    country: 'Турция',
    city: 'Кушадасы',
    duration: 9,
    price: 52500,
    stars: 4
  },
  {
    id: 15,
    title: 'Тур в Чешме "Ветреный берег"',
    images: [
      { id: 1501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, виндсерфинг',
    country: 'Турция',
    city: 'Чешме',
    duration: 7,
    price: 39500,
    stars: 3
  },
  {
    id: 16,
    title: 'Тур в Стамбул + Анталия "Два берега"',
    images: [
      { id: 1601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '3 ночи в Стамбуле + 10 ночей в Анталии, перелет включен',
    country: 'Турция',
    city: 'Стамбул/Анталия',
    duration: 13,
    price: 92500,
    stars: 4
  },
  {
    id: 17,
    title: 'Тур в Белек "Семейный рай"',
    images: [
      { id: 1701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, все включено, детский клуб, аквапарк',
    country: 'Турция',
    city: 'Белек',
    duration: 14,
    price: 112000,
    stars: 5
  },
  {
    id: 18,
    title: 'Тур в Анталию "Молодежный"',
    images: [
      { id: 1801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, клубы рядом',
    country: 'Турция',
    city: 'Анталия',
    duration: 5,
    price: 22500,
    stars: 3
  },
  {
    id: 19,
    title: 'Тур в Кемер "Горы и море"',
    images: [
      { id: 1901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 1902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 1903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 1904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '11 ночей, все включено, экскурсии в горы',
    country: 'Турция',
    city: 'Кемер',
    duration: 11,
    price: 69500,
    stars: 4
  },
  {
    id: 20,
    title: 'Тур в Турцию "Золотая коллекция"',
    images: [
      { id: 2001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '21 ночь, 5 городов: Стамбул, Каппадокия, Анталия, Памуккале, Эфес',
    country: 'Турция',
    city: 'Тур по стране',
    duration: 21,
    price: 158000,
    stars: 5
  },

  // ОАЭ
  {
    id: 21,
    title: 'Тур в Дубай "Город будущего"',
    images: [
      { id: 2101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, экскурсия на Бурдж-Халифа',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 7,
    price: 78500,
    stars: 4
  },
  {
    id: 22,
    title: 'Тур в Дубай "Пальмовая роща"',
    images: [
      { id: 2201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, полупансион, отель на Пальме, пляж',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 10,
    price: 125000,
    stars: 5
  },
  {
    id: 23,
    title: 'Тур в Абу-Даби "Люкс"',
    images: [
      { id: 2301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, люкс, частный пляж',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    duration: 14,
    price: 189000,
    stars: 5
  },
  {
    id: 24,
    title: 'Тур в Дубай "Шопинг"',
    images: [
      { id: 2401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, трансфер в Dubai Mall',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 5,
    price: 52500,
    stars: 4
  },
  {
    id: 25,
    title: 'Тур в Шарджу "Семейный"',
    images: [
      { id: 2501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, все включено, детский клуб',
    country: 'ОАЭ',
    city: 'Шарджа',
    duration: 8,
    price: 48500,
    stars: 4
  },
  {
    id: 26,
    title: 'Тур в Фуджейру "Океан и горы"',
    images: [
      { id: 2601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, дайвинг',
    country: 'ОАЭ',
    city: 'Фуджейра',
    duration: 7,
    price: 62500,
    stars: 5
  },
  {
    id: 27,
    title: 'Тур в Рас-эль-Хайму "Приключения"',
    images: [
      { id: 2701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, полупансион, сафари в пустыне',
    country: 'ОАЭ',
    city: 'Рас-эль-Хайма',
    duration: 6,
    price: 52800,
    stars: 4
  },
  {
    id: 28,
    title: 'Тур в Дубай "Новогодний"',
    images: [
      { id: 2801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, билет на новогоднее шоу',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 5,
    price: 158000,
    stars: 5
  },
  {
    id: 29,
    title: 'Тур в Абу-Даби "Формула-1"',
    images: [
      { id: 2901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 2902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 2903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 2904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, билет на гонки, трансфер',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    duration: 4,
    price: 142000,
    stars: 5
  },
  {
    id: 30,
    title: 'Тур в Дубай "Спа-курорт"',
    images: [
      { id: 3001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, спа-пакет, йога',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 10,
    price: 112000,
    stars: 5
  },
  {
    id: 31,
    title: 'Тур в ОАЭ "Пустынное сафари"',
    images: [
      { id: 3101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, сафари, ужин в пустыне',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 7,
    price: 68500,
    stars: 4
  },
  {
    id: 32,
    title: 'Тур в Абу-Даби "Лувр"',
    images: [
      { id: 3201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, билет в Лувр, экскурсии',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    duration: 5,
    price: 59800,
    stars: 4
  },
  {
    id: 33,
    title: 'Тур в Дубай "Экстрим"',
    images: [
      { id: 3301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, полупансион, прыжок с парашютом, аквапарк',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 6,
    price: 89500,
    stars: 4
  },
  {
    id: 34,
    title: 'Тур в Шарджу "Культурный"',
    images: [
      { id: 3401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, музеи, мечети',
    country: 'ОАЭ',
    city: 'Шарджа',
    duration: 5,
    price: 32800,
    stars: 3
  },
  {
    id: 35,
    title: 'Тур в Аджман "Бюджетный"',
    images: [
      { id: 3501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, завтраки, пляж',
    country: 'ОАЭ',
    city: 'Аджман',
    duration: 10,
    price: 39800,
    stars: 3
  },
  {
    id: 36,
    title: 'Тур в ОАЭ "Мальдивы в пустыне"',
    images: [
      { id: 3601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, люкс, пустынный курорт, бассейны-оазисы',
    country: 'ОАЭ',
    city: 'Эль-Айн',
    duration: 8,
    price: 98500,
    stars: 5
  },
  {
    id: 37,
    title: 'Тур в Дубай "Водный мир"',
    images: [
      { id: 3701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, Aquaventure билет',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 7,
    price: 72500,
    stars: 4
  },
  {
    id: 38,
    title: 'Тур в Абу-Даби "Яс-Айленд"',
    images: [
      { id: 3801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, билеты в Ferrari World и Warner Bros',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    duration: 6,
    price: 89500,
    stars: 5
  },
  {
    id: 39,
    title: 'Тур в ОАЭ "Зимний"',
    images: [
      { id: 3901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 3902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 3903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 3904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, все включено, идеальная погода',
    country: 'ОАЭ',
    city: 'Дубай',
    duration: 14,
    price: 158000,
    stars: 5
  },
  {
    id: 40,
    title: 'Тур в ОАЭ "Премиум"',
    images: [
      { id: 4001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, бизнес-класс перелет, трансферы',
    country: 'ОАЭ',
    city: 'Дубай/Абу-Даби',
    duration: 10,
    price: 245000,
    stars: 5
  },

  // ЕГИПЕТ
  {
    id: 41,
    title: 'Тур в Шарм-эль-Шейх "Коралловый риф"',
    images: [
      { id: 4101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, все включено, дайвинг',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    duration: 7,
    price: 52800,
    stars: 4
  },
  {
    id: 42,
    title: 'Тур в Хургаду "Макади Бэй"',
    images: [
      { id: 4201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, ультра все включено, аквапарк',
    country: 'Египет',
    city: 'Хургада',
    duration: 10,
    price: 72500,
    stars: 5
  },
  {
    id: 43,
    title: 'Тур в Египет "Древний Каир"',
    images: [
      { id: 4301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей в Каире + 7 ночей в Хургаде, пирамиды',
    country: 'Египет',
    city: 'Каир/Хургада',
    duration: 12,
    price: 68500,
    stars: 4
  },
  {
    id: 44,
    title: 'Тур в Дахаб "Дайвинг"',
    images: [
      { id: 4401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, завтраки, дайв-центр, Голубая дыра',
    country: 'Египет',
    city: 'Дахаб',
    duration: 14,
    price: 48500,
    stars: 3
  },
  {
    id: 45,
    title: 'Тур в Марса-Алам "Дюгони"',
    images: [
      { id: 4501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, полупансион, экскурсия к дюгоням',
    country: 'Египет',
    city: 'Марса-Алам',
    duration: 8,
    price: 62500,
    stars: 4
  },
  {
    id: 46,
    title: 'Тур в Эль-Гуну "Венеция Египта"',
    images: [
      { id: 4601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, все включено, каналы',
    country: 'Египет',
    city: 'Эль-Гуна',
    duration: 10,
    price: 89500,
    stars: 5
  },
  {
    id: 47,
    title: 'Тур в Луксор "Сокровища фараонов"',
    images: [
      { id: 4701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, экскурсии в Долину царей',
    country: 'Египет',
    city: 'Луксор',
    duration: 4,
    price: 28500,
    stars: 3
  },
  {
    id: 48,
    title: 'Тур в Табу "Синай"',
    images: [
      { id: 4801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, полупансион, горы и море',
    country: 'Египет',
    city: 'Таба',
    duration: 7,
    price: 35800,
    stars: 3
  },
  {
    id: 49,
    title: 'Тур в Сома-Бэй "Гольф"',
    images: [
      { id: 4901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 4902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 4903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 4904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, все включено, поле для гольфа, спа',
    country: 'Египет',
    city: 'Сома-Бэй',
    duration: 10,
    price: 78500,
    stars: 5
  },
  {
    id: 50,
    title: 'Тур в Сафагу "Виндсерфинг"',
    images: [
      { id: 5001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, завтраки, школа кайтсерфинга',
    country: 'Египет',
    city: 'Сафага',
    duration: 8,
    price: 39500,
    stars: 3
  },
  {
    id: 51,
    title: 'Тур в Шарм-эль-Шейх "Наама Бэй"',
    images: [
      { id: 5101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, все включено, ночная жизнь',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    duration: 7,
    price: 58500,
    stars: 4
  },
  {
    id: 52,
    title: 'Тур в Хургаду "Семейный"',
    images: [
      { id: 5201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '12 ночей, ультра все включено, детский клуб',
    country: 'Египет',
    city: 'Хургада',
    duration: 12,
    price: 82500,
    stars: 5
  },
  {
    id: 53,
    title: 'Тур в Рас-Мохаммед "Дайвинг-сафари"',
    images: [
      { id: 5301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, дайв-сафари, национальный парк',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    duration: 5,
    price: 49500,
    stars: 4
  },
  {
    id: 54,
    title: 'Тур в Александрию "Средиземноморье"',
    images: [
      { id: 5401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, библиотека, цитадель',
    country: 'Египет',
    city: 'Александрия',
    duration: 4,
    price: 19800,
    stars: 3
  },
  {
    id: 55,
    title: 'Тур в Асуан "Нил"',
    images: [
      { id: 5501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, круиз по Нилу, храмы, завтраки',
    country: 'Египет',
    city: 'Асуан',
    duration: 5,
    price: 42500,
    stars: 4
  },
  {
    id: 56,
    title: 'Тур в Нувейбу "Уединение"',
    images: [
      { id: 5601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, завтраки, тишина',
    country: 'Египет',
    city: 'Нувейба',
    duration: 10,
    price: 32500,
    stars: 3
  },
  {
    id: 57,
    title: 'Тур в Египет "Все включено максимум"',
    images: [
      { id: 5701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, аквапарк, спа, анимация',
    country: 'Египет',
    city: 'Хургада',
    duration: 14,
    price: 112000,
    stars: 5
  },
  {
    id: 58,
    title: 'Тур в Шарм-эль-Шейх "Романтический"',
    images: [
      { id: 5801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, ужины на пляже, спа',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    duration: 7,
    price: 68500,
    stars: 5
  },
  {
    id: 59,
    title: 'Тур в Египет "Экскурсионный"',
    images: [
      { id: 5901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 5902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 5903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 5904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, 5 экскурсий: Каир, Луксор, пирамиды',
    country: 'Египет',
    city: 'Хургада/Каир/Луксор',
    duration: 10,
    price: 72500,
    stars: 4
  },
  {
    id: 60,
    title: 'Тур в Марса-Алам "Черепахи"',
    images: [
      { id: 6001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, полупансион, снорклинг с черепахами',
    country: 'Египет',
    city: 'Марса-Алам',
    duration: 8,
    price: 55800,
    stars: 4
  },

  // ТАИЛАНД
  {
    id: 61,
    title: 'Тур в Пхукет "Андаманское море"',
    images: [
      { id: 6101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, экскурсия на Пхи-Пхи',
    country: 'Таиланд',
    city: 'Пхукет',
    duration: 7,
    price: 78500,
    stars: 4
  },
  {
    id: 62,
    title: 'Тур в Бангкок "Город ангелов"',
    images: [
      { id: 6201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, экскурсии в храмы, плавучие рынки',
    country: 'Таиланд',
    city: 'Бангкок',
    duration: 5,
    price: 42500,
    stars: 4
  },
  {
    id: 63,
    title: 'Тур на Самуи "Кокосовый остров"',
    images: [
      { id: 6301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, полупансион, виллы',
    country: 'Таиланд',
    city: 'Самуи',
    duration: 10,
    price: 112000,
    stars: 5
  },
  {
    id: 64,
    title: 'Тур в Паттайю "Веселье"',
    images: [
      { id: 6401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, ночная жизнь',
    country: 'Таиланд',
    city: 'Паттайя',
    duration: 7,
    price: 45800,
    stars: 3
  },
  {
    id: 65,
    title: 'Тур в Краби "Скалы и лагуны"',
    images: [
      { id: 6501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, завтраки, экскурсия к скалам Рейли',
    country: 'Таиланд',
    city: 'Краби',
    duration: 8,
    price: 62500,
    stars: 4
  },
  {
    id: 66,
    title: 'Тур в Чиангмай "Северные легенды"',
    images: [
      { id: 6601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, завтраки, храмы, слоны, джунгли',
    country: 'Таиланд',
    city: 'Чиангмай',
    duration: 6,
    price: 48500,
    stars: 4
  },
  {
    id: 67,
    title: 'Тур на Пхи-Пхи "Райский остров"',
    images: [
      { id: 6701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, полупансион, пляж Майя-Бэй',
    country: 'Таиланд',
    city: 'Пхи-Пхи',
    duration: 5,
    price: 68500,
    stars: 4
  },
  {
    id: 68,
    title: 'Тур в Хуахин "Королевский берег"',
    images: [
      { id: 6801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, гольф',
    country: 'Таиланд',
    city: 'Хуахин',
    duration: 7,
    price: 52500,
    stars: 4
  },
  {
    id: 69,
    title: 'Тур на Ланту "Безлюдный рай"',
    images: [
      { id: 6901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 6902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 6903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 6904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, завтраки, пляжи',
    country: 'Таиланд',
    city: 'Ланта',
    duration: 10,
    price: 59500,
    stars: 4
  },
  {
    id: 70,
    title: 'Тур на Тао "Дайвинг"',
    images: [
      { id: 7001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, завтраки, дайв-курс, сертификация',
    country: 'Таиланд',
    city: 'Тао',
    duration: 8,
    price: 55800,
    stars: 4
  },
  {
    id: 71,
    title: 'Тур в Пхукет "Патонг Бич"',
    images: [
      { id: 7101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '9 ночей, полупансион, клубы рядом',
    country: 'Таиланд',
    city: 'Пхукет',
    duration: 9,
    price: 72800,
    stars: 4
  },
  {
    id: 72,
    title: 'Тур в Бангкок + Паттайя "Две столицы"',
    images: [
      { id: 7201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '3 ночи Бангкок + 7 ночей Паттайя, трансфер',
    country: 'Таиланд',
    city: 'Бангкок/Паттайя',
    duration: 10,
    price: 68500,
    stars: 4
  },
  {
    id: 73,
    title: 'Тур на Самуи "Чавенг Бич"',
    images: [
      { id: 7301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, все включено, ночная жизнь',
    country: 'Таиланд',
    city: 'Самуи',
    duration: 7,
    price: 89500,
    stars: 5
  },
  {
    id: 74,
    title: 'Тур на Пханган "Full Moon Party"',
    images: [
      { id: 7401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, билет на Full Moon Party, завтраки',
    country: 'Таиланд',
    city: 'Пханган',
    duration: 5,
    price: 38500,
    stars: 3
  },
  {
    id: 75,
    title: 'Тур в Чианграй "Белый храм"',
    images: [
      { id: 7501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, экскурсия в Золотой треугольник',
    country: 'Таиланд',
    city: 'Чианграй',
    duration: 4,
    price: 29800,
    stars: 4
  },
  {
    id: 76,
    title: 'Тур в Краби "Ката Бич"',
    images: [
      { id: 7601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, полупансион, серфинг',
    country: 'Таиланд',
    city: 'Краби',
    duration: 8,
    price: 62500,
    stars: 4
  },
  {
    id: 77,
    title: 'Тур на Чанг "Слоны"',
    images: [
      { id: 7701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, экскурсии к слонам, водопады',
    country: 'Таиланд',
    city: 'Чанг',
    duration: 7,
    price: 45800,
    stars: 4
  },
  {
    id: 78,
    title: 'Тур в Аюттхаю "Древняя столица"',
    images: [
      { id: 7801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '3 ночи, завтраки, экскурсия по храмам',
    country: 'Таиланд',
    city: 'Аюттхая',
    duration: 3,
    price: 18500,
    stars: 3
  },
  {
    id: 79,
    title: 'Тур в Пхукет "Спа-отдых"',
    images: [
      { id: 7901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 7902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 7903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 7904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, спа-пакет, йога, здоровое питание',
    country: 'Таиланд',
    city: 'Пхукет',
    duration: 10,
    price: 112000,
    stars: 5
  },
  {
    id: 80,
    title: 'Тур в Таиланд "Премиум"',
    images: [
      { id: 8001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, бизнес-класс, полный пансион',
    country: 'Таиланд',
    city: 'Бангкок/Пхукет/Самуи',
    duration: 14,
    price: 235000,
    stars: 5
  },

  // ГРУЗИЯ
  {
    id: 81,
    title: 'Тур в Тбилиси "Душа Грузии"',
    images: [
      { id: 8101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, экскурсии, вино',
    country: 'Грузия',
    city: 'Тбилиси',
    duration: 5,
    price: 38500,
    stars: 4
  },
  {
    id: 82,
    title: 'Тур в Батуми "Черное море"',
    images: [
      { id: 8201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, пляж',
    country: 'Грузия',
    city: 'Батуми',
    duration: 7,
    price: 42500,
    stars: 4
  },
  {
    id: 83,
    title: 'Тур в Казбеги "Горы"',
    images: [
      { id: 8301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, вид на Казбек, Гергети',
    country: 'Грузия',
    city: 'Казбеги',
    duration: 4,
    price: 28500,
    stars: 3
  },
  {
    id: 84,
    title: 'Тур в Кахетию "Винная дорога"',
    images: [
      { id: 8401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, завтраки, дегустации, экскурсии по винодельням',
    country: 'Грузия',
    city: 'Кахетия',
    duration: 6,
    price: 39800,
    stars: 4
  },
  {
    id: 85,
    title: 'Тур в Кутаиси "Древняя Колхида"',
    images: [
      { id: 8501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, пещеры, каньоны',
    country: 'Грузия',
    city: 'Кутаиси',
    duration: 5,
    price: 28500,
    stars: 3
  },
  {
    id: 86,
    title: 'Тур в Сванетию "Башни и ледники"',
    images: [
      { id: 8601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, полупансион, треккинг, Местиа, Ушгули',
    country: 'Грузия',
    city: 'Местиа',
    duration: 7,
    price: 45800,
    stars: 3
  },
  {
    id: 87,
    title: 'Тур в Боржоми "Минеральные воды"',
    images: [
      { id: 8701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, термальный отель, лечение, парк Боржоми',
    country: 'Грузия',
    city: 'Боржоми',
    duration: 5,
    price: 32500,
    stars: 4
  },
  {
    id: 88,
    title: 'Тур в Сигнахи "Город любви"',
    images: [
      { id: 8801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '4 ночи, завтраки, вид на Алазанскую долину',
    country: 'Грузия',
    city: 'Сигнахи',
    duration: 4,
    price: 22500,
    stars: 3
  },
  {
    id: 89,
    title: 'Тур в Грузию "Гастрономический"',
    images: [
      { id: 8901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 8902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 8903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 8904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, завтраки, мастер-классы по хинкали и хачапури',
    country: 'Грузия',
    city: 'Тбилиси/Кахетия',
    duration: 7,
    price: 52500,
    stars: 4
  },
  {
    id: 90,
    title: 'Тур в Бакуриани "Зимний"',
    images: [
      { id: 9001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, завтраки, горнолыжный курорт, подъемники',
    country: 'Грузия',
    city: 'Бакуриани',
    duration: 6,
    price: 39800,
    stars: 3
  },
  {
    id: 91,
    title: 'Тур в Вардзию "Пещерный город"',
    images: [
      { id: 9101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '3 ночи, завтраки, экскурсия в пещеры',
    country: 'Грузия',
    city: 'Вардзия',
    duration: 3,
    price: 18500,
    stars: 3
  },
  {
    id: 92,
    title: 'Тур в Телави "Алазанская долина"',
    images: [
      { id: 9201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, вино, дворец царя Ираклия',
    country: 'Грузия',
    city: 'Телави',
    duration: 5,
    price: 29500,
    stars: 3
  },
  {
    id: 93,
    title: 'Тур в Гонио "Крепость и море"',
    images: [
      { id: 9301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, полупансион, пляж, древняя крепость',
    country: 'Грузия',
    city: 'Гонио',
    duration: 7,
    price: 38500,
    stars: 4
  },
  {
    id: 94,
    title: 'Тур в Кобулети "Бюджетный"',
    images: [
      { id: 9401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, завтраки, пляж',
    country: 'Грузия',
    city: 'Кобулети',
    duration: 10,
    price: 28500,
    stars: 3
  },
  {
    id: 95,
    title: 'Тур в Степанцминду "Хевсурети"',
    images: [
      { id: 9501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, завтраки, треккинг, горные села',
    country: 'Грузия',
    city: 'Степанцминда',
    duration: 5,
    price: 32500,
    stars: 3
  },
  {
    id: 96,
    title: 'Тур в Грузию "Золотое кольцо"',
    images: [
      { id: 9601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, Тбилиси-Кахетия-Боржоми-Кутаиси-Казбеги',
    country: 'Грузия',
    city: 'Тур по стране',
    duration: 10,
    price: 78500,
    stars: 4
  },
  {
    id: 97,
    title: 'Тур в Уреки "Магнетические пески"',
    images: [
      { id: 9701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, завтраки, лечебные пески',
    country: 'Грузия',
    city: 'Уреки',
    duration: 8,
    price: 35800,
    stars: 3
  },
  {
    id: 98,
    title: 'Тур в Грузию "Спа и вино"',
    images: [
      { id: 9801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, спа-отель, винные туры, термальные источники',
    country: 'Грузия',
    city: 'Тбилиси/Кахетия',
    duration: 7,
    price: 62500,
    stars: 5
  },
  {
    id: 99,
    title: 'Тур в Грузию "Выходные"',
    images: [
      { id: 9901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 9902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 9903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 9904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '3 ночи, Тбилиси + Мцхета, завтраки',
    country: 'Грузия',
    city: 'Тбилиси',
    duration: 3,
    price: 18500,
    stars: 3
  },
  {
    id: 100,
    title: 'Тур в Грузию "Экстремальный"',
    images: [
      { id: 10001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, рафтинг, джиппинг, парапланеризм, треккинг',
    country: 'Грузия',
    city: 'Казбеги/Сванетия',
    duration: 8,
    price: 68500,
    stars: 4
  },

  // МАЛЬДИВЫ
  {
    id: 101,
    title: 'Тур на Мальдивы "Райский остров"',
    images: [
      { id: 10101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, вилла на воде, завтраки, дайвинг',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 7,
    price: 185000,
    stars: 5
  },
  {
    id: 102,
    title: 'Тур на Мальдивы "Медовый месяц"',
    images: [
      { id: 10201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, вилла с бассейном, ужины на пляже, спа',
    country: 'Мальдивы',
    city: 'Северный Мале',
    duration: 10,
    price: 285000,
    stars: 5
  },
  {
    id: 103,
    title: 'Тур на Мальдивы "Дайвинг"',
    images: [
      { id: 10301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, дайв-пакет, сертифицированный инструктор',
    country: 'Мальдивы',
    city: 'Южный Ари',
    duration: 8,
    price: 158000,
    stars: 4
  },
  {
    id: 104,
    title: 'Тур на Мальдивы "Семейный"',
    images: [
      { id: 10401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '12 ночей, вилла на пляже, детский клуб, анимация',
    country: 'Мальдивы',
    city: 'Баа',
    duration: 12,
    price: 225000,
    stars: 5
  },
  {
    id: 105,
    title: 'Тур на Мальдивы "Люкс"',
    images: [
      { id: 10501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, отель 5* deluxe, спа, все включено',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 14,
    price: 395000,
    stars: 5
  },
  {
    id: 106,
    title: 'Тур на Мальдивы "Серфинг"',
    images: [
      { id: 10601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, серф-лагерь, обучение, лучшие волны',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 7,
    price: 128000,
    stars: 4
  },
  {
    id: 107,
    title: 'Тур на Мальдивы "Снорклинг"',
    images: [
      { id: 10701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, вилла на воде, риф в 20 метрах, черепахи',
    country: 'Мальдивы',
    city: 'Баа',
    duration: 8,
    price: 145000,
    stars: 5
  },
  {
    id: 108,
    title: 'Тур на Мальдивы "Бюджетный"',
    images: [
      { id: 10801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '5 ночей, гостевой дом на местном острове, экскурсии',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 5,
    price: 58500,
    stars: 3
  },
  {
    id: 109,
    title: 'Тур на Мальдивы "Спа-курорт"',
    images: [
      { id: 10901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 10902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 10903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 10904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, спа-пакет, йога, детокс-программа',
    country: 'Мальдивы',
    city: 'Южный Ари',
    duration: 10,
    price: 195000,
    stars: 5
  },
  {
    id: 110,
    title: 'Тур на Мальдивы "Китовые акулы"',
    images: [
      { id: 11001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, снорклинг с китовыми акулами, мантами',
    country: 'Мальдивы',
    city: 'Южный Ари',
    duration: 7,
    price: 168000,
    stars: 5
  },
  {
    id: 111,
    title: 'Тур на Мальдивы "Приватный остров"',
    images: [
      { id: 11101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11102, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11103, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11104, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, полная изоляция, персональный шеф-повар',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 10,
    price: 485000,
    stars: 5
  },
  {
    id: 112,
    title: 'Тур на Мальдивы "Вилла на воде"',
    images: [
      { id: 11201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11202, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11203, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11204, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, стеклянный пол, прямой спуск в океан',
    country: 'Мальдивы',
    city: 'Северный Мале',
    duration: 7,
    price: 198000,
    stars: 5
  },
  {
    id: 113,
    title: 'Тур на Мальдивы "Пляжный отдых"',
    images: [
      { id: 11301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11302, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11303, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11304, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '9 ночей, пляжная вилла, белый песок, бирюзовая лагуна',
    country: 'Мальдивы',
    city: 'Баа',
    duration: 9,
    price: 138000,
    stars: 4
  },
  {
    id: 114,
    title: 'Тур на Мальдивы "Рыбалка"',
    images: [
      { id: 11401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11402, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11403, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11404, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '6 ночей, трофейная рыбалка, барбекю на пляже',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 6,
    price: 98500,
    stars: 4
  },
  {
    id: 115,
    title: 'Тур на Мальдивы "Романтический"',
    images: [
      { id: 11501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, закаты, ужины на пляже, спа для двоих',
    country: 'Мальдивы',
    city: 'Южный Ари',
    duration: 8,
    price: 175000,
    stars: 5
  },
  {
    id: 116,
    title: 'Тур на Мальдивы "Эко-курорт"',
    images: [
      { id: 11601, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11602, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11603, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11604, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, солнечные панели, органическая кухня, природа',
    country: 'Мальдивы',
    city: 'Баа',
    duration: 10,
    price: 148000,
    stars: 4
  },
  {
    id: 117,
    title: 'Тур на Мальдивы "Дайвинг-сафари"',
    images: [
      { id: 11701, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11702, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11703, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11704, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '8 ночей, лайф-борд, лучшие дайв-сайты, полный пансион',
    country: 'Мальдивы',
    city: 'Мале',
    duration: 8,
    price: 198000,
    stars: 5
  },
  {
    id: 118,
    title: 'Тур на Мальдивы "Новогодний"',
    images: [
      { id: 11801, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11802, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11803, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11804, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '10 ночей, новогодний гала-ужин, фейерверки, праздничная программа',
    country: 'Мальдивы',
    city: 'Северный Мале',
    duration: 10,
    price: 325000,
    stars: 5
  },
  {
    id: 119,
    title: 'Тур на Мальдивы "Инстаграмный"',
    images: [
      { id: 11901, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 11902, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 11903, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 11904, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '7 ночей, фотосессия, лучшие локации, вилла с бассейном',
    country: 'Мальдивы',
    city: 'Баа',
    duration: 7,
    price: 188000,
    stars: 5
  },
  {
    id: 120,
    title: 'Тур на Мальдивы "Премиум-класс"',
    images: [
      { id: 12001, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Старый город (Калеичи)" },
      { id: 12002, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Ворота Адриана" },
      { id: 12003, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Башня Хыдырлык" },
      { id: 12004, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Водопад Дюден (верхний)" }
    ],
    description: '14 ночей, бизнес-класс, все включено, гид 24/7',
    country: 'Мальдивы',
    city: 'Мале/Южный Ари',
    duration: 14,
    price: 495000,
    stars: 5
  },

  {
  id: 121,
  title: 'Тур в Сочи "Жемчужина Черного моря"',
  images: [
    { id: 12101, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Олимпийский парк" },
    { id: 12102, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Дендрарий" },
    { id: 12103, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Морской вокзал" },
    { id: 12104, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Парк Ривьера" }
  ],
  description: '7 ночей, завтраки, бассейн, рядом с морем',
  country: 'Россия',
  city: 'Сочи',
  duration: 7,
  price: 28900,
  stars: 4
},
{
  id: 122,
  title: 'Тур в Калининград "Янтарный край"',
  images: [
    { id: 12201, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Кафедральный собор" },
    { id: 12202, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Куршская коса" },
    { id: 12203, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Музей янтаря" },
    { id: 12204, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Рыбная деревня" }
  ],
  description: '5 ночей, экскурсии включены, завтраки',
  country: 'Россия',
  city: 'Калининград',
  duration: 5,
  price: 22450,
  stars: 3
},
{
  id: 123,
  title: 'Тур в Санкт-Петербург "Северная Венеция"',
  images: [
    { id: 12301, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Эрмитаж" },
    { id: 12302, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Петергоф" },
    { id: 12303, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Невский проспект" },
    { id: 12304, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Исаакиевский собор" }
  ],
  description: '4 ночи, завтраки, экскурсионная программа',
  country: 'Россия',
  city: 'Санкт-Петербург',
  duration: 4,
  price: 19800,
  stars: 4
},
{
  id: 124,
  title: 'Тур в Геленджик "Бухта счастья"',
  images: [
    { id: 12401, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Набережная Геленджика" },
    { id: 12402, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Сафари-парк" },
    { id: 12403, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Скала Парус" },
    { id: 12404, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Водопад Нептун" }
  ],
  description: '6 ночей, завтраки и ужины, бассейн',
  country: 'Россия',
  city: 'Геленджик',
  duration: 6,
  price: 26500,
  stars: 3
},

{
  id: 125,
  title: 'Тур на Шри-Ланку "Жемчужина Индийского океана"',
  images: [
    { id: 12501, src: "/images/trips/id1/trip-id1-p1.jpg", alt: "Хиккадува, пляж" },
    { id: 12502, src: "/images/trips/id1/trip-id1-p2.jpg", alt: "Бентота, река" },
    { id: 12503, src: "/images/trips/id1/trip-id1-p3.jpg", alt: "Негомбо, рыбацкие лодки" },
    { id: 12504, src: "/images/trips/id1/trip-id1-p4.jpg", alt: "Ваддува, храм" }
  ],
  description: '8 ночей, завтраки, трансфер, страховка',
  country: 'Шри-Ланка',
  city: 'Хиккадува',
  duration: 8,
  price: 125583,
  stars: 4
},
{
  id: 126,
  title: 'Тур на Шри-Ланку "Чайные плантации"',
  images: [
    { id: 12601, src: "/images/trips/id126/trip-id1-p1.jpg", alt: "Чайные плантации Нувара-Элии" },
    { id: 12602, src: "/images/trips/id126/trip-id1-p2.jpg", alt: "Гора Адамов пик" },
    { id: 12603, src: "/images/trips/id126/trip-id1-p3.jpg", alt: "Ботанический сад" },
    { id: 12604, src: "/images/trips/id126/trip-id1-p4.jpg", alt: "Водопад Бамбараканда" }
  ],
  description: '9 ночей, завтраки и ужины, экскурсии',
  country: 'Шри-Ланка',
  city: 'Нувара-Элия',
  duration: 9,
  price: 142800,
  stars: 4
},
{
  id: 127,
  title: 'Тур на Шри-Ланку "Сёрфинг и океан"',
  images: [
    { id: 12701, src: "/images/trips/id127/trip-id1-p1.jpg", alt: "Пляж Унаватуна" },
    { id: 12702, src: "/images/trips/id127/trip-id1-p2.jpg", alt: "Сёрфинг в Веллигама" },
    { id: 12703, src: "/images/trips/id127/trip-id1-p3.jpg", alt: "Черепашья ферма" },
    { id: 12704, src: "/images/trips/id127/trip-id1-p4.jpg", alt: "Коралловый риф" }
  ],
  description: '7 ночей, завтраки, обучение сёрфингу',
  country: 'Шри-Ланка',
  city: 'Унаватуна',
  duration: 7,
  price: 118900,
  stars: 3
},
{
  id: 128,
  title: 'Тур на Шри-Ланку "Золотой треугольник"',
  images: [
    { id: 12801, src: "/images/trips/id128/trip-id1-p1.jpg", alt: "Сигирия, Львиная скала" },
    { id: 12802, src: "/images/trips/id128/trip-id1-p2.jpg", alt: "Храм Зуба Будды в Канди" },
    { id: 12803, src: "/images/trips/id128/trip-id1-p3.jpg", alt: "Полоннарува, древний город" },
    { id: 12804, src: "/images/trips/id128/trip-id1-p4.jpg", alt: "Анурадхапура, ступа" }
  ],
  description: '11 ночей, полный пансион, все экскурсии',
  country: 'Шри-Ланка',
  city: 'Сигирия',
  duration: 11,
  price: 189500,
  stars: 5
}

];

export default trips;