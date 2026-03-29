import React from 'react';
import { motion } from 'framer-motion';
import './Onboarding.css';

const onboardingSteps = [
  {
    id: 1,
    title: '1. Discover Your Venue',
    description: 'Explore our curated list of exclusive marriage gardens across Bihar. Find the perfect setting that matches your vision, from grand lawns to elegant banquet halls.',
    icon: '🔍'
  },
  {
    id: 2,
    title: '2. Select Your Services',
    description: 'Customize your experience by choosing our premium services. We offer complete packages including exquisite traditional decor and authentic fooding experiences.',
    icon: '✨'
  },
  {
    id: 3,
    title: '3. Connect With Us',
    description: 'Use our streamlined contact form to send us your requirements. We instantly receive your inquiry via WhatsApp and email, ensuring a lightning-fast response.',
    icon: '💬'
  },
  {
    id: 4,
    title: '4. Celebrate',
    description: 'Relax as our dedicated team takes over. From finalizing the booking to managing the intricate details on your big day, we ensure everything is flawless.',
    icon: '🎉'
  }
];

const Onboarding = () => {
  return (
    <section id="how-it-works" className="onboarding-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Your journey to a perfect wedding in 4 simple steps</p>
        </motion.div>

        <div className="onboarding-timeline">
          {onboardingSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-icon-container">
                <div className="timeline-icon">{step.icon}</div>
                {index < onboardingSteps.length - 1 && <div className="timeline-connector"></div>}
              </div>
              
              <div className="timeline-content glass">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
