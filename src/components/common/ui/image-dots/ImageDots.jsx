import './ImageDots.css';

function ImageDots({ total, current, onDotClick }) {
  if (total <= 1) return null;

  return (
    <div className="image-dots">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          className={`image-dots__dot ${index === current ? 'image-dots__dot--active' : ''}`}
          onClick={() => onDotClick(index)}
          aria-label={`Перейти к фото ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default ImageDots;