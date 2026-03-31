import React from 'react';
import './Membership.css';

const Membership = () => {
  return (
    <section id="membership" className="membership-section">
      <div className="container">
        <div className="membership-content-wrapper glass">
          <div className="membership-image-col">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Partnership Handshake"
              className="handshake-img"
            />
          </div>
          <div className="membership-text-col">
            <h2 className="section-title text-gold">Partner with Tilak byah</h2>
            <p className="partnership-desc">
              Join our exclusive network of premium marriage gardens and event vendors.
              We are always looking to collaborate with passionate professionals to create
              unforgettable Bihari wedding experiences.
            </p>
            <p className="partnership-highlight">
              <strong>Join our exclusive partnership program. Let's grow together.</strong>
            </p>
            <a href="#list-business" className="btn-primary">Become a Partner Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
