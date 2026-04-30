import { useState, useEffect } from 'react';

function useCardsPerRow() {
  const [cardsPerRow, setCardsPerRow] = useState(1);

  useEffect(() => {
    function getCardsPerRow() {
      // Читаем CSS переменную из корня ( :root)
      const root = getComputedStyle(document.documentElement);
      const value = root.getPropertyValue('--cards-per-row').trim();
      const number = parseInt(value, 10);
      
      if (!isNaN(number) && number > 0) {
        setCardsPerRow(number);
      } else {
        setCardsPerRow(1); // Зн по умолчанию
      }
    }

    // Получаем значение сразу при загрузке
    getCardsPerRow();

    // Следим за изменением размера окна (когда меняются медиазапросы)
    const handleResize = () => {
      getCardsPerRow();
    };

    window.addEventListener('resize', handleResize);
    
    // Очищаем слушатель при размонтировании
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return cardsPerRow;
}

export default useCardsPerRow;