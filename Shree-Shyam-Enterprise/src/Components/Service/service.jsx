
import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const services = [
  {
    number: "01",
    title: "Industrial Manpower Supply",
    description:
      "We provide skilled and unskilled blue-collar workforce to support manufacturing units, factories and industrial operations.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
    points: [
      "Skilled and unskilled workforce",
      "Automobile industry manpower",
      "Factory and production support",
      "Timely workforce deployment",
    ],
  },
  {
    number: "02",
    title: "NAPS & NATS Workforce Solutions",
    description:
      "We support industries with apprenticeship and trainee workforce solutions under NAPS and NATS, subject to applicable eligibility and compliance requirements.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    points: [
      "Apprenticeship workforce support",
      "Trainee program coordination",
      "Industry workforce assistance",
      "Applicable compliance support",
    ],
  },
  {
    number: "03",
    title: "Housekeeping Services",
    description:
      "We provide professional housekeeping services to help maintain clean, hygienic, safe and productive industrial and commercial environments.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    points: [
      "Industrial housekeeping",
      "Workplace cleaning and maintenance",
      "Commercial premises cleaning",
      "Clean and organized workspaces",
    ],
  },
];

function Services() {
  return (
    <div className="services-page">


      {/* Introduction */}
      <section className="services-intro">
        <span className="services-label">OUR EXPERTISE</span>
        <h2>
          Reliable Workforce & 
          <span> Professional Services</span>
        </h2>
        <p>
          Shree Shyam Enterprise provides industrial manpower supply,
          NAPS and NATS workforce solutions, and professional
          housekeeping services to manufacturing units, factories
          and commercial establishments.
        </p>
      </section>

      {/* Service Cards */}
      <section className="services-list">
        {services.map((service) => (
          <article className="service-card" key={service.number}>

            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <span className="service-number">{service.number}</span>
            </div>

            <div className="service-content">
              <span className="service-small-label">OUR SERVICE</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.points.map((point, index) => (
                  <li key={index}>
                    <span className="service-check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="service-inquiry-link">
                Discuss Your Requirement <span>→</span>
              </Link>
            </div>

          </article>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="services-benefits">
        <div className="services-benefits-heading">
          <span className="services-label">WHY CHOOSE US</span>
          <h2>A Dependable Partner for Your Business</h2>
          <p>
            We focus on dependable staffing, timely deployment
            and service quality to support your business operations.
          </p>
        </div>

        <div className="services-benefits-grid">
          <div className="service-benefit">
            <span>01</span>
            <h3>Dependable Staffing</h3>
            <p>Workforce solutions based on your operational requirements.</p>
          </div>

          <div className="service-benefit">
            <span>02</span>
            <h3>Timely Deployment</h3>
            <p>Focus on providing workforce support as per agreed requirements.</p>
          </div>

          <div className="service-benefit">
            <span>03</span>
            <h3>Quality Service</h3>
            <p>Commitment to professional service and client satisfaction.</p>
          </div>

          <div className="service-benefit">
            <span>04</span>
            <h3>Compliance Focus</h3>
            <p>Attention to applicable workforce and operational requirements.</p>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="services-cta">
        <span>LET'S WORK TOGETHER</span>
        <h2>Looking for the Right Workforce Solution?</h2>
        <p>
          Share your requirements with Shree Shyam Enterprise.
          Our team can discuss a suitable service solution.
        </p>
        <Link to="/contact" className="services-cta-button">
          Send Your Inquiry <span>→</span>
        </Link>
      </section>

    </div>
  );
}

export default Services;
