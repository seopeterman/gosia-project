import React from 'react';
import { Link } from 'react-router-dom';

function RightImageLeftSection({
  imageSrc,
  imageAlt,
  text,
  full = false,
  backgroundColor = '#00bf63',
  textColor,
  title,
  ctaText,
  ctaLink
}) {
  const wrapperStyle = {
    backgroundColor,
    paddingTop: '3rem',
    paddingBottom: '3rem'
  };

  const textStyle = {
    color: textColor
  };

  const content = (
    <div className="row align-items-center">
      <div className="col-md-6 text-center">
        <img src={imageSrc} alt={imageAlt} className="img-fluid rounded shadow" />
      </div>
      <div className="col-md-6 mb-4 mb-md-0 px-5 text-col">
        {title && <h2 className="mb-3 fw-bold" style={textStyle}>{title}</h2>}
        <p
          className="lead"
          style={textStyle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="btn btn-custom mt-3">
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div style={wrapperStyle}>
      {full ? content : <div className="container">{content}</div>}
    </div>
  );
}

export default RightImageLeftSection;
