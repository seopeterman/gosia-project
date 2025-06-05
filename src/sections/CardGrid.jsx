import React, { useState } from 'react';
import './CardGrid.css'; // za chwilę dam CSS

const colors = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#f59e0b', // yellow
  '#10b981', // green
  '#8b5cf6', // purple
  '#ec4899', // pink
  '#14b8a6', // teal
  '#f97316', // orange
  '#6366f1', // indigo
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
    <section className="py-5 bg-dark-gosia text-light">
      <div className="container z-1">
        <div className="row justify-content-center text-center">
          <h2 className="mb-4">My Cards</h2>
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
                    className="flip-card-front p-4"
                    style={{ backgroundColor: colors[idx % colors.length], color: '#fff' }}
                  >
                    <h5 className="fw-bold">{card.title}</h5>
                  </div>
                  <div
                    className="flip-card-back p-4"
                    style={{ backgroundColor: '#111', color: colors[idx % colors.length] }}
                  >
                    <p className="small">{card.backText}</p>
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
