import React from 'react';
import { Link } from 'react-router-dom';

function TextBlock({ title, text, ctaText, ctaLink, backgroundColor, textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const wrapperClass = !backgroundColor ? 'bg-dark-gosia' : '';
  const textStyle = textColor ? { color: textColor } : {};

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            {title && <h2 className="mb-4" style={textStyle}>{title}</h2>}
            {text && <p className="lead" style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />}
            {ctaText && ctaLink && (
              <Link to={ctaLink} className={`btn ${backgroundColor ? 'btn-custom-second' : 'btn-custom'} mt-3`}>
                <span className='z-1 position-relative'>{ctaText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
