import React from 'react';

function BoxedTextBlock({ subtitle, title, text, reverse = false }) {
  // Style tła i tekstu zależny od reverse
  const sectionBg = reverse ? 'bg-green' : 'bg-white';
  const boxBg = reverse ? 'bg-white' : 'bg-green';
  const boxTextColor = reverse ? 'text-dark' : 'text-white';
  const titleTextColor = reverse ? 'text-dark' : 'text-white';

  return (
    <section className={`${sectionBg} py-5 px-3 px-md-4`} style={{ overflow: 'hidden' }}>
      <div className="container d-flex justify-content-center">
        <div className={`p-4 p-md-5 rounded ${boxBg} ${boxTextColor} w-100`} style={{ position: 'relative' }}>
          {subtitle && <div className="text-uppercase fw-semibold opacity-75 mb-2" style={{ fontSize: '0.9rem' }}>{subtitle}</div>}
          {title && (
            <h2
                className={`fw-bold mb-3 ${titleTextColor}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                {title}
            </h2>
            )}
          {text && <p className="fs-5" dangerouslySetInnerHTML={{ __html: text }} />}
        </div>
      </div>
    </section>
  );
}

export default BoxedTextBlock;
