// src/components/shared/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 40px', 
      backgroundColor: '#fff', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        E-CELL
      </div>
      
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '25px' }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Home</a></li>
          <li><a href="#about-us" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>About Us</a></li>
          <li><a href="#events" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Events</a></li>
          <li><a href="#team" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Team</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'var(--color-text)' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;