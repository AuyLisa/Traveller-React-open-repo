import './RoomAmenities.css';
import * as Icons from '@assets/room-icons';

const amenitiesConfig = {
  conditioner: { icon: Icons.conditioner, label: "Кондиционер" },
  microwave: { icon: Icons.microwave, label: "Микроволновка" },
  tv: { icon: Icons.tv, label: "Телевизор" },
  wifi: { icon: Icons.wifi, label: "Wi-Fi" },
  shower: { icon: Icons.shower, label: "Душ" },
  iron: { icon: Icons.iron, label: "Утюг" },
  largebed: { icon: Icons.largebed, label: "Двуспальная кровать" },
  onebed: { icon: Icons.onebed, label: "Односпальная кровать" },
  fen: { icon: Icons.fen, label: "Фен" },
  bathroom: { icon: Icons.bathroom, label: "Ванная" }
};

function RoomAmenities({ options }) {
  //фильтруем только те опции, которые true
  const activeAmenities = Object.entries(options || {})
    .filter(([_, value]) => value === true)
    .map(([key]) => key);

  if (activeAmenities.length === 0) return null;

  return (
    <div className="room-amenities">
      {activeAmenities.map((amenity) => {
        const IconComponent = amenitiesConfig[amenity]?.icon;
        return (
          <div key={amenity} className="room-amenities__item">
            {IconComponent && <IconComponent className="room-amenities__icon" />}
            <span className="room-amenities__label">
              {amenitiesConfig[amenity]?.label || amenity}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default RoomAmenities;