import React, { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import storylineSteps from '../data/storyline.json';

function Storyline() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-white position-relative">
      <div className="container position-relative pseudo-circle-reverse">
        <div className="timeline-vertical-line d-none d-md-block" />

        <h2 className="fw-bold text-center text-black mb-5">Our SEO Journey</h2>

        {storylineSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const IconComponent = FaIcons[step.icon] || FaIcons.FaRegCircle;

          return (
            <div
              key={index}
              className={`row align-items-center mb-5 position-relative z-2 ${isLeft ? '' : 'flex-row-reverse'}`}
              data-aos={isLeft ? 'fade-right' : 'fade-left'}
            >
              {/* Timeline Dot */}
              <span
                className="timeline-dot d-none d-md-block"
                style={{ top: '50%' }}
              ></span>

              {/* Text Box */}
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="p-4 bg-dark-gosia rounded shadow-sm h-100 position-relative z-1">
                  <div className="d-flex align-items-center mb-2 position-relative z-2">
                    <IconComponent className="me-2 text-white fs-4" />
                    <h5 className="mb-0 fw-bold">{step.title}</h5>
                  </div>
                  <small className="text-white d-block mb-2">{step.time}</small>
                  <p className="mb-3 position-relative z-2">{step.description}</p>
                  {/* {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  )} */}
                </div>
              </div>

              {/* Empty spacer for alignment */}
              <div className="col-md-6 d-none d-md-block" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Storyline;
