import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import faqData from '../data/faqData.json';

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const bgColors = [
    'bg-primary text-white',
    'bg-success text-white',
    'bg-warning text-dark',
    'bg-info text-dark',
    'bg-secondary text-white'
  ];

  return (
    <>
      <Helmet>
        <title>FAQ | SEOPETERMAN</title>
        <meta
          name="description"
          content="Frequently Asked Questions about SEO services offered by SEOPETERMAN."
        />
      </Helmet>

      <PageHero
        title="FAQ"
        backgroundImage="/images/faq-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'FAQ' },
        ]}
      />

      <div className="container my-5">
        <div className="accordion" id="faqAccordion">
          {faqData.map((item, idx) => {
            const colorClass = bgColors[idx % bgColors.length];
            return (
              <div
                className={`accordion-item mb-4 border-0 rounded shadow ${colorClass}`}
                key={idx}
              >
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className={`accordion-button ${activeIndex === idx ? '' : 'collapsed'} ${colorClass}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={activeIndex === idx}
                    aria-controls={`collapse${idx}`}
                    style={{ fontWeight: '600', fontSize: '1.1rem', padding: '1rem 1.5rem' }}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div
                    className={`accordion-body ${colorClass}`}
                    style={{ padding: '1rem 1.5rem', fontSize: '1rem' }}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FAQPage;
