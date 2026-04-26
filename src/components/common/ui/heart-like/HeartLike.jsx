import { useState } from 'react';
import HeartLiked from '@assets/icons/HeartLiked.svg?react';
import HeartNoAction from '@assets/icons/HeartNoAction.svg?react';
import './HeartLike.css';

function HeartLike({ isLiked: isLikedProp, onToggle }) {
  // Состояние для сердечка
  const [isLiked, setIsLiked] = useState(isLikedProp || false);



  // Функция для переключения состояния сердечка при клике
  const handleClick = () => {
    // TODO: позже добавим проверку на авторизацию
 
    const newState = !isLiked;
    setIsLiked(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button 
      className="heart__like" onClick={handleClick}>
      {isLiked ? <HeartLiked /> : <HeartNoAction />}
    </button>
  );
}

export default HeartLike;