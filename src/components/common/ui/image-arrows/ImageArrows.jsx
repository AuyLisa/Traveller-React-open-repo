import './ImageArrows.css';

function ImageArrows({ onPrev, onNext, isPrevDisabled, isNextDisabled }) {
  return (
    <div className="hotelcard__image-arrows">
      <button 
        className="hotelcard__image-arrow hotelcard__image-arrow--prev"
        onClick={onPrev}
        disabled={isPrevDisabled}
      >
        ❮
      </button>
      <button 
        className="hotelcard__image-arrow hotelcard__image-arrow--next"
        onClick={onNext}
        disabled={isNextDisabled}
      >
        ❯
      </button>
    </div>
  );
}

export default ImageArrows;