import './Arrows.css';

function Arrows({ onPrev, onNext, isPrevDisabled, isNextDisabled }) {
  return (
    <div className="home__arrows">
      <button 
        onClick={onPrev} 
        disabled={isPrevDisabled}
        className="arrow"
      >
        ❮
      </button>
      <button 
        onClick={onNext} 
        disabled={isNextDisabled}
        className="arrow"
      >
        ❯
      </button>
    </div>
  );
}

export default Arrows;