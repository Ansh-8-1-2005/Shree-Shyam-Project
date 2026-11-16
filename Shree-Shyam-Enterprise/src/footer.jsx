import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* Main Footer */}
      <div className="footer-main">

        {/* Company Information */}
        <div className="footer-column footer-about">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">SS</span>
            <span className="footer-logo-text">
              SHREE SHYAM
              <small>ENTERPRISE</small>
            </span>
          </Link>

          <p>
            Shree Shyam Enterprise is a reliable service provider
            specializing in industrial manpower supply, NAPS & NATS
            workforce solutions, and professional housekeeping services.
          </p>

          <h4 className="footer-tagline">
            Reliable Manpower, Professional Services.
          </h4>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/services">Industrial Manpower Supply</Link>
            </li>
            <li>
              <Link to="/services">NAPS & NATS Solutions</Link>
            </li>
            <li>
              <Link to="/services">Housekeeping Services</Link>
            </li>
            <li>
              <Link to="/contact">Workforce Enquiry</Link>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">☎</span>
            <div>
              <h4>Phone</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉</span>
            <div>
              <h4>Email</h4>
              <p>your-email@example.com</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">⌖</span>
            <div>
              <h4>Address</h4>
              <p>Your Business Address Here</p>
            </div>
          </div>

          <Link to="/contact" className="footer-contact-button">
            Send an Inquiry →
          </Link>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shree Shyam Enterprise.
          All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
