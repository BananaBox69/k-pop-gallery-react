import React, { useState } from 'react';
import './MemberSection.css';
import CarouselCard from './CarouselCard'; // 1. Import our new component

const MemberSection = (props) => {
  const { groupName, memberName, memberColor, groupColor, quote, signatureUrl, cards } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const angle = cards.length > 0 ? 360 / cards.length : 0;
  const activeCard = cards[currentIndex] || {};

  const sectionStyle = {
    '--member-color': memberColor,
    '--group-color': groupColor,
  };

  const getCardPrice = (card) => {
    if (!card.price) return '';
    return `€${card.price.toFixed(2)}`;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const carouselStyle = {
    transform: `rotateY(${-(currentIndex * angle)}deg)`
  };

  return (
    <section className="showcase-section member-section-container" style={sectionStyle}>
      <div className="room-backdrop">
        <div className="room-backdrop-wall"></div>
      </div>

      {quote && <div className="member-quote">{quote}</div>}

      <div className="member-section">
        <div className="card-details-panel">
          <p className="card-id-text">{activeCard.id || 'N/A'}</p>
          <h2 className="member-name">{memberName}</h2>
          <p className="group-name">{groupName}</p>
          <p className="album-name">{activeCard.album || 'No cards available'}</p>
          <p className="version-name">{activeCard.version || ''}</p>
          <p className="price-tag">{getCardPrice(activeCard)}</p>
          <div className="original-price-container"></div>
          <button className="add-to-basket-main-btn" disabled={!activeCard.id}>
            Add to Basket
          </button>
        </div>

        <div className="carousel-container">
          <div className="carousel-arrow left" onClick={handlePrev}>&#9664;</div>
          <div className="carousel-arrow right" onClick={handleNext}>&#9654;</div>

          <div className="carousel" style={carouselStyle}>
            {/* 2. Use the new CarouselCard component here */}
            {cards.map((card, index) => {
              const cardStyle = {
                transform: `rotateY(${index * angle}deg) translateZ(400px)`
              };
              return (
                <CarouselCard
                  key={card.id}
                  card={card}
                  style={cardStyle}
                  isActive={index === currentIndex}
                />
              );
            })}
          </div>
        </div>
      </div>

      {signatureUrl && (
        <div
          className="member-signature"
          style={{
            backgroundColor: 'var(--member-color)',
            maskImage: `url(${signatureUrl})`,
            WebkitMaskImage: `url(${signatureUrl})`,
          }}
        ></div>
      )}
    </section>
  );
};

export default MemberSection;