import { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ images, mainImage, title }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Если нет главного изображения, берём первое из массива
  const mainImg = mainImage || (images?.[0]?.src);
  const mainAlt = title || 'Главное изображение';
  
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  // Закрытие по Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  
  return (
    <div className="image-gallery">
      {/* Главная большая картинка */}
      <div className="image-gallery__main">
        <img 
          src={mainImg} 
          alt={mainAlt}
          className="image-gallery__main-img"
        />
      </div>
      
      {/* Сетка маленьких картинок */}
      {images && images.length > 0 && (
        <div className="image-gallery__grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="image-gallery__item"
              onClick={() => handleImageClick(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt || `Фото ${index + 1}`}
                className="image-gallery__img"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Модальное окно */}
      {selectedImage && (
        <div 
          className="image-gallery__modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="image-gallery__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="image-gallery__modal-img"
            />
            <button 
              className="image-gallery__modal-close"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;