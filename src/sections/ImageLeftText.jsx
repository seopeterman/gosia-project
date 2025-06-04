import React from 'react';

function ImageLeftText({ imageSrc, imageAlt, text, full = false, backgroundColor = '#00bf63', textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const textStyle = textColor ? { color: textColor } : {};

  const content = (
    <div className="row py-5">
      <div className="col-md-6 d-flex align-items-center px-5">
        <p style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="col-md-6">
        <img src={imageSrc} className="img-fluid" alt={imageAlt} />
      </div>
    </div>
  );

  return (
    <div style={wrapperStyle}>
      {full ? content : <div className="container">{content}</div>}
    </div>
  );
}

export default ImageLeftText;
