// пока только для первого отеля Sun Paradise



export const rooms = [
  {
    id: 101,
    hotelId: 1,  // ← привязка к отелю Sun Paradise
    title: 'Стандарт',
    size: 20,                           
    roomType: 'standard',             
    pricePerNight: 5500,
    capacity: 2,
    images: [
      { id: 10101, src: "/images/rooms/id1/standard/standard-1.jpg", alt: "Стандартный номер" },
      { id: 10102, src: "/images/rooms/id1/standard/standard-2.jpg", alt: "Стандартный номер вид на коридор" },
      { id: 10103, src: "/images/rooms/id1/standard/standard-3.jpg", alt: "Стандартный номер вид на кровать" },
      { id: 10104, src: "/images/rooms/id1/standard/standard-4.jpg", alt: "Стандартный номер вид в ванной" }
    ],
    options: {
    largebed: true,
    shower: true,
    wifi: true,
    microwave: true,
    iron: true,
    tv: true,
    conditioner: true,
    bathroom: false,
    onebed: false, 
    fen: false},
    description: 'Уютный номер с современной мебелью. Идеально для пары или одного путешественника.'
  },
  {
    id: 102,
    hotelId: 1,
    title: 'Улучшенный',
    size: 35,                         
    roomType: 'improved',
    pricePerNight: 7500,
    capacity: 3,
    images: [
      { id: 10201, src: "/images/rooms/id1/improved/improved-1.jpg", alt: "Улучшенный номер днем" },
      { id: 10202, src: "/images/rooms/id1/improved/improved-2.jpg", alt: "Улучшенный номер вечером" },
      { id: 10203, src: "/images/rooms/id1/improved/improved-3.jpg", alt: "Улучшенный номер вид в ванной" },
    ],
    options: {
    largebed: true,
    onebed: true, 
    shower: true,
    wifi: true,
    microwave: true,
    iron: true,
    tv: true,
    conditioner: true,
    bathroom: false,
    fen: true},
    description: 'Просторная студия с мини-кухней. Отлично подходит для небольшой семьи.'
  },
  {
    id: 103,
    hotelId: 1,
    title: 'Люкс',
    size: 50,                    
    roomType: 'lux',
    pricePerNight: 12000,
    capacity: 4,
    images: [
      { id: 10301, src: "/images/rooms/id1/lux/lux-1.jpg", alt: "Люкс номер" },
      { id: 10302, src: "/images/rooms/id1/lux/lux-2.jpg", alt: "Люкс номер вид на стол и шкаф" },
      { id: 10303, src: "/images/rooms/id1/lux/lux-3.jpg", alt: "Люкс номер ванная рядом с кроватью" },
      { id: 10403, src: "/images/rooms/id1/lux/lux-4.jpg", alt: "Люкс номер душевая" },
   
    ],
    options: {
    largebed: true,
    largebed: true,
    bathroom: false,
    conditioner: true,
    fen: true,
    onebed: false, 
    shower: false,
    wifi: true,
    microwave: true,
    iron: true,
    tv: true},
    description: 'Роскошный номер с панорамным видом, джакузи и отдельной гостиной.'
  }
];

export default rooms;