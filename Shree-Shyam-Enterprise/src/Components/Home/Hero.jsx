
import { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  {
    image:
      "../photos/hero1.jpg",
  },
  {
    image:
      "../photos/hero2.jpg",
  },
  {
    image:
      "../photos/hero3.jpg",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-background ${
            currentSlide === index ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">

          <span className="hero-subtitle">
            WELCOME TO SHREE SHYAM ENTERPRISE
          </span>

          <h1>
            Reliable Manpower.
            <br />
            <span>Professional Solutions.</span>
          </h1>

          <p>
            Your Trusted Partner for Industrial Manpower Supply,
            Housekeeping Services and Professional Business Solutions.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="hero-btn primary-btn">
              Explore Our Services →
            </a>

            <a href="/contact" className="hero-btn secondary-btn">
              Contact Us
            </a>
          </div>

          <div className="hero-features">
            <span>✓ Skilled Manpower</span>
            <span>✓ Quality Services</span>
            <span>✓ Trusted Partnership</span>
          </div>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? "selected" : ""}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
