{/* для фильтрации будут 
+1 country
+2 stars
+3 price разделится на дешевые и дорогие
-4 options
+5=reviews

отели в
1 Турция +
2 ОАЭ +
3 Египет +
4 Таиланд +
5 Грузия +
6 Мальдивы +
*/}



const hotels = [
  // ТУРЦИЯ
  {
    id: 1,
    title: 'Отель Sun Paradise',
    country: 'Турция',
    city: 'Анталия',
    price: 55000,
    star: 5,
    review: 128,
    description: 'Роскошный курортный отель с собственной лагуной. 7 бассейнов, аквапарк, спа-центр, 6 ресторанов. Пляж в 100 метрах.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 2,
    title: 'Отель Mediterranean Pearl',
    country: 'Турция',
    city: 'Анталия',
    price: 42000,
    star: 4,
    review: 89,
    description: 'Уютный отель для семейного отдыха. Детский клуб, зелёный парк, спа-салон. Вкусный шведский стол.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 3,
    title: 'Отель Blue Lagoon',
    country: 'Турция',
    city: 'Анталия',
    price: 38000,
    star: 4,
    review: 56,
    description: 'Отель на первой линии с видом на море. Идеально для пар, уютные номера, отличная кухня.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 4,
    title: 'Отель Istanbul View',
    country: 'Турция',
    city: 'Стамбул',
    price: 28500,
    star: 4,
    review: 234,
    description: 'Бутик-отель в историческом центре Стамбула. Вид на Босфор, завтраки на крыше, рядом Галатская башня.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 5,
    title: 'Отель Bosphorus Dream',
    country: 'Турция',
    city: 'Стамбул',
    price: 32500,
    star: 5,
    review: 178,
    description: 'Элегантный отель с панорамным видом на Босфор. Бесплатный трансфер до аэропорта, спа, ресторан авторской кухни.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 6,
    title: 'Отель Alanya Beach',
    country: 'Турция',
    city: 'Аланья',
    price: 34500,
    star: 4,
    review: 67,
    description: 'Пляжный отель с аквапарком. Анимация для взрослых и детей, отличный выбор для семейного отдыха.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 7,
    title: 'Отель Cleopatra Resort',
    country: 'Турция',
    city: 'Аланья',
    price: 39500,
    star: 5,
    review: 142,
    description: 'Роскошный курорт на знаменитом пляже Клеопатры. Номера с видом на море, 5 ресторанов, вечерние шоу.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 8,
    title: 'Отель Bodrum Marina',
    country: 'Турция',
    city: 'Бодрум',
    price: 48500,
    star: 5,
    review: 95,
    description: 'Престижный отель в яхтенной марине. Белоснежные номера, приватный пляж, ночной клуб.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 9,
    title: 'Отель Marmaris Breeze',
    country: 'Турция',
    city: 'Мармарис',
    price: 36500,
    star: 4,
    review: 78,
    description: 'Уютный отель с видом на бухту Мармариса. Тенистый сад, анимация, спа-центр.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 10,
    title: 'Отель Fethiye Bay',
    country: 'Турция',
    city: 'Фетхие',
    price: 41500,
    star: 4,
    review: 63,
    description: 'Отель в бухте Олюдениз. Идеальное место для парапланеризма и водных видов спорта.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 11,
    title: 'Отель Side Sun',
    country: 'Турция',
    city: 'Сиде',
    price: 37500,
    star: 4,
    review: 112,
    description: 'Отель с древней историей. Рядом руины античного амфитеатра, песчаный пляж, анимация.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 12,
    title: 'Отель Kemer Forest',
    country: 'Турция',
    city: 'Кемер',
    price: 32800,
    star: 3,
    review: 45,
    description: 'Эко-отель в сосновом лесу. Горный воздух, чистый пляж, отличное питание.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: false, beach: true }
  },
  {
    id: 13,
    title: 'Отель Cappadocia Cave',
    country: 'Турция',
    city: 'Каппадокия',
    price: 29800,
    star: 4,
    review: 234,
    description: 'Уникальный пещерный отель. Номера в скалах, завтрак с видом на воздушные шары.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 14,
    title: 'Отель Belek Golf',
    country: 'Турция',
    city: 'Белек',
    price: 62500,
    star: 5,
    review: 187,
    description: 'Элитный отель с полями для гольфа. Номера люкс, спа, частный пляж, 8 ресторанов.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 15,
    title: 'Отель Lara Beach',
    country: 'Турция',
    city: 'Лара',
    price: 58800,
    star: 5,
    review: 203,
    description: 'Отель класса люкс на песчаном пляже. Аквапарк, аква-зона, SPA, детский клуб.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 16,
    title: 'Отель Pamukkale Thermal',
    country: 'Турция',
    city: 'Памуккале',
    price: 18500,
    star: 3,
    review: 89,
    description: 'Термальный отель у знаменитых травертинов. Лечебные воды, бассейн с термальной водой.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 17,
    title: 'Отель Kusadasi Bay',
    country: 'Турция',
    city: 'Кушадасы',
    price: 31200,
    star: 4,
    review: 76,
    description: 'Отель с видом на Эгейское море. Рядом древний город Эфес.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 18,
    title: 'Отель Istanbul Sultanahmet',
    country: 'Турция',
    city: 'Стамбул',
    price: 26800,
    star: 4,
    review: 312,
    description: 'Отель в пешей доступности от Голубой мечети и Айя-Софии. Завтрак на крыше.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 19,
    title: 'Отель Antalya Old Town',
    country: 'Турция',
    city: 'Анталия',
    price: 22500,
    star: 3,
    review: 156,
    description: 'Отель в историческом районе Калеичи. Номера с видом на старый порт.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 20,
    title: 'Отель Green Canyon',
    country: 'Турция',
    city: 'Анталия',
    price: 35200,
    star: 4,
    review: 67,
    description: 'Отель у знаменитого Грин Каньона. Экскурсии, рыбалка, активный отдых.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: false }
  },

  // ОАЭ
  {
    id: 21,
    title: 'Отель Dubai Palace',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 105000,
    star: 5,
    review: 423,
    description: 'Роскошный 5-звездочный отель в самом сердце Дубая. Панорамный вид на город, спа-центр, закрытый пляж.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 22,
    title: 'Отель Burj View',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 125000,
    star: 5,
    review: 567,
    description: 'Отель с прямым видом на Бурдж-Халифа. Бесконечный бассейн на крыше, рестораны высокой кухни.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 23,
    title: 'Отель Palm Jumeirah',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 158000,
    star: 5,
    review: 389,
    description: 'Эксклюзивный отель на пальмовом острове. Частный пляж, виллы с бассейнами.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 24,
    title: 'Отель Desert Rose',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 48500,
    star: 4,
    review: 178,
    description: 'Отель в пустыне с сафари-турами. Традиционная арабская архитектура, верблюжьи прогулки.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 25,
    title: 'Отель Abu Dhabi Grand',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    price: 118000,
    star: 5,
    review: 312,
    description: 'Отель у знаменитой мечети Шейха Зайда. Мраморные интерьеры, частный пляж.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 26,
    title: 'Отель Yas Island',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    price: 98500,
    star: 5,
    review: 267,
    description: 'Отель на острове Яс, рядом с Ferrari World. Семейный отдых, аквапарк.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 27,
    title: 'Отель Sharjah Beach',
    country: 'ОАЭ',
    city: 'Шарджа',
    price: 42500,
    star: 4,
    review: 134,
    description: 'Семейный отель на побережье Шарджи. Песчаный пляж, детский клуб.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 28,
    title: 'Отель Fujairah Resort',
    country: 'ОАЭ',
    city: 'Фуджейра',
    price: 56800,
    star: 5,
    review: 89,
    description: 'Отель у Индийского океана с видом на горы. Дайвинг, снорклинг, спа.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 29,
    title: 'Отель Ras Al Khaimah',
    country: 'ОАЭ',
    city: 'Рас-эль-Хайма',
    price: 45200,
    star: 5,
    review: 112,
    description: 'Курортный отель с горным пейзажем. Активности: каякинг, пешие маршруты.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 30,
    title: 'Отель Dubai Creek',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 62500,
    star: 5,
    review: 245,
    description: 'Отель в историческом районе у залива Дубай. Вид на традиционные лодки-абра.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 31,
    title: 'Отель Jumeirah Beach',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 142000,
    star: 5,
    review: 489,
    description: 'Знаменитый отель в форме паруса. Роскошь высшего уровня, сервис мирового класса.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 32,
    title: 'Отель Marina View',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 78500,
    star: 4,
    review: 198,
    description: 'Отель с видом на марину и яхты. Номера-студио, отличная транспортная доступность.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 33,
    title: 'Отель Al Ain Oasis',
    country: 'ОАЭ',
    city: 'Эль-Айн',
    price: 32500,
    star: 4,
    review: 67,
    description: 'Отель в оазисе у подножия гор. Сады, термальные источники.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: false }
  },
  {
    id: 34,
    title: 'Отель Abu Dhabi Corniche',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    price: 88500,
    star: 5,
    review: 276,
    description: 'Отель на набережной Корниш. Вид на залив, прогулочная зона.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 35,
    title: 'Отель Dubai Silicon Oasis',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 38500,
    star: 3,
    review: 89,
    description: 'Бизнес-отель в современном районе. Отличный выбор для командировок.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 36,
    title: 'Отель Sharjah Heritage',
    country: 'ОАЭ',
    city: 'Шарджа',
    price: 29800,
    star: 3,
    review: 56,
    description: 'Отель в культурном районе. Рядом музеи и традиционные рынки.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 37,
    title: 'Отель Umm Al Quwain',
    country: 'ОАЭ',
    city: 'Умм-эль-Кайвайн',
    price: 26800,
    star: 3,
    review: 34,
    description: 'Спокойный отель для тихого отдыха. Идеально для рыбалки и кайтсерфинга.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 38,
    title: 'Отель Ajman Beach',
    country: 'ОАЭ',
    city: 'Аджман',
    price: 42500,
    star: 4,
    review: 78,
    description: 'Отель на первой линии с чистым пляжем. Бюджетная альтернатива Дубаю.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 39,
    title: 'Отель Dubai International',
    country: 'ОАЭ',
    city: 'Дубай',
    price: 32800,
    star: 4,
    review: 345,
    description: 'Отель рядом с аэропортом. Бесплатный трансфер, отлично для стыковок.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 40,
    title: 'Отель Emirates Palace',
    country: 'ОАЭ',
    city: 'Абу-Даби',
    price: 185000,
    star: 5,
    review: 512,
    description: 'Легендарный дворец эмиратов. Золото в интерьерах, частный пляж 1.3 км.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },

  // ЕГИПЕТ
  {
    id: 41,
    title: 'Отель Star Beach',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 65000,
    star: 4,
    review: 234,
    description: 'Отель на первой береговой линии с собственным коралловым рифом. Отличное место для дайвинга и снорклинга.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 42,
    title: 'Отель Red Sea Paradise',
    country: 'Египет',
    city: 'Хургада',
    price: 48500,
    star: 5,
    review: 312,
    description: 'Роскошный курорт с аквапарком. Большая зеленая территория, отличная анимация.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 43,
    title: 'Отель Coral Beach',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 52800,
    star: 5,
    review: 187,
    description: 'Отель с уникальным коралловым садом. Понтоны для комфортного входа в море.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 44,
    title: 'Отель Makadi Bay',
    country: 'Египет',
    city: 'Хургада',
    price: 56200,
    star: 5,
    review: 267,
    description: 'Отель в живописной бухте Макади. Песчаный пляж, дайвинг-центр.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 45,
    title: 'Отель Sahl Hasheesh',
    country: 'Египет',
    city: 'Хургада',
    price: 59800,
    star: 5,
    review: 198,
    description: 'Элитный курорт в бухте Сахл-Хашиш. Виллы с бассейнами, приватная атмосфера.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 46,
    title: 'Отель Naama Bay',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 44500,
    star: 4,
    review: 156,
    description: 'Отель в центре Наама-Бей. Рядом рестораны, клубы, магазины.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 47,
    title: 'Отель Dahab Reef',
    country: 'Египет',
    city: 'Дахаб',
    price: 28500,
    star: 3,
    review: 89,
    description: 'Бюджетный отель для любителей дайвинга и серфинга. Лагуна с рифом.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 48,
    title: 'Отель Luxor Nile',
    country: 'Египет',
    city: 'Луксор',
    price: 32500,
    star: 5,
    review: 145,
    description: 'Отель на берегу Нила с видом на Луксорский храм. Экскурсии в Долину царей.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 49,
    title: 'Отель Cairo Pyramids',
    country: 'Египет',
    city: 'Каир',
    price: 36800,
    star: 5,
    review: 423,
    description: 'Отель с панорамным видом на пирамиды Гизы. Спа, ресторан с египетской кухней.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 50,
    title: 'Отель El Gouna',
    country: 'Египет',
    city: 'Эль-Гуна',
    price: 68500,
    star: 5,
    review: 234,
    description: 'Отель в "египетской Венеции". Каналы, собственный пляж, гольф-поля.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 51,
    title: 'Отель Taba Heights',
    country: 'Египет',
    city: 'Таба',
    price: 45800,
    star: 5,
    review: 112,
    description: 'Отель у границы с Израилем. Горы, чистое море, отличный дайвинг.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 52,
    title: 'Отель Marsa Alam',
    country: 'Египет',
    city: 'Марса-Алам',
    price: 62500,
    star: 5,
    review: 178,
    description: 'Отель рядом с заповедником Вади-эль-Гамаль. Дюгони, черепахи, нетронутая природа.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 53,
    title: 'Отель Safaga Beach',
    country: 'Египет',
    city: 'Сафага',
    price: 32500,
    star: 4,
    review: 67,
    description: 'Отель для виндсерфинга и кайтсерфинга. Ветреное побережье.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 54,
    title: 'Отель Sharm Maya Bay',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 52800,
    star: 5,
    review: 203,
    description: 'Отель в заливе Майя. Бирюзовая вода, песчаный пляж, отличный сервис.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 55,
    title: 'Отель Hurghada Downtown',
    country: 'Египет',
    city: 'Хургада',
    price: 25800,
    star: 3,
    review: 112,
    description: 'Бюджетный отель в центре Хургады. Рядом порт и рыбный рынок.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 56,
    title: 'Отель Ras Mohammed',
    country: 'Египет',
    city: 'Шарм-эль-Шейх',
    price: 71800,
    star: 5,
    review: 267,
    description: 'Отель у национального парка Рас-Мохаммед. Лучшие дайв-сайты Красного моря.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 57,
    title: 'Отель Aswan Nile',
    country: 'Египет',
    city: 'Асуан',
    price: 28500,
    star: 4,
    review: 98,
    description: 'Отель на острове Элефантина. Вид на Нил, прогулки на фелуках.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 58,
    title: 'Отель Alexandria Corniche',
    country: 'Египет',
    city: 'Александрия',
    price: 19800,
    star: 3,
    review: 145,
    description: 'Отель на набережной Александрии. Средиземное море, исторические достопримечательности.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 59,
    title: 'Отель Soma Bay',
    country: 'Египет',
    city: 'Сома-Бей',
    price: 69500,
    star: 5,
    review: 189,
    description: 'Курортный отель с полями для гольфа. Ветровая лагуна для кайтсерфинга.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 60,
    title: 'Отель Nuweiba Pearl',
    country: 'Египет',
    city: 'Нувейба',
    price: 24800,
    star: 3,
    review: 56,
    description: 'Отель на Синайском полуострове. Уединенный пляж, горный пейзаж.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },

  // ТАИЛАНД
  {
    id: 61,
    title: 'Отель Thai Bay',
    country: 'Таиланд',
    city: 'Пхукет',
    price: 110000,
    star: 4,
    review: 245,
    description: 'Уютный отель в традиционном тайском стиле. Расположен в тихом районе, рядом с ночной жизнью Патонга.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 62,
    title: 'Отель Bangkok Royal',
    country: 'Таиланд',
    city: 'Бангкок',
    price: 48500,
    star: 5,
    review: 567,
    description: 'Роскошный отель в центре Бангкока. Вид на город, бассейн на крыше.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 63,
    title: 'Отель Koh Samui Paradise',
    country: 'Таиланд',
    city: 'Самуи',
    price: 98500,
    star: 5,
    review: 312,
    description: 'Виллы на берегу океана. Частный пляж, спа-центр, отличная кухня.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 64,
    title: 'Отель Pattaya Beach',
    country: 'Таиланд',
    city: 'Паттайя',
    price: 42500,
    star: 4,
    review: 234,
    description: 'Отель в центре Паттайи. Рядом Walking Street, пляж в 2 минутах.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 65,
    title: 'Отель Krabi Rock',
    country: 'Таиланд',
    city: 'Краби',
    price: 62800,
    star: 4,
    review: 178,
    description: 'Отель у знаменитых скал. Экскурсии к островам, скалолазание.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 66,
    title: 'Отель Chiang Mai Garden',
    country: 'Таиланд',
    city: 'Чиангмай',
    price: 28500,
    star: 4,
    review: 345,
    description: 'Отель в окружении тропического сада. Близко к храмам и ночным рынкам.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 67,
    title: 'Отель Koh Phi Phi',
    country: 'Таиланд',
    city: 'Пхи-Пхи',
    price: 78500,
    star: 4,
    review: 289,
    description: 'Отель на знаменитом острове. Белый песок, бирюзовая вода, снорклинг.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 68,
    title: 'Отель Hua Hin',
    country: 'Таиланд',
    city: 'Хуахин',
    price: 35800,
    star: 4,
    review: 156,
    description: 'Курортный отель на побережье Сиамского залива. Спокойный семейный отдых.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 69,
    title: 'Отель Phuket Old Town',
    country: 'Таиланд',
    city: 'Пхукет',
    price: 32500,
    star: 3,
    review: 189,
    description: 'Отель в китайско-португальском стиле. Близко к достопримечательностям.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 70,
    title: 'Отель Koh Lanta',
    country: 'Таиланд',
    city: 'Ланта',
    price: 45200,
    star: 4,
    review: 134,
    description: 'Отель на тихом острове. Идеально для отдыха с детьми.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 71,
    title: 'Отель Railay Beach',
    country: 'Таиланд',
    city: 'Краби',
    price: 68800,
    star: 5,
    review: 267,
    description: 'Отель на пляже Рейли, доступном только по воде. Уникальная природа.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 72,
    title: 'Отель Koh Tao',
    country: 'Таиланд',
    city: 'Тао',
    price: 32500,
    star: 3,
    review: 98,
    description: 'Отель для дайверов. Школы дайвинга, чистое море, черепахи.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 73,
    title: 'Отель Bangkok Riverside',
    country: 'Таиланд',
    city: 'Бангкок',
    price: 62500,
    star: 5,
    review: 423,
    description: 'Отель на реке Чао-Прайя. Бесплатный водный трансфер, роскошные номера.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: false }
  },
  {
    id: 74,
    title: 'Отель Koh Phangan',
    country: 'Таиланд',
    city: 'Пханган',
    price: 29800,
    star: 3,
    review: 167,
    description: 'Отель для молодежи. Рядом Full Moon Party, отличная атмосфера.',
    options: { wifi: true, parking: false, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 75,
    title: 'Отель Chiang Rai',
    country: 'Таиланд',
    city: 'Чианграй',
    price: 21500,
    star: 3,
    review: 112,
    description: 'Отель у Белого храма. Спокойный город на севере Таиланда.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 76,
    title: 'Отель Phuket Kata',
    country: 'Таиланд',
    city: 'Пхукет',
    price: 52500,
    star: 4,
    review: 245,
    description: 'Отель на пляже Ката. Отличные волны для серфинга, семейный отдых.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 77,
    title: 'Отель Koh Chang',
    country: 'Таиланд',
    city: 'Чанг',
    price: 35800,
    star: 4,
    review: 156,
    description: 'Отель на острове Слонов. Джунгли, водопады, уединенные пляжи.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 78,
    title: 'Отель Pattaya Jomtien',
    country: 'Таиланд',
    city: 'Паттайя',
    price: 28500,
    star: 3,
    review: 134,
    description: 'Отель на спокойном пляже Джомтьен. Близко к аквапарку Ramayana.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: false, beach: true }
  },
  {
    id: 79,
    title: 'Отель Koh Samui Chaweng',
    country: 'Таиланд',
    city: 'Самуи',
    price: 78500,
    star: 5,
    review: 298,
    description: 'Отель на главном пляже Самуи. Ночная жизнь, рестораны, шопинг.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 80,
    title: 'Отель Ayutthaya Heritage',
    country: 'Таиланд',
    city: 'Аюттхая',
    price: 18500,
    star: 3,
    review: 89,
    description: 'Отель в историческом городе. Рядом древние храмы и руины.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },

  // ГРУЗИЯ
  {
    id: 81,
    title: 'Отель Tbilisi Old Town',
    country: 'Грузия',
    city: 'Тбилиси',
    price: 45000,
    star: 5,
    review: 456,
    description: 'Бутик-отель с уникальным дизайном в историческом центре Тбилиси. Вид на старый город и Куру.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 82,
    title: 'Отель Batumi Sea',
    country: 'Грузия',
    city: 'Батуми',
    price: 38500,
    star: 4,
    review: 289,
    description: 'Отель на набережной Батуми. Вид на Черное море, рядом батумский бульвар.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 83,
    title: 'Отель Kazbegi View',
    country: 'Грузия',
    city: 'Казбеги',
    price: 32800,
    star: 4,
    review: 345,
    description: 'Отель с панорамным видом на гору Казбек и церковь Гергети. Уют, домашняя кухня.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 84,
    title: 'Отель Kutaisi Garden',
    country: 'Грузия',
    city: 'Кутаиси',
    price: 18500,
    star: 3,
    review: 156,
    description: 'Уютный отель в центре Кутаиси. Рядом собор Баграта, зеленый сад.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 85,
    title: 'Отель Sighnaghi Love',
    country: 'Грузия',
    city: 'Сигнахи',
    price: 22500,
    star: 4,
    review: 234,
    description: 'Отель в городе любви. Вид на Алазанскую долину, винные туры.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 86,
    title: 'Отель Mestia Mountain',
    country: 'Грузия',
    city: 'Местиа',
    price: 19800,
    star: 3,
    review: 178,
    description: 'Отель в Сванетии. Вид на башни, треккинг к ледникам.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 87,
    title: 'Отель Borjomi Spa',
    country: 'Грузия',
    city: 'Боржоми',
    price: 26800,
    star: 4,
    review: 189,
    description: 'Бальнеологический отель у парка Боржоми. Минеральные ванны, лечебные процедуры.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: false }
  },
  {
    id: 88,
    title: 'Отель Kakheti Wine',
    country: 'Грузия',
    city: 'Кахетия',
    price: 21500,
    star: 4,
    review: 267,
    description: 'Винный отель в центре винодельческого региона. Дегустации, экскурсии по винодельням.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 89,
    title: 'Отель Ushguli Towers',
    country: 'Грузия',
    city: 'Ушгули',
    price: 15800,
    star: 3,
    review: 112,
    description: 'Отель в высокогорном селе. Сванские башни, уникальная природа.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 90,
    title: 'Отель Gagra Beach',
    country: 'Грузия',
    city: 'Гагра',
    price: 14800,
    star: 3,
    review: 89,
    description: 'Отель в Абхазии. Пляж, парк, старая колоннада.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: true, spa: false, beach: true }
  },
  {
    id: 91,
    title: 'Отель Tbilisi Mtatsminda',
    country: 'Грузия',
    city: 'Тбилиси',
    price: 38800,
    star: 4,
    review: 298,
    description: 'Отель у подножия горы Мтацминда. Панорамный вид, канатная дорога рядом.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 92,
    title: 'Отель Batumi Green',
    country: 'Грузия',
    city: 'Батуми',
    price: 29800,
    star: 4,
    review: 156,
    description: 'Отель в ботаническом саду Батуми. Экологичный отдых, горы и море.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 93,
    title: 'Отель Vardzia Cave',
    country: 'Грузия',
    city: 'Вардзия',
    price: 12800,
    star: 3,
    review: 78,
    description: 'Отель у пещерного города. История, природа, минеральные источники.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 94,
    title: 'Отель Bakuriani Snow',
    country: 'Грузия',
    city: 'Бакуриани',
    price: 22500,
    star: 4,
    review: 134,
    description: 'Горнолыжный отель. Подъемники, аренда снаряжения, спа.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: true, spa: true, beach: false }
  },
  {
    id: 95,
    title: 'Отель Telavi Terrace',
    country: 'Грузия',
    city: 'Телави',
    price: 19800,
    star: 3,
    review: 98,
    description: 'Отель с террасой и видом на Алазанскую долину. Винные погреба.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: false, beach: false }
  },
  {
    id: 96,
    title: 'Отель Stepantsminda',
    country: 'Грузия',
    city: 'Степанцминда',
    price: 25800,
    star: 4,
    review: 223,
    description: 'Отель с видом на Казбек. Треккинг к Гергети, традиционная кухня.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 97,
    title: 'Отель Gonio Fortress',
    country: 'Грузия',
    city: 'Гонио',
    price: 26500,
    star: 4,
    review: 112,
    description: 'Отель у древней крепости. Близко к пляжу, исторические экскурсии.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 98,
    title: 'Отель Tbilisi Rustaveli',
    country: 'Грузия',
    city: 'Тбилиси',
    price: 35800,
    star: 4,
    review: 267,
    description: 'Отель на главном проспекте. Близко к оперному театру, музеям.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 99,
    title: 'Отель Kvareli Lake',
    country: 'Грузия',
    city: 'Кварели',
    price: 23800,
    star: 4,
    review: 134,
    description: 'Отель у озера в Кахетии. Рыбалка, винные туры, спа.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: false }
  },
  {
    id: 100,
    title: 'Отель Kobuleti Beach',
    country: 'Грузия',
    city: 'Кобулети',
    price: 18500,
    star: 3,
    review: 98,
    description: 'Отель на пляже Кобулети. Бюджетный отдых на Черном море.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: true, spa: false, beach: true }
  },

  // МАЛЬДИВЫ
  {
    id: 101,
    title: 'Отель Maldives Paradise',
    country: 'Мальдивы',
    city: 'Мале',
    price: 250000,
    star: 5,
    review: 412,
    description: 'Роскошные виллы на воде с частным бассейном и выходом к океану. Идеальное место для отдыха.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 102,
    title: 'Отель North Male Atoll',
    country: 'Мальдивы',
    city: 'Северный Мале',
    price: 285000,
    star: 5,
    review: 378,
    description: 'Отель с аква-виллами и домом для дайвинга. Риф в 50 метрах от берега.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 103,
    title: 'Отель South Ari',
    country: 'Мальдивы',
    city: 'Южный Ари',
    price: 268000,
    star: 5,
    review: 345,
    description: 'Отель в атолле Южный Ари, известный китовыми акулами. Лучший дайвинг на Мальдивах.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 104,
    title: 'Отель Baa Atoll',
    country: 'Мальдивы',
    city: 'Баа',
    price: 312000,
    star: 5,
    review: 423,
    description: 'Отель в биосферном заповеднике ЮНЕСКО. Манты, черепахи, нетронутая природа.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 105,
    title: 'Отель Luxury Maldives',
    country: 'Мальдивы',
    city: 'Мале',
    price: 398000,
    star: 5,
    review: 567,
    description: 'Ультра-роскошный курорт. Виллы с горничной 24/7, персональный шеф-повар.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 106,
    title: 'Отель Honeymoon Island',
    country: 'Мальдивы',
    city: 'Мале',
    price: 235000,
    star: 5,
    review: 289,
    description: 'Отель для молодоженов. Романтическая атмосфера, ужины на пляже.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 107,
    title: 'Отель Diving Paradise',
    country: 'Мальдивы',
    city: 'Северный Мале',
    price: 195000,
    star: 4,
    review: 234,
    description: 'Отель для дайверов. Сертифицированный дайв-центр, ночные погружения.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 108,
    title: 'Отель Surf Point',
    country: 'Мальдивы',
    city: 'Мале',
    price: 178000,
    star: 4,
    review: 198,
    description: 'Отель для серферов. Лучшие волны на Мальдивах, школа серфинга.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 109,
    title: 'Отель Family Maldives',
    country: 'Мальдивы',
    city: 'Баа',
    price: 168000,
    star: 4,
    review: 312,
    description: 'Семейный отель с детским клубом и анимацией. Безопасная лагуна.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 110,
    title: 'Отель Eco Maldives',
    country: 'Мальдивы',
    city: 'Южный Ари',
    price: 145000,
    star: 4,
    review: 178,
    description: 'Эко-отель с солнечными батареями. Сохранение природы, органическая кухня.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 111,
    title: 'Отель Private Island',
    country: 'Мальдивы',
    city: 'Мале',
    price: 485000,
    star: 5,
    review: 89,
    description: 'Приватный остров. Полная изоляция, персонал 5 на 1 гостя.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 112,
    title: 'Отель Sunset Villa',
    country: 'Мальдивы',
    city: 'Северный Мале',
    price: 225000,
    star: 5,
    review: 267,
    description: 'Виллы с видом на закат. Частный пляж, спа-центр.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 113,
    title: 'Отель Snorkeling Paradise',
    country: 'Мальдивы',
    city: 'Баа',
    price: 185000,
    star: 4,
    review: 345,
    description: 'Отель с самым красивым рифом. Снорклинг прямо с пляжа.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 114,
    title: 'Отель Wellness Maldives',
    country: 'Мальдивы',
    city: 'Южный Ари',
    price: 198000,
    star: 5,
    review: 223,
    description: 'Спа-курорт. Аюрведа, йога, детокс-программы.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 115,
    title: 'Отель Budget Maldives',
    country: 'Мальдивы',
    city: 'Мале',
    price: 85000,
    star: 3,
    review: 156,
    description: 'Бюджетный отель на местном острове. Традиционная культура, экскурсии.',
    options: { wifi: true, parking: false, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 116,
    title: 'Отель Water Bungalow',
    country: 'Мальдивы',
    city: 'Северный Мале',
    price: 278000,
    star: 5,
    review: 389,
    description: 'Классические водные бунгало. Стеклянный пол, прямой спуск в океан.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 117,
    title: 'Отель Beach Bungalow',
    country: 'Мальдивы',
    city: 'Баа',
    price: 158000,
    star: 4,
    review: 234,
    description: 'Пляжные бунгало в тени пальм. Уютный отдых на первой линии.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: true, spa: true, beach: true }
  },
  {
    id: 118,
    title: 'Отель Maldives Fishing',
    country: 'Мальдивы',
    city: 'Мале',
    price: 125000,
    star: 3,
    review: 98,
    description: 'Отель для рыбалки. Троллинг, ночная рыбалка, барбекю на пляже.',
    options: { wifi: true, parking: true, pool: false, breakfast: true, restaurant: true, playground: false, spa: false, beach: true }
  },
  {
    id: 119,
    title: 'Отель Honeymoon Bungalow',
    country: 'Мальдивы',
    city: 'Южный Ари',
    price: 245000,
    star: 5,
    review: 312,
    description: 'Романтические виллы только для пар. Ужины при свечах, спа на двоих.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  },
  {
    id: 120,
    title: 'Отель Maldives Dive Resort',
    country: 'Мальдивы',
    city: 'Северный Мале',
    price: 205000,
    star: 5,
    review: 267,
    description: 'Дайв-курорт с сертифицированными инструкторами. Погружения к китовым акулам.',
    options: { wifi: true, parking: true, pool: true, breakfast: true, restaurant: true, playground: false, spa: true, beach: true }
  }
];

export default hotels;