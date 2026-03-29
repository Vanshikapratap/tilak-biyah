import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ selectedGarden }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    address: '',
    budget: '',
    eventName: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    let message = `Hello Tilak Byaah! I would like to inquire about wedding arrangements.\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Contact Number:* ${formData.number}\n`;
    message += `*Address/City:* ${formData.address}\n`;
    message += `*Event Name:* ${formData.eventName}\n`;
    message += `*Event Date:* ${formData.date}\n`;
    message += `*Estimated Budget:* ${formData.budget}\n`;
    
    if (selectedGarden) {
      message += `*Interested Venue:* ${selectedGarden.name}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919065939009"; 
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const emailAddress = "hello@tilakbyaah.com";
  const telUrl = `tel:+919065939009`;

  return (
    <section id="contact" className="contact-section">
      <div className="container flex-contact">
        
        {/* Contact Form Details */}
        <div className="contact-card glass">
          <div className="contact-content">
            <h2 className="section-title" style={{color: 'var(--text-light)'}}>Send an Inquiry</h2>
            <p style={{color: 'var(--text-light)', opacity: 0.9, marginBottom: '30px'}}>
              Fill out the form below and we will get back to you with the best marriage garden options in Bihar.
            </p>
            
            <form onSubmit={handleWhatsAppSubmit} className="inquiry-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="number" required placeholder="10-digit mobile number" value={formData.number} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Event Name</label>
                <input type="text" name="eventName" required placeholder="e.g. Marriage, Birthday" value={formData.eventName} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Event Date</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Your Address / City</label>
                <input type="text" name="address" required placeholder="e.g. Patna, Bihar" value={formData.address} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Estimated Budget</label>
                <select name="budget" required value={formData.budget} onChange={handleChange}>
                  <option value="" disabled>Select a budget range</option>
                  <option value="Under 2 Lakhs">Under 2 Lakhs</option>
                  <option value="2 - 5 Lakhs">2 - 5 Lakhs</option>
                  <option value="5 - 10 Lakhs">5 - 10 Lakhs</option>
                  <option value="Above 10 Lakhs">Above 10 Lakhs</option>
                </select>
              </div>

              {selectedGarden && (
                <div className="selected-summary text-left mb-4">
                  <p>Venue Selected: <strong className="text-gold">{selectedGarden.name}</strong></p>
                </div>
              )}

              <button type="submit" className="contact-btn whatsapp full-width mt-4">
                <span className="icon">💬</span>
                <span className="text">Send Query via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="alternative-contact glass">
          <h3 style={{color: 'var(--text-light)', marginBottom: '20px'}}>Or Reach Us Directly</h3>
          <div className="alt-methods">
            <a href={telUrl} className="contact-btn call alt-btn">
              <span className="icon">📞</span>
              <span className="text">Call +91 90659 39009</span>
            </a>
            <a href="tel:+918862922293" className="contact-btn call alt-btn">
              <span className="icon">📞</span>
              <span className="text">Call +91 88629 22293</span>
            </a>
            <a href={`mailto:${emailAddress}`} className="contact-btn email alt-btn">
              <span className="icon">✉️</span>
              <span className="text">Email Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
