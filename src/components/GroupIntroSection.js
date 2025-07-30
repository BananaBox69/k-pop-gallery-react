import React from 'react';
import './GroupIntroSection.css'; // Import the CSS for this component

// This is a React component. It's a function that returns HTML-like code called JSX.
// It takes an object called "props" as an argument, which contains all the data we pass to it.
const GroupIntroSection = (props) => {
  const { groupName, subtitle, bannerUrl, logoUrl, glowColor } = props;

  // This object is used to set dynamic CSS variables for the glow effect.
  const sectionStyle = {
    '--hero-glow-color': `rgba(${glowColor}, 0.5)`
  };

  return (
    // We use "className" instead of "class" in JSX.
    <section
      id={`group-${groupName.toLowerCase().replace(/\s/g, '-')}`}
      className="showcase-section group-intro"
      style={sectionStyle} // Apply the dynamic style here
    >
      {/* We only render the banner if a bannerUrl is provided */}
      {bannerUrl && <div className="group-banner" style={{ backgroundImage: `url(${bannerUrl})` }}></div>}

      <div className="title-container">
        <h2 className="hero-title font-display">{groupName}</h2>
        <p className="group-subtitle">{subtitle}</p>
      </div>

      {/* We only render the logo if a logoUrl is provided */}
      {logoUrl && <img src={logoUrl} alt={`${groupName} Logo`} className="group-logo" />}
    </section>
  );
};

export default GroupIntroSection; // This makes the component available to other files