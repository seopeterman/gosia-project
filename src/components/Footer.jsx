import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row">
          {/* Logo + slogan */}
          <div className="col-md-3 mb-4">
            <img
              src="/images/logo.png"
              alt="SEO Peterman logo"
              className="img-fluid mb-3"
              style={{ maxHeight: '100px', objectFit: 'contain' }}
            />
            <p>
              Data-driven SEO strategies for ambitious digital teams. Grow faster, rank higher.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-white">Navigation</h6>
            <ul className="list-unstyled">
              {[
                { path: '/', label: 'Home' },
                { path: '/about-me', label: 'About Me' },
                { path: '/services', label: 'Services' },
                { path: '/news', label: 'News' },
                { path: '/faq', label: 'FAQ' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="text-decoration-none footer-link text-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-white">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/privacy-policy" className="text-decoration-none footer-link text-light">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies-policy" className="text-decoration-none footer-link text-light">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-semibold text-white">Contact</h6>
            <p className="mb-1"><a href="mailto:seo.peterman@gmail.com" className="text-light">seo.peterman@gmail.com</a></p>
            <p className="mb-1"><a href="tel:+44123456789" className="text-light">+44 1234 456 789</a></p>
            <p className="mb-1">314 Middle Park Way</p>
            <p className="mb-1">PO9 5DS Havant</p>
            <p className="mb-1">Hampshire, United Kingdom</p>
            <h6 className="fw-semibold text-white mt-4">Follow Me</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" className="text-light fs-5" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} SEOPETERMAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
