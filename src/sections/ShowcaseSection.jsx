import React from 'react';

function ShowcaseSection({imageSrc, imageAlt, sectionOneTitle, sectionOneText, sectionTwoTitle, sectionTwoText}) {
  return (
    <section className="bg-light pseudo-circle-reverse position-relative py-5 overflow-hidden">
      <div className="container position-relative z-2">
        <div className="bg-light text-dark rounded shadow p-5 position-relative">
          <div className="row">
            <div className="col-md-8 offset-md-4">
              <h2 className="fw-bold mb-3 text-dark">{sectionOneTitle}</h2>
              <p className="mb-0">
                {sectionOneText}
              </p>
            </div>
          </div>

          {/* Floating image */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="floating-image"
          />
        </div>
      </div>

      {/* Bottom extension row */}
      <div className="container mt-5 position-relative z-2">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="bg-dark text-white p-4 rounded shadow-sm">
              <h4 className="fw-bold mb-2">{sectionTwoTitle}</h4>
              <p className="mb-0">
                {sectionTwoText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
