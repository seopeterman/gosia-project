import React, { useState, useEffect, useRef } from 'react';

const counties = [
  "Dorset",
  "Wiltshire",
  "Berkshire",
  "Surrey",
  "West Sussex",
  "Hampshire"
];

const introText = "Never mind if you're from ";
const finalText = "I'm Gosia from Hampshire. Helping your business grow online — with strategy, SEO, and a smile.";

function Hero({
  title = "Elevate Your SEO Strategy",
  buttonText = "Start Your Journey",
  buttonLink = "/contact",
  imageSrc = "/images/gosia-hero-section.png",
  imageAlt = "SEO illustration",
}) {
  const [phase, setPhase] = useState('typingIntro'); // 'typingIntro', 'typingCounty', 'deletingCounty', 'deletingIntro', 'finalTyping'
  const [countyIndex, setCountyIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayIntro, setDisplayIntro] = useState('');
  const [displayCounty, setDisplayCounty] = useState('');
  const [displayFinal, setDisplayFinal] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (phase === 'typingIntro') {
      if (charIndex < introText.length) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(charIndex + 1);
          setDisplayIntro(introText.substring(0, charIndex + 1));
        }, 100);
      } else {
        setCharIndex(0);
        setPhase('typingCounty');
      }
    } else if (phase === 'typingCounty') {
      if (charIndex < counties[countyIndex].length) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(charIndex + 1);
          setDisplayCounty(counties[countyIndex].substring(0, charIndex + 1));
        }, 150);
      } else {
        timeoutRef.current = setTimeout(() => {
          if (counties[countyIndex] === 'Hampshire') {
            setPhase('deletingIntro');
            setCharIndex(displayIntro.length);
          } else {
            setPhase('deletingCounty');
            setCharIndex(counties[countyIndex].length);
          }
        }, 1500);
      }
    } else if (phase === 'deletingCounty') {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayCounty(counties[countyIndex].substring(0, charIndex - 1));
        }, 75);
      } else {
        setCountyIndex(countyIndex + 1);
        setPhase('typingCounty');
      }
    } else if (phase === 'deletingIntro') {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setDisplayIntro(introText.substring(0, charIndex - 1));
          setDisplayCounty('');
        }, 75);
      } else {
        setPhase('finalTyping');
        setCharIndex(0);
      }
    } else if (phase === 'finalTyping') {
      // Pisanie finalnego tekstu
      if (charIndex < finalText.length) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex(charIndex + 1);
          setDisplayFinal(finalText.substring(0, charIndex + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [phase, charIndex, countyIndex, displayIntro, displayCounty]);

  return (
    <section className="hero-modern position-relative overflow-hidden pt-lg-5">
      <div className="decor-circle decor-circle-1"></div>
      <div className="decor-circle decor-circle-2"></div>

      <div className="container pb-5" style={{ minHeight: '65vh' }}>
        <div className="row align-items-center justify-content-between h-100">
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start z-1 order-2 order-lg-1">
            <h1
              className="display-4 fw-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {title}
            </h1>

            <p
              className="lead mb-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {phase !== 'finalTyping' ? (
                <>
                  <span style={{ borderBottom: "2px solid #00bf63", paddingBottom: "2px" }}>
                    {displayIntro}
                    <span style={{ fontWeight: '700' }}>{displayCounty}</span>
                    <span className="cursor">|</span>
                  </span>
                </>
              ) : (
                <>
                  {displayFinal}
                  <span className="cursor">|</span>
                </>
              )}
            </p>

            <a href={buttonLink} className="btn btn-custom mt-3">
              {buttonText}
            </a>
          </div>

          <div
            className="col-lg-5 text-center z-1 order-1 order-lg-2"
            style={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="hero-image-wrapper">
              <div className="image-container">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="img-fluid hero-img"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cursor {
          display: inline-block;
          width: 10px;
          animation: blink 1s infinite;
          color: #00bf63;
          font-weight: 700;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
