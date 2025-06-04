import React from 'react';

function Hero({
  title = "Elevate Your SEO Strategy",
  subtitle = "Unlock your website’s full potential with tailored SEO solutions that drive results.",
  buttonText = "Start Your Journey",
  buttonLink = "/contact",
  imageSrc = "/images/gosia-back-2.png",
  imageAlt = "SEO illustration",
}) {
  return (
    <section className="hero-modern position-relative overflow-hidden">
      <div className="decor-circle decor-circle-1"></div>
      <div className="decor-circle decor-circle-2"></div>

      <div className="container pb-5" style={{ minHeight: '65vh' }}>
        <div className="row align-items-center justify-content-between h-100">
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start z-1">
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {title}
            </h1>
            <p className="lead mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {subtitle}
            </p>
            <a href={buttonLink} className="btn btn-custom mt-3">
              {buttonText}
            </a>
          </div>
          <div className="col-lg-5 text-center z-1">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="img-fluid hero-img"
              style={{ maxHeight: '55vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
