import React, { useState } from 'react';
import './CardGrid.css';
import { GiClick } from 'react-icons/gi';

const colors = [
  '#ffffff', 
];

const cards = [
  { title: 'Keyword Strategy', backText: 'We identify high-converting keywords tailored to your niche and audience.' },
  { title: 'Content Planning', backText: 'Build topical authority with structured and optimized content plans.' },
  { title: 'Backlink Audit', backText: 'We analyze your backlink profile to boost authority and avoid penalties.' },
  { title: 'Technical SEO', backText: 'Improve site speed, crawlability, and indexability for better rankings.' },
  { title: 'Local SEO', backText: 'Optimize your presence to attract local customers effectively.' },
  { title: 'Social Media', backText: 'Amplify your SEO with engaging social media strategies.' },
  { title: 'Landing Pages', backText: 'Create conversion-focused landing pages tailored for your campaigns.' },
  { title: 'API Integrations', backText: 'Automate your SEO reporting and data collection with smart APIs.' },
  { title: 'Mobile Optimization', backText: 'Ensure fast, responsive experience for mobile visitors.' },
];

function CardGrid() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section className="py-5 bg-light text-dark">
      <div className="container z-1">
        <div className="row justify-content-center text-center">
          <h2 className="mb-4 text-dark">My Cards</h2>
          <p className="pb-5">From meta tags to schema markup, we fine-tune every page for visibility.</p>
        </div>
        <div className="row g-4">
          {cards.map((card, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className={`flip-card ${flippedIndex === idx ? 'flipped' : ''}`}
                onClick={() => toggleFlip(idx)}
                style={{ borderColor: colors[idx % colors.length] }}
              >
                <div
                  className="flip-card-inner"
                  style={{ borderColor: colors[idx % colors.length] }}
                >
                  <div
                    className="flip-card-front p-4 bg-dark-small-gosia"
                    style={{ color: colors[idx % colors.length] }}
                  >
                    <h5 className="fw-bold position-relative z-1">{card.title}</h5>
                    <div className="icon-container position-relative z-1 mt-3">
                      <GiClick className="pulse-icon" size={28} />
                    </div>
                  </div>
                  <div
                    className="flip-card-back p-4 bg-dark-small-gosia position-absolute"
                    style={{ color: colors[idx % colors.length] }}
                  >
                    <p className="small position-relative z-1">{card.backText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
