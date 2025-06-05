import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaCode, FaMobileAlt, FaFacebookMessenger, FaLaptopCode, FaRocket, FaPlug, FaBullhorn } from 'react-icons/fa';
import PageHero from '../sections/PageHero';

const services = [
  {
    id: 'technical-seo',
    icon: <FaSearch size={32} />,
    title: 'Technical SEO',
    text: 'We optimize your site structure and code to improve indexability and load speed.',
    desc: 'Our technical SEO service dives deep into your site architecture, identifying crawl issues, improving loading times, mobile responsiveness, and ensuring Google can understand and rank your content properly.',
    bg: 'bg-primary text-white',
  },
  {
    id: 'analytics',
    icon: <FaChartLine size={32} />,
    title: 'Analytics & Reporting',
    text: 'Data-driven decisions powered by monthly performance reviews and KPI tracking.',
    desc: 'Get tailored insights every month. Our analytics reports help you see what’s working, what needs improvement, and where the best opportunities lie.',
    bg: 'bg-secondary text-white',
  },
  {
    id: 'on-page',
    icon: <FaCode size={32} />,
    title: 'On-page Optimization',
    text: 'From meta tags to schema markup, we fine-tune every page for visibility.',
    desc: 'We ensure your pages are fully optimized for both users and search engines, improving relevance, CTR, and user engagement.',
    bg: 'bg-warning text-dark',
  },
  {
    id: 'mobile-seo',
    icon: <FaMobileAlt size={32} />,
    title: 'Mobile SEO',
    text: 'Optimizing for mobile-first indexing and blazing-fast UX on all devices.',
    desc: 'More than half of traffic comes from mobile. We make sure your site is blazing fast, easy to navigate, and ranks well on mobile devices.',
    bg: 'bg-info text-dark',
  },
  {
    id: 'social-media',
    icon: <FaFacebookMessenger size={32} />,
    title: 'Social Media Marketing',
    text: 'Boost your brand presence on platforms like Facebook, Instagram, and LinkedIn.',
    desc: 'We create engaging social media campaigns that build your audience, increase interactions, and drive traffic to your website.',
    bg: 'bg-danger text-white',
  },
  {
    id: 'small-websites',
    icon: <FaLaptopCode size={32} />,
    title: 'Small Business Websites',
    text: 'Custom-built websites tailored for startups and small businesses.',
    desc: 'We design and develop responsive, fast, and SEO-friendly websites that reflect your brand and attract customers.',
    bg: 'bg-success text-white',
  },
  {
    id: 'landing-pages',
    icon: <FaRocket size={32} />,
    title: 'Landing Pages',
    text: 'High-converting landing pages for your marketing campaigns.',
    desc: 'Optimized for conversions and speed, our landing pages help turn visitors into leads and customers efficiently.',
    bg: 'bg-warning text-dark',
  },
  {
    id: 'api-integrations',
    icon: <FaPlug size={32} />,
    title: 'API Integrations',
    text: 'Seamless integration of third-party APIs to enhance your website functionality.',
    desc: 'We connect your site with CRM, payment gateways, analytics tools, and more to automate workflows and improve user experience.',
    bg: 'bg-info text-dark',
  },
  {
    id: 'digital-advertising',
    icon: <FaBullhorn size={32} />,
    title: 'Digital Advertising',
    text: 'Effective ads on Google, Facebook, and other platforms.',
    desc: 'We manage PPC and display ad campaigns to maximize ROI and grow your online presence quickly.',
    bg: 'bg-danger text-white',
  },
];

function ServicesExtended() {
  return (
    <div className="mt-10">
      <Helmet>
        <title>Our SEO Services | SEOPETERMAN</title>
        <meta
          name="description"
          content="Explore SEO services offered by SEOPeterman: from audits to on-page and off-page optimization. Tailored strategies for growth."
        />
      </Helmet>

      {/* Summary cards */}
      <section className='bg-light py-5'>
      <div className="container">
        <div className="row text-center">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-dark-small-gosia">
                <div className="mb-2">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.text}</p>
                <a 
                  href={`#${service.id}`} 
                  className="btn btn-outline-primary btn-custom-sm btn-sm mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(service.id);
                    const yOffset = -100;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }}>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extended service descriptions */}
      <div className="container">
        {services.map((service, idx) => (
          <motion.section
            key={service.id}
            id={service.id}
            className={`my-5 p-4 rounded ${service.bg}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="row align-items-center">
              <div className="col-md-2 text-center mb-3 mb-md-0">{service.icon}</div>
              <div className="col-md-10">
                <h3 className="fw-bold mb-2">{service.title}</h3>
                <p className="mb-0">{service.desc}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
      </section>
    </div>
  );
}

export default ServicesExtended;
