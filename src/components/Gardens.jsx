import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';
import './Gardens.css';

const Gardens = ({ selectedGarden, setSelectedGarden }) => {
  const { gardens } = useData();
  const [filterCity, setFilterCity] = React.useState('All');

  const districts = [
    'All', 'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 
    'Purnia', 'Ara', 'Begusarai', 'Chhapra', 'Katihar', 'Munger', 
    'Saharsa', 'Samastipur', 'Motihari', 'Hajipur'
  ];
  const filteredGardens = filterCity === 'All' ? gardens : gardens.filter(g => g.location.includes(filterCity));

  return (
    <section id="gardens" className="gardens-section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Exclusive Marriage Gardens</h2>
          <p className="section-subtitle">Select a venue that mirrors the grandeur of your love story</p>
        </motion.div>
        
        <div className="city-filter-bar text-center" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {districts.map(city => (
            <motion.button 
              key={city}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterCity(city)}
              className={`btn-outline ${filterCity === city ? 'btn-selected' : ''}`}
              style={{ padding: '6px 16px', borderRadius: '30px', borderWidth: '1px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {city !== 'All' && <span style={{fontSize: '1rem'}}>📍</span>} {city}
            </motion.button>
          ))}
        </div>

        <div className="gardens-grid">
          {filteredGardens.map((garden, index) => (
            <motion.div 
              key={garden.id} 
              className={`garden-card ${selectedGarden?.id === garden.id ? 'selected' : ''}`}
              onClick={() => setSelectedGarden(garden)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="card-image-wrapper">
                <img src={garden.image} alt={garden.name} className="card-image" />
                {selectedGarden?.id === garden.id && (
                  <div className="selected-badge">Selected</div>
                )}
              </div>
              <div className="card-content">
                <h3 className="card-title">{garden.name}</h3>
                <p className="card-location"><span className="text-gold">📍</span> {garden.location}</p>
                <p className="card-desc">{garden.description}</p>
                <div className="card-details">
                  <span>👥 {garden.capacity}</span>
                </div>
                <button 
                  className={`btn-select ${selectedGarden?.id === garden.id ? 'btn-selected' : 'btn-outline'}`}
                >
                  {selectedGarden?.id === garden.id ? 'Venue Selected' : 'Select Venue'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gardens;
