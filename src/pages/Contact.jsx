import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../sections/PageHero';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | SEOPETERMAN</title>
        <meta name="description" content="Contact SEO by Gosia for SEO services, consultations, and personalized pricing plans." />
      </Helmet>

      <PageHero
        title="Contact"
        backgroundImage="/images/contact-hero.jpg"
        breadcrumbs={[
          { name: 'Home', link: '/' },
          { name: 'Contact' },
        ]}
      />

      {/* Let’s Connect */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-primary-contact mb-4">Let’s Connect</h2>
          <p className="fs-5 text-dark">
            Have a project in mind or questions about SEO? I’m here to help! Whether you're looking for a quick consultation or a long-term partnership, feel free to reach out.
          </p>
        </div>
      </section>
      {/* Partnerships & Pricing */}
      <section className="bg-dark-gosia py-5 text-white">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6">
              <h4>Collaboration & Partnerships</h4>
              <p>
                I welcome new projects, partnerships, and collaborations. Whether you’re a startup, small business, or established brand, my SEO services can support your goals.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Pricing Information</h4>
              <p>
                Every business is different. Let’s talk about your goals and I’ll tailor a plan that fits your needs and budget. No generic packages—just smart, customized pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Get in Touch + Form */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row border-0 rounded-3 overflow-hidden shadow-lg">
            {/* Contact Info + Socials */}
            <div className="col-lg-4 bg-dark-gosia py-5 px-5">
              <h4 className="mb-4 position-relative z-1">Get in Touch</h4>
              <p>I'd love to hear from you. Please fill out the form or contact me using the information below.</p>
        {/* Email */}
        <div className="mb-3 d-flex align-items-start">
          <FaEnvelope className="text-success me-3 mt-1 fs-5" />
          <div>
            <h6 className="mb-1">Email</h6>
            <p className="mb-0"><a href="mailto:seo.peterman@gmail.com">seo.peterman@gmail.com</a></p>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-3 d-flex align-items-start">
          <FaPhoneAlt className="text-success me-3 mt-1 fs-5" />
          <div>
            <h6 className="mb-1">Phone</h6>
            <p className="mb-0"><a href="tel:+44123456789">+48 123 456 789</a></p>
          </div>
        </div>

        {/* Address */}
        <div className="mb-4 d-flex align-items-start">
          <FaMapMarkerAlt className="text-success me-3 mt-1 fs-5" />
          <div>
            <h6 className="mb-1">Office</h6>
            <address className="mb-0">
              314 Middle Park Way<br />
              PO9 5DS Havant, UK
            </address>
          </div>
        </div>


              {/* Social Media */}
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-5 social-link"><FaFacebookF /></a>
                <a href="#" className="text-white fs-5 social-link"><FaInstagram /></a>
                <a href="#" className="text-white fs-5 social-link"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8 bg-white text-dark py-5 px-5">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Company Name</label>
                    <input type="text" name="company" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea name="message" rows="5" className="form-control" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-custom-second"><span className='position-relative z-1'>Send Message</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-dark-gosia text-white py-5">
        <div className="container">
          <h4 className="text-white mb-4">Find Me on the Map</h4>
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

    </>
  );
}

export default Contact;
