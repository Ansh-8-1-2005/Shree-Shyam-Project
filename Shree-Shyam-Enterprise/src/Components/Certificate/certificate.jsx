
import React from "react";
import { Link } from "react-router-dom";
import "./certificate.css";

const certificates = [
  {
    id: 1,
    title: "Company Registration Certificate",
    description: "Official business registration document.",
    file: null,
  },
  {
    id: 2,
    title: "GST Registration Certificate",
    description: "Goods and Services Tax registration document.",
    file: null,
  },
  {
    id: 3,
    title: "MSME / Udyam Registration",
    description: "MSME registration and business details.",
    file: null,
  },
  {
    id: 4,
    title: "Other Business Documents",
    description: "Additional applicable business documents.",
    file: null,
  },
];

function Certificates() {
  return (
    <div className="certificates-page">

      {/* Introduction */}
      <section className="certificates-intro">
        <span className="certificates-label">TRUST & TRANSPARENCY</span>
        <h2>Our Certifications & Business Documents</h2>
        <p>
          At Shree Shyam Enterprise, we believe in transparent business
          practices and maintaining applicable business documentation.
          Explore our available certificates and registration documents.
        </p>
      </section>

      {/* Certificate Gallery */}
      <section className="certificate-gallery">
        <div className="certificate-gallery-heading">
          <h2>Our Documents</h2>
          <p>Business registrations and applicable certificates.</p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>

              <div className="certificate-preview">
                <div className="certificate-document">
                  <div className="document-icon">▤</div>
                  <span>DOCUMENT PREVIEW</span>
                  <h3>{certificate.title}</h3>
                  <div className="document-line"></div>
                  <div className="document-line short"></div>
                  <div className="document-line"></div>
                  <div className="document-seal">SSE</div>
                </div>
              </div>

              <div className="certificate-card-content">
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>

                {certificate.file ? (
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-view-btn"
                  >
                    View Certificate →
                  </a>
                ) : (
                  <span className="certificate-pending">
                    Document not uploaded
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Documentation Note */}
      <section className="certificate-note">
        <div>
          <span className="certificates-label">OUR COMMITMENT</span>
          <h2>Transparency in Every Business Relationship</h2>
          <p>
            We are committed to maintaining applicable documentation
            and supporting our clients with relevant business information
            as required.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="certificates-cta">
        <h2>Need More Business Information?</h2>
        <p>
          Contact our team for documentation and business-related enquiries.
        </p>
        <Link to="/contact" className="certificates-cta-btn">
          Contact Us →
        </Link>
      </section>

    </div>
  );
}

export default Certificates;
