import React from 'react';
import { Link } from 'react-router-dom';

function LeftImageRigthSection({
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
 
  const wrapperStyle = backgroundColor ? {
    backgroundColor,
    paddingTop: '3rem',
    paddingBottom: '3rem'
  } : {
    paddingTop: '3rem',
    paddingBottom: '3rem'
  };
  const wrapperClass = !backgroundColor ? 'bg-dark-gosia' : '';

  const textStyle = {
    color: textColor
  };

  const content = (
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0 px-5 text-col pseudo-circle">
        {title && <h2 className="mb-3 fw-bold position-relative z-2" style={textStyle}>{title}</h2>}
        <p
          className="lead position-relative z-2"
          style={textStyle}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {ctaText && ctaLink && (
          <Link to={ctaLink} className={`btn ${backgroundColor ? 'btn-custom-second' : 'btn-custom'} mt-3`}>
            <span className='z-1 position-relative'>{ctaText}</span>
          </Link>
        )}
      </div>
      <div className="col-md-6 text-center">
        <img src={imageSrc} alt={imageAlt} className="img-fluid rounded shadow" />
      </div>
    </div>
  );

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {full ? content : <div className="container">{content}</div>}
    </div>
  );
}

export default LeftImageRigthSection;
