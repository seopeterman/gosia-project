import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | SEOPETERMAN</title>
        <meta
          name="description"
          content="Contact SEO by Gosia for SEO services, consultations, and personalized pricing plans."
        />
      </Helmet>

      <PageHero
        title="Contact"
        backgroundImage="/images/contact-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Contact' },
        ]}
      />

      {/* Intro Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-primary mb-4">Let’s Connect</h2>
          <p className="fs-5 text-dark">
            Have a project in mind or questions about SEO? I’m here to help! Whether you're looking for a quick consultation or a long-term partnership, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <div className="row gy-5">
            {/* Email */}
            <div className="col-md-4">
              <h4 className="text-primary">Email Me</h4>
              <p className="text-dark">
                Send your queries to{' '}
                <a href="mailto:seo.peterman@gmail.com" className="text-decoration-underline">seo.peterman@gmail.com</a> and get a response within 24h.
              </p>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <h4 className="text-primary">Call or Text</h4>
              <p className="text-dark">
                Reach me at <strong>+48 123 456 789</strong><br />
                Mon–Fri: 9 AM – 6 PM
              </p>
            </div>

            {/* Address */}
            <div className="col-md-4">
              <h4 className="text-primary">Office Address</h4>
              <address className="text-dark">
                SEOPETERMAN<br />
                314 Middle Park Way<br />
                PO9 5DS Havant, Hampshire<br />
                United Kingdom
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h4 className="text-primary mb-4">Find Me on the Map</h4>
          <div className="ratio ratio-16x9 rounded shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.7829403529096!2d-0.9810003842393282!3d50.85822097168908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48744ea099a4d8e9%3A0x7e98f156ac872e1!2sMiddle%20Park%20Way%2C%20Havant%2C%20UK!5e0!3m2!1sen!2spl!4v1717433530387!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SEOPETERMAN Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Partnerships & Pricing */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6">
              <h4 className="text-primary">Collaboration & Partnerships</h4>
              <p className="text-dark">
                I welcome new projects, partnerships, and collaborations. Whether you’re a startup, small business, or established brand, my SEO services can support your goals.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className="text-primary">Pricing Information</h4>
              <p className="text-dark">
                Every business is different. Let’s talk about your goals and I’ll tailor a plan that fits your needs and budget. No generic packages—just smart, customized pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
