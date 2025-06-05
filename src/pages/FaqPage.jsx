import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown } from 'react-icons/fa';
import PageHero from '../sections/PageHero';
import faqData from '../data/faqData.json';

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const bgColors = ['bg-dark-small-gosia text-white'];

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

      <section className="bg-light py-5">
        <div className="container">
          <div className="accordion" id="faqAccordion">
            {faqData.map((item, idx) => {
              const colorClass = bgColors[idx % bgColors.length];
              const isActive = activeIndex === idx;

              return (
                <div
                  className={`accordion-item mb-4 border-0 rounded shadow ${colorClass}`}
                  key={idx}
                >
                  <h2 className="accordion-header" id={`heading${idx}`}>
                    <button
                      className={`accordion-button d-flex justify-content-between align-items-center ${isActive ? '' : 'collapsed'} ${colorClass}`}
                      type="button"
                      onClick={() => toggle(idx)}
                      aria-expanded={isActive}
                      aria-controls={`collapse${idx}`}
                      style={{
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        padding: '1rem 1.5rem',
                      }}
                    >
                      <span>{item.question}</span>
                      <FaChevronDown
                        className="ms-auto"
                        style={{
                          transition: 'transform 0.3s ease',
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </button>
                  </h2>
                  <div
                    id={`collapse${idx}`}
                    className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                    aria-labelledby={`heading${idx}`}
                    data-bs-parent="#faqAccordion"
                    style={{ transition: 'all 0.5s ease' }}
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
      </section>
    </>
  );
}

export default FAQPage;
