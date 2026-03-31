import React, { useState } from 'react';
import './OnboardingListing.css';

const OnboardingListing = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: 'Marriage Garden',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the WhatsApp message for listing onboarding
    const text = `Hello Tilak byah, I want to list my business!\n\nName: ${formData.fullName}\nBusiness Name: ${formData.businessName}\nType: ${formData.businessType}\nPhone: ${formData.phone}\nCity/Location: ${formData.city}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "919065939009";

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="list-business" className="onboarding-listing-section">
      <div className="container">
        <div className="listing-wrapper glass">
          <div className="listing-info">
            <h2 className="section-title">List Your Business</h2>
            <p className="section-subtitle text-left">
              Join the largest network of premium Bihari wedding vendors.
              Fill out this quick onboarding form, and our team will get your
              business live on Tilak byah!
            </p>
            <ul className="perks-list">
              <li>✔️ Reach thousands of couples globally</li>
              <li>✔️ Dedicated Partner Support</li>
            </ul>
          </div>

          <div className="listing-form-container">
            <form onSubmit={handleSubmit} className="listing-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Rahul Kumar" />
                </div>
                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required placeholder="Rahul Decorators" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Business Type</label>
                  <select name="businessType" value={formData.businessType} onChange={handleChange}>
                    <option value="Marriage Garden / Banquet">Marriage Garden / Banquet</option>
                    <option value="Decoration Service">Decoration Service</option>
                    <option value="Catering / Fooding">Catering / Fooding</option>
                    <option value="Makeup Artist">Makeup Artist</option>
                    <option value="Photography">Photography</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="Patna, Bihar" />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
              </div>

              <button type="submit" className="btn-primary full-width submit-btn">Submit Listing Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingListing;
