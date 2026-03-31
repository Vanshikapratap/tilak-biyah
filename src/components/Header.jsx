import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-content">
        <div className="logo cursor-pointer" onClick={() => window.scrollTo(0, 0)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.jpg" alt="Tilak byah Logo" className="logo-img" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'red', fontFamily: 'var(--font-heading)' }}>Tilak byah</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#gardens">Venues</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn-primary" style={{ padding: '8px 20px' }}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
