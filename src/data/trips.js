// Данные туров: country, duration, price — для фильтрации на странице /trips

const trips = [
  {
    id: 1,
    title: 'Тур в Турцию 1',
    description: 'Отдых в Анталии 7 ночей',
    country:'Турция',
    city: 'Анталия',
    duration: 7,
    price: 50000
  },
  {  
    id: 2,
    title: 'Тур в Турцию 2',
    description: 'Кемер 14 ночей все включено',
    country:'Турция',
    city: 'Кемер',
    duration: 14,
    price: 85000
  },
  {  
    id: 3,
    title: 'Тур в Турцию 3',
    description: 'Белек 21 ночь',
    country:'Турция',
    city: 'Белек',
    duration: 21,
    price: 120000
  },

  
  {
    id: 4,
    title: 'Тур в ОАЭ 1',
    description: 'Отдых в Дубае 10 ночей',
    country:'ОАЭ',
    city: 'Дубай',
    duration: 10,
    price: 120000
  }, 
  {
    id: 5,
    title: 'Тур в ОАЭ 2',
    description: 'Абу-Даби, 30 ночей, люкс',
    country:'ОАЭ',
    city: 'Абу-Даби',
    duration: 30,
    price: 135000
  },
  
  {
    id: 6,
    title: 'Тур в Египет',
    description: 'Шарм-эль-Шейх, 50 ночей, все включено',
    country:'Египет',
    duration: 50,
    price: 78000
  },
  {
    id: 7,
    title: 'Тур в Таиланд',
    description: 'Пхукет, 4 ночи',
    country:'Таиланд',
    duration: 4,
    price: 98000
  },
  { 
    id: 8,
    title: 'Тур в Грузию',
    description: 'Тбилиси, 7 ночей',
    country:'Грузия',
    duration: 7,
    price: 63000
  },
  {
    id: 9,
    title: 'Тур на Мальдивы',
    description: 'Райский отдых в океане, 24 ночи',
    country:'Мальдивы',
    duration: 24,
    price: 231000
  }
];

export default trips;