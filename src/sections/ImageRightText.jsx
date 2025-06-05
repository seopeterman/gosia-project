import React from 'react';

function ImageRightText({ imageSrc, imageAlt, text, full = false, backgroundColor, textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const wrapperClass = !backgroundColor ? 'bg-dark-gosia' : '';
  const textStyle = textColor ? { color: textColor } : {};

  const content = (
    <div className="row py-5">
      <div className="col-md-6">
        <img src={imageSrc} className="img-fluid" alt={imageAlt} />
      </div>
      <div className="col-md-6 d-flex align-items-center px-5 pseudo-circle">
        <p className='position-relative z-2'style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {full ? content : <div className="container">{content}</div>}
    </div>
  );
}

export default ImageRightText;
