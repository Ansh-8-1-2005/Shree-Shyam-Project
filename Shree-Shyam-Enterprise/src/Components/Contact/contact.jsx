
import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend demo only. Backend integration will be added later.
    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* Contact Introduction */}
      <section className="contact-heading">
        <span className="contact-label">CONTACT OUR TEAM</span>
        <h2>Let's Discuss Your Business Requirements</h2>
        <p>
          Looking for reliable industrial manpower or professional
          housekeeping services? Get in touch with our team.
        </p>
      </section>

      {/* Contact Details + Form */}
      <section className="contact-main">
        <div className="contact-info">

          <h3>Contact Information</h3>
          <p className="contact-info-text">
            Connect with Shree Shyam Enterprise for workforce
            and facility management requirements.
          </p>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <span>☎</span>
            </div>
            <div>
              <h4>Phone Number</h4>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <span>✉</span>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>your-email@example.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <span>⌖</span>
            </div>
            <div>
              <h4>Business Address</h4>
              <p>Your complete business address here</p>
            </div>
          </div>

          <div className="contact-info-note">
            <h4>Our Services</h4>
            <p>Industrial Manpower Supply</p>
            <p>Housekeeping Services</p>
            <p>NAPS & NATS Workforce Solutions</p>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="contact-form-wrapper">
          <div className="contact-form-heading">
            <span>HAVE A REQUIREMENT?</span>
            <h3>Send Us an Inquiry</h3>
            <p>Fill out the form and share your requirements with us.</p>
          </div>

          {submitted && (
            <div className="contact-success">
              Form validation successful. Backend connection is
              required to actually send your inquiry.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="contact-form-row">
              <div className="contact-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  inputMode="numeric"
                  required
                />
              </div>

              <div className="contact-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label>Service Required *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Industrial Manpower Supply">
                  Industrial Manpower Supply
                </option>
                <option value="Housekeeping Services">
                  Housekeeping Services
                </option>
                <option value="NAPS & NATS">
                  NAPS & NATS Workforce Solutions
                </option>
                <option value="Other">Other Requirements</option>
              </select>
            </div>

            <div className="contact-field">
              <label>Your Message *</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Submit Inquiry <span>→</span>
            </button>

          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom-cta">
        <h2>Need a Reliable Workforce Partner?</h2>
        <p>
          Let Shree Shyam Enterprise support your manpower
          and housekeeping requirements.
        </p>
      </section>

    </div>
  );
}

export default Contact;
