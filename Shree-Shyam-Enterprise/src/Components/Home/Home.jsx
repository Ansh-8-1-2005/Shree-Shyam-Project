
import Hero from "./Hero";
import "./Home.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import InquiryModal from "./Inquery";

function Home() {
    const [inquiryOpen, setInquiryOpen] = useState(false);


  const highlights = [
    {
      icon: "👷",
      title: "Professional Workforce",
      desc: "Manpower solutions for different business requirements.",
    },
    {
      icon: "🏭",
      title: "Industrial Support",
      desc: "Workforce support for industrial operations.",
    },
    {
      icon: "🤝",
      title: "Business Partnership",
      desc: "Building professional and long-term relationships.",
    },
    {
      icon: "⭐",
      title: "Quality Commitment",
      desc: "Focused on professional service and quality.",
    },
  ];

  const industries = [
    {
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=85",
      title: "Automobile Industry",
      desc: "Workforce support for automobile manufacturing operations.",
    },
    {
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=85",
      title: "Manufacturing Industry",
      desc: "Manpower solutions for manufacturing and production facilities.",
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
      title: "Warehousing",
      desc: "Workforce support for warehouse and logistics operations.",
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85",
      title: "Housekeeping",
      desc: "Professional housekeeping and facility maintenance services.",
    },
  ];

  const reasons = [
    "Professional Workforce Solutions",
    "Client-Focused Approach",
    "Industrial Service Support",
    "Commitment to Quality",
  ];

  const steps = [
    {
      number: "01",
      title: "Understand Requirements",
      desc: "We understand the client's business and workforce requirements.",
    },
    {
      number: "02",
      title: "Workforce Planning",
      desc: "Planning manpower according to the project requirements.",
    },
    {
      number: "03",
      title: "Manpower Deployment",
      desc: "Coordinating workforce deployment as agreed with the client.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      desc: "Providing service coordination and ongoing support.",
    },
  ];

  const faqs = [
    {
      question: "What services does Shree Shyam Enterprise provide?",
      answer: "We provide industrial manpower supply and housekeeping services. Contact our team for specific requirements.",
    },
    {
      question: "Which industries do you serve?",
      answer: "We focus on industrial and manufacturing-related workforce requirements. Contact us to discuss your industry.",
    },
    {
      question: "How can I request manpower services?",
      answer: "You can contact our team through the inquiry form and share your manpower requirements.",
    },
    {
      question: "How can I contact Shree Shyam Enterprise?",
      answer: "Visit our Contact page to find the company's contact details and send an inquiry.",
    },
  ];

  return (
    <>

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* COMPANY HIGHLIGHTS */}
        <section className="highlights-section">
          <div className="home-container">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div className="highlight-card" key={index}>
                  <div className="highlight-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industries-section section-padding" id="industries">
          <div className="home-container">

            <div className="section-heading">
              <span>OUR INDUSTRIES</span>
              <h2>Industries We Serve</h2>
              <p>
                Supporting businesses with workforce solutions
                across different industrial sectors.
              </p>
            </div>

            <div className="industries-grid">
              {industries.map((item, index) => (
                <div className="industry-card" key={index}>
                  <div className="industry-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="industry-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link to="/services">Explore Services →</Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-section section-padding">
          <div className="home-container why-grid">

            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"
                alt="Industrial workforce"
              />
              <div className="why-image-label">
                <h3>Shree Shyam Enterprise</h3>
                <p>Your Business Support Partner</p>
              </div>
            </div>

            <div className="why-content">
              <span className="section-label">WHY CHOOSE US</span>
              <h2>A Reliable Partner for Your Workforce Needs</h2>
              <p>
                We focus on understanding business requirements
                and providing professional manpower and
                housekeeping solutions.
              </p>

              <div className="reasons-list">
                {reasons.map((reason, index) => (
                  <div className="reason-item" key={index}>
                    <span>✓</span>
                    <h4>{reason}</h4>
                  </div>
                ))}
              </div>

              <Link to="/about" className="home-primary-btn">
                Know More About Us →
              </Link>
            </div>

          </div>
        </section>

        {/* WORK PROCESS */}
        <section className="process-section section-padding">
          <div className="home-container">

            <div className="section-heading">
              <span>HOW WE WORK</span>
              <h2>Our Work Process</h2>
              <p>
                A structured approach to understanding
                and fulfilling workforce requirements.
              </p>
            </div>

            <div className="process-grid">
              {steps.map((step, index) => (
                <div className="process-card" key={index}>
                  <span className="process-number">{step.number}</span>
                  <div className="process-line"></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* OUR CLIENTS */}
        <section className="clients-section section-padding">
          <div className="home-container">
            <div className="section-heading">
              <span>OUR BUSINESS ASSOCIATES</span>
              <h2>Our Clients & Partners</h2>
              <p>
                Building professional relationships through
                business collaboration.
              </p>
            </div>

            <div className="clients-message">
              <h3>Trusted Business Relationships</h3>
              <p>
                We value every business association and
                professional partnership.
              </p>
              <Link to="/certificates" >
                View Company Credentials →
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonial-section section-padding">
          <div className="home-container">
            <div className="section-heading">
              <span>CLIENT FEEDBACK</span>
              <h2>What Our Clients Say</h2>
              <p>
                Feedback from our business partners.
              </p>
            </div>

            <div className="testimonial-placeholder">
              <div className="quote-mark">“</div>
              <h3>Our Clients' Experience Matters</h3>
              <p>
                Genuine client feedback will be featured here.
                We believe in transparent and professional
                business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section section-padding">
          <div className="home-container">

            <div className="section-heading">
              <span>HAVE QUESTIONS?</span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to common questions about our services.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={index}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="home-container cta-content">
            <span>LET'S WORK TOGETHER</span>
            <h2>Looking for Reliable Manpower Solutions?</h2>
            <p>
              Get in touch with Shree Shyam Enterprise
              and discuss your business requirements.
            </p>
            <button
                className="inquiry-btn"
                onClick={() => setInquiryOpen(true)}
            >
                Send Your Inquiry →
            </button>
          </div>
        </section>

    </main>

    <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
    />
    </>
  );
}

export default Home
