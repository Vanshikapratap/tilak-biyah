import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video 
        src="https://v1.pinimg.com/videos/iht/expMp4/ed/3f/7f/ed3f7fc7cdc835e5d5fbc07ba1f5310b_720w.mp4" 
        autoPlay loop muted playsInline 
        className="hero-video-bg"
      />
      <div className="hero-overlay"></div>
      <motion.div 
        className="container hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="hero-text">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span style={{color: 'red'}}>Tilak Byaah</span> <br/>
            <span style={{ fontSize: '1.6rem', fontWeight: 'normal', color: 'white', display: 'block', marginTop: '15px' }}>
              Parampara bhi, Profession bhi
            </span>
          </motion.h1>
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover the most exquisite and grand marriage gardens for your special day. 
            Celebrate traditions in spectacular venues tailored for Indian weddings.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#gardens" className="btn-primary">Explore Venues</a>
            <a href="#contact" className="btn-outline" style={{ background: 'var(--bg-light)', color: 'var(--primary-red)' }}>Enquire Now</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
