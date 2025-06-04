import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src='/images/logo.png'
              alt="SEO Peterman logo"
              className="img-fluid mb-3"
              style={{ maxHeight: '100px', objectFit: 'contain' }}
            />
            <p className="">
              Data-driven SEO strategies for ambitious digital teams. Grow faster, rank higher.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white">Navigation</h6>
            <ul className="list-unstyled">
              {[
                { path: '/', label: 'Home' },
                { path: '/about-me', label: 'About Me' },
                { path: '/services', label: 'Services' },
                { path: '/news', label: 'News' },
                { path: '/faq', label: 'FAQ' },
                { path: '/contact', label: 'Contact' },
                { path: '/privacy-policy', label: 'Privacy Policy' },
                { path: '/cookies-policy', label: 'Cookies Policy' },
              ].map((link) => (
                <li key={link.path} className="mb-2">
                  <Link to={link.path} className="text-decoration-none footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold text-white">Contact</h6>
            <p className="mb-1"><a href="mailto:seo.peterman@gmail.com">seo.peterman@gmail.com</a></p>
            <p class="mb-4"><a href="tel:+44123456789">+44 1234 456 789</a></p>
            <p class="mb-1">314 Middle Park Way</p> 
            <p class="mb-1">PO9 5DS Havant</p> 
            <p class="mb-1">Hampshire</p>
            <p class="mb-1">United Kingdom</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Gosia SEO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
