import { useState } from 'react';

function usePagination(totalItems, itemsPerView = 5) {
  const [startIndex, setStartIndex] = useState(0);
  const lastStartIndex = Math.max(0, totalItems - itemsPerView);

  //клик на ❯
  function handleNext() {
    setStartIndex(prev => Math.min(prev + 1, lastStartIndex));
  }

  //клик на ❮
  function handlePrev() {
    setStartIndex(prev => Math.max(prev - 1, 0));
  }

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= lastStartIndex;

  const visibleItems = (items) => items.slice(startIndex, startIndex + itemsPerView);

  return {
    startIndex,
    handlePrev,
    handleNext,
    isPrevDisabled,
    isNextDisabled,
    visibleItems,
  };
}

export default usePagination;