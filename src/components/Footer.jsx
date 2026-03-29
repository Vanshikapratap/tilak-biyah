import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo logo-footer cursor-pointer" onClick={() => window.scrollTo(0,0)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.png" alt="Tilak Byaah Logo" className="logo-img-footer" />
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'red', fontFamily: 'var(--font-heading)' }}>Tilak Byaah</span>
          </div>
          <p className="footer-desc">
            Curating India's most luxurious and traditional marriage gardens to make your special day perfectly memorable.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gardens">Our Venues</a></li>
            <li><a href="#services">Services offered</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>📞 +91 90659 39009, +91 88629 22293</p>
          <p>✉️ hello@tilakbyaah.com</p>
          <p>📍 Patna, Bihar, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tilak Byaah. Celebrating Indian Weddings. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
