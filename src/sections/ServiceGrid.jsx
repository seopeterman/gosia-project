import React from 'react';
import { 
  FaSearch, 
  FaChartLine, 
  FaCode, 
  FaMobileAlt, 
  FaFacebook, 
  FaLaptopCode, 
  FaFileAlt, 
  FaCogs, 
  FaEnvelopeOpenText 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaSearch size={32} />,
    title: 'Technical SEO',
    text: 'We optimize your site structure and code to improve indexability and load speed.',
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'Analytics & Reporting',
    text: 'Data-driven decisions powered by monthly performance reviews and KPI tracking.',
  },
  {
    icon: <FaCode size={32} />,
    title: 'On-page Optimization',
    text: 'From meta tags to schema markup, we fine-tune every page for visibility.',
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Mobile SEO',
    text: 'Optimizing for mobile-first indexing and blazing-fast UX on all devices.',
  },
  {
    icon: <FaFacebook size={32} />,
    title: 'Social Media Marketing',
    text: 'Building and managing your social presence to increase engagement and brand awareness.',
  },
  {
    icon: <FaLaptopCode size={32} />,
    title: 'Website & Landing Pages',
    text: 'Creating small websites and optimized landing pages tailored to your campaigns.',
  },
  {
    icon: <FaFileAlt size={32} />,
    title: 'Content Creation',
    text: 'Crafting SEO-friendly blog posts, articles, and website copy to attract your audience.',
  },
  {
    icon: <FaCogs size={32} />,
    title: 'API Integrations',
    text: 'Seamless integration with third-party tools to automate workflows and enhance functionality.',
  },
  {
    icon: <FaEnvelopeOpenText size={32} />,
    title: 'Email Marketing',
    text: 'Designing and managing targeted email campaigns to nurture leads and boost conversions.',
  },
];

function ServicesGrid() {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <h2 className="mb-3 text-dark" style={{ fontWeight: '700' }}>My Services</h2>
          <p className="pb-2" style={{ maxWidth: 600, margin: '0 auto' }}>
            From meta tags to schema markup, we fine-tune every page for visibility.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="p-4 border rounded shadow-sm h-100 bg-dark-small-gosia">
                <div className="mb-2">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.text}</p>
              </div>
            </div>

          ))}
        </div>

        <div className="text-center mt-5">
          <Link
            to="/services"
            className="btn btn-custom-second px-4 py-2"
            style={{ fontWeight: '600', fontSize: '1.1rem' }}
          >
            <span className='z-1 position-relative'>Read More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
