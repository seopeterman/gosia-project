import React from 'react';

function FancyImage({ imageSrc, imageAlt }) {
  return (
    <div className="fancy-img-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="fancy-img"
        style={{
          borderRadius: '50%',
          border: '4px solid rgb(37, 117, 252)',
          maxHeight: '50vh',
          objectFit: 'contain',
          display: 'block',
          position: 'relative',
          zIndex: 2,
        }}
      />
      <style>{`
        .fancy-img-wrapper::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(37, 117, 252, 0.5), transparent 70%);
          filter: blur(20px);
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default FancyImage;
