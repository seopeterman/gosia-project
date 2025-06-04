import React from 'react';
import { Link } from 'react-router-dom';

function TextBlock({ title, text, ctaText, ctaLink, backgroundColor = '#00bf63', textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const textStyle = textColor ? { color: textColor } : {};

  return (
    <div style={wrapperStyle}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            {title && <h2 className="mb-4" style={textStyle}>{title}</h2>}
            {text && <p className="lead" style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />}
            {ctaText && ctaLink && (
              <Link to={ctaLink} className="btn btn-custom mt-4">
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
