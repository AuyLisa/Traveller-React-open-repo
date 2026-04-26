import { forest } from '../../../../assets/hotel-icons';
import './HotelAmenities.css';
import * as Icons from '@assets/hotel-icons';

const amenitiesConfig = {
  bar: { icon: Icons.bar, label: "Бар" },
  beach: { icon: Icons.beach, label: "Пляж" },
  breakfast: { icon: Icons.breakfast, label: "Завтрак" },     // ← добавить!
  conditioner: { icon: Icons.conditioner, label: "Кондиционер" },
  restaurant: { icon: Icons.restaurant, label: "Ресторан" },
  diving: { icon: Icons.diving, label: "Дайвинг" },
  fastfood: { icon: Icons.fastfood, label: "Фастфуд" },
  foodtoroom: { icon: Icons.foodtoroom, label: "Еда в номер" },
  playground: { icon: Icons.playground, label: "Детская площадка" },
  microwave: { icon: Icons.microwave, label: "Микроволновка" },
  mountain: { icon: Icons.mountain, label: "Горы рядом" },
  parking: { icon: Icons.parking, label: "Парковка" },
  pet: { icon: Icons.pet, label: "Можно с питомцами" },
  pool: { icon: Icons.pool, label: "Бассейн" },
  spa: { icon: Icons.spa, label: "Спа" },
  tv: { icon: Icons.tv, label: "Телевизор" },
  wifi: { icon: Icons.wifi, label: "Wi-Fi" },
  shop: { icon: Icons.shop, label: "ТЦ рядом" },
  forest: { icon: Icons.forest, label: "рядом с лесом" },
  gym: { icon: Icons.gym, label: "спортзал" },
  recycle: { icon: Icons.recycle, label: "переработка мусора"}
};

function HotelAmenities({ options }) {
  //фильтруем только те опции, которые true
  const activeAmenities = Object.entries(options || {})
    .filter(([_, value]) => value === true)
    .map(([key]) => key);

  if (activeAmenities.length === 0) return null;

  return (
    <div className="hotel-amenities">
      {activeAmenities.map((amenity) => {
        const IconComponent = amenitiesConfig[amenity]?.icon;
        return (
          <div key={amenity} className="hotel-amenities__item">
            {IconComponent && <IconComponent className="hotel-amenities__icon" />}
            <span className="hotel-amenities__label">
              {amenitiesConfig[amenity]?.label || amenity}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default HotelAmenities;