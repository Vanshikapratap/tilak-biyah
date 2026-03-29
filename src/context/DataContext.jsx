import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [gardens, setGardens] = useState([
    {
      id: 1,
      name: 'Raj Darbar Lawn',
      location: 'Patna, Bihar',
      capacity: '1000 - 2500 Guests',
      image: 'https://images.unsplash.com/photo-1583878545126-2f1ca0142714?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A magnificent open lawn in the heart of Patna, perfectly suited for grand Bihari weddings and grand feasts.'
    },
    {
      id: 2,
      name: 'Bodhi Tree Banquets',
      location: 'Gaya, Bihar',
      capacity: '500 - 1500 Guests',
      image: 'https://images.unsplash.com/photo-1601121868898-4581104b29de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Experience elegance and deep cultural roots near the spiritual heart of Bihar with state-of-the-art facilities.'
    },
    {
      id: 3,
      name: 'Mithila Grand Resort',
      location: 'Muzaffarpur, Bihar',
      capacity: '800 - 3000 Guests',
      image: 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Featuring traditional Mithila art decor, a massive courtyard, and premium hospitality for your special day.'
    }
  ]);

  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Exquisite Decoration',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Transform your venue with our breathtaking decor. From traditional marigold arrangements and grand mandaps to modern floral setups and spectacular lighting, our decorators bring your dream Bihari wedding to life.'
    },
    {
      id: 2,
      title: 'Authentic Fooding & Catering',
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A grand feast for your guests featuring authentic Bihari delicacies like Litti Chokha, along with a multi-cuisine spread. Our expert chefs ensure every dish is crafted with love and tradition.'
    },
    {
      id: 3,
      title: 'Premium Makeup Artist Booking',
      icon: '💄',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Look your absolute best on your special day. We partner with top-tier makeup artists who specialize in traditional and modern bridal looks, ensuring you radiate elegance and confidence.'
    },
    {
      id: 4,
      title: 'Venue Booking',
      icon: '🏛️',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Hassle-free venue booking for all your events. We ensure you get the best locations that fit your style, guest list, and budget seamlessly.'
    },
    {
      id: 5,
      title: 'Birthday & Event Booking',
      icon: '🎂',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'From grand 1st birthdays to milestones, we provide venues, decor, and entertainment tailored to make your celebration memorable.'
    },
    {
      id: 6,
      title: 'Corporate Booking',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional corporate event planning. We offer exceptional venues, state-of-the-art facilities, and premium catering for conferences and meetings.'
    },
    {
      id: 7,
      title: 'Honeymoon Packages',
      icon: '✈️',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Curated romantic getaways to the most breathtaking destinations. Let us plan the perfect start to your married life with luxury and comfort.'
    },
    {
      id: 8,
      title: 'Photography & Videography',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Capture every beautiful moment of your special day. Our partnered professional photographers specialize in candid, traditional, and drone wedding shoots.'
    },
    {
      id: 9,
      title: 'Return Gifts Available',
      icon: '🎁',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Express your gratitude with our curated collection of elegant return gifts, customized perfectly for your guests as a beautiful memory of your celebration.'
    }
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded simple admin credentials
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'admin123';

  const login = (username, password) => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const updateGarden = (id, updatedData) => {
    setGardens(gardens.map(g => g.id === id ? { ...g, ...updatedData } : g));
  };

  const updateService = (id, updatedData) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updatedData } : s));
  };

  return (
    <DataContext.Provider value={{ 
      gardens, setGardens, updateGarden,
      services, setServices, updateService,
      isAuthenticated, login, logout
    }}>
      {children}
    </DataContext.Provider>
  );
};
