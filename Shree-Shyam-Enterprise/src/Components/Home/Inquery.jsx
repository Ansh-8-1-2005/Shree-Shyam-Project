
import { useEffect } from "react";
import "./Home.css";

function InquiryModal({ isOpen, onClose }) {

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend API integration baad mein karenge.
    alert("Inquiry form submitted successfully!");

    event.target.reset();
    onClose();
  };

  return (
    <div className="inquiry-backdrop" onMouseDown={onClose}>
      <div
        className="inquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        onMouseDown={(event) => event.stopPropagation()}
      >

        <button
          className="inquiry-close"
          onClick={onClose}
          aria-label="Close inquiry form"
        >
          &times;
        </button>

        <div className="inquiry-header">
          <span>LET'S CONNECT</span>
          <h2 id="inquiry-title">Send Your Inquiry</h2>
          <p>
            Tell us about your business requirements.
            Our team will get in touch with you.
          </p>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>

          <div className="inquiry-fields">

            <div className="inquiry-field">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="inquiry-field">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Enter company name"
              />
            </div>

            <div className="inquiry-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="inquiry-field">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="inquiry-field full-field">
              <label>Service Required *</label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Industrial Manpower Supply">
                  Industrial Manpower Supply
                </option>
                <option value="Housekeeping Services">
                  Housekeeping Services
                </option>
                <option value="Other Business Requirements">
                  Other Business Requirements
                </option>
              </select>
            </div>

            <div className="inquiry-field full-field">
              <label>Your Message *</label>
              <textarea
                rows="4"
                placeholder="Describe your requirements..."
                required
              ></textarea>
            </div>

          </div>

          <button type="submit" className="inquiry-submit">
            Submit Inquiry →
          </button>

          <p className="inquiry-note">
            Your information will be used to respond to your inquiry.
          </p>

        </form>
      </div>
    </div>
  );
}

export default InquiryModal;
