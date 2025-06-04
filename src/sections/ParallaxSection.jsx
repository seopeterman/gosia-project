import React from 'react';
import './ParallaxSection.css';

function ParallaxSection({ imageSrc, imageAlt, text }) {
  const style = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className="parallax d-flex align-items-center" style={style} role="img" aria-label={imageAlt}>
      <div className="container text-white text-center">
        <h2 dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default ParallaxSection;
