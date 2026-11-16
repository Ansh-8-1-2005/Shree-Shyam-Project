
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import InquiryModal from "./Components/Home/Inquery";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (<>
    <header className="main-header">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">SS</div>
          <div className="logo-text">
            <h2>SHREE SHYAM</h2>
            <span>ENTERPRISE</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Our Services</Link>
          <Link to="/certificates" onClick={closeMenu}>Certificates</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>

          <button
            className="inquiry-btn"
            onClick={() => setInquiryOpen(true)}>
            Send Your Inquiry →
          </button>
        </nav>

      </div>
    </header>
    <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
    />
    </>
  );
}

export default Navbar;
