import React from 'react';
import { motion } from 'framer-motion';

function Hero({
  title = "Elevate Your SEO Strategy",
  subtitle = "Unlock your website’s full potential with tailored SEO solutions that drive results.",
  buttonText = "Start Your Journey",
  buttonLink = "/contact",
  imageSrc = "/images/gosia-hero-section.png",
  imageAlt = "SEO illustration",
}) {
  return (
    <section className="hero-modern position-relative overflow-hidden pt-lg-5">
      <div className="decor-circle decor-circle-1"></div>
      <div className="decor-circle decor-circle-2"></div>

      <div className="container pb-5" style={{ minHeight: '65vh' }}>
        <div className="row align-items-center justify-content-between h-100">
          {/* Tekst z animacją z lewej */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start z-1 order-2 order-lg-1"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {title}
            </h1>
            <p className="lead mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {subtitle}
            </p>
            <a href={buttonLink} className="btn btn-custom mt-3">
              {buttonText}
            </a>
          </motion.div>

          {/* Obrazek z animacją rozwijania od góry */}
          <motion.div
            className="col-lg-5 text-center z-1 order-1 order-lg-2"
            initial={{ y: -1250, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeIn' }}
          >
            <div className="hero-image-wrapper">
              <div className="image-container">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="img-fluid hero-img"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
