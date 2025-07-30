import React, { useState } from 'react';
import './CarouselCard.css';

const CarouselCard = (props) => {
  const { card, style, isActive } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (isActive) {
      setIsFlipped(!isFlipped);
    }
  };

  // --- NEW: This function runs if an image fails to load ---
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loops if the fallback also fails
    e.target.src = 'https://placehold.co/220x341/121212/ff4757?text=Image+Missing';
  };

  const cardClasses = `
    carousel-card
    ${isActive ? 'is-active' : ''}
    ${isFlipped ? 'is-flipped' : ''}
  `;

  return (
    <div className={cardClasses} style={style}>
      <div className="carousel-card-inner">
        {/* Front Face of the Card */}
        <div className="carousel-card-face carousel-card-front">
          {/* Added onError handler */}
          <img src={card.image} alt={`${card.id}`} onError={handleImageError} />
          <div className="card-id-overlay">{card.id}</div>
          <div className="card-flip-overlay" title="Flip card" onClick={handleFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
          </div>
        </div>

        {/* Back Face of the Card */}
        <div className="carousel-card-face carousel-card-back">
          {/* Added onError handler */}
          <img src={card.backImage} alt={`${card.id} Back`} onError={handleImageError} />
          <div className="card-flip-overlay" title="Flip card" onClick={handleFlip}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;