
import React from "react";
import "./About.css";

function About() {
  return (
    <>

      <main className="about-page">

        {/* About Banner */}
      <section className="about-banner">
        <div className="about-banner-content">
          <span>WHO WE ARE</span>
          <h1>About Shree Shyam Enterprise</h1>
        </div>
      </section>


        {/* Company Introduction */}
        <section className="about-intro section-padding">
          <div className="about-container about-intro-grid">

            <div className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
                alt="Industrial workforce"
              />
              <div className="image-accent"></div>
            </div>

            <div className="about-intro-content">
              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                Your Trusted Partner in
                <span> Industrial Services</span>
              </h2>

              <p>
                Shree Shyam Enterprise is focused on providing
                industrial manpower supply and housekeeping
                services to businesses.
              </p>

              <p>
                We aim to support business operations through
                dependable workforce solutions, professional
                service and a commitment to quality.
              </p>

              <div className="about-features">
                <div>✓ Professional Service</div>
                <div>✓ Reliable Workforce</div>
                <div>✓ Quality Commitment</div>
                <div>✓ Customer Focus</div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Highlight */}
      <section className="about-experience">
        <div className="about-experience-content">
          <span>OUR COMMITMENT</span>
          <h2>
            Trusted Manpower Solution
            <strong> from last 5+ Years</strong>
          </h2>
        </div>
      </section>

        {/* Mission and Vision */}
        <section className="mission-section section-padding">
          <div className="about-container">

            <div className="section-heading">
              <span className="section-label">OUR PURPOSE</span>
              <h2>Mission & Vision</h2>
              <p>
                Our purpose and direction guide the way we work
                with our business partners.
              </p>
            </div>

            <div className="mission-grid">

              <div className="mission-card">
                <div className="mission-icon">◎</div>
                <h3>Our Mission</h3>
                <p>
                  To provide dependable manpower and housekeeping
                  solutions while maintaining service quality,
                  professionalism and customer satisfaction.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">✦</div>
                <h3>Our Vision</h3>
                <p>
                  To build lasting business relationships by
                  delivering reliable industrial support services
                  and continuously improving our standards.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-about section-padding">
          <div className="about-container">

            <div className="section-heading">
              <span className="section-label">WHY CHOOSE US</span>
              <h2>What Makes Us Different?</h2>
            </div>

            <div className="why-about-grid">
              <div className="why-about-card">
                <span>01</span>
                <h3>Skilled Workforce</h3>
                <p>Workforce solutions designed around business requirements.</p>
              </div>

              <div className="why-about-card">
                <span>02</span>
                <h3>Quality Service</h3>
                <p>A focus on dependable and professional service delivery.</p>
              </div>

              <div className="why-about-card">
                <span>03</span>
                <h3>Customer Focus</h3>
                <p>Understanding client needs and working towards their expectations.</p>
              </div>

              <div className="why-about-card">
                <span>04</span>
                <h3>Long-Term Partnership</h3>
                <p>Building professional relationships through trust and consistency.</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-container">
            <div>
              <span>LET'S WORK TOGETHER</span>
              <h2>Looking for a Reliable Service Partner?</h2>
              <p>Get in touch with our team to discuss your requirements.</p>
            </div>

            <a href="/contact" className="about-cta-button">
              Contact Us →
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

export default About;
