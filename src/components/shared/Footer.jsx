// src/components/shared/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '30px 40px', 
      backgroundColor: 'var(--color-text)', 
      color: 'white', 
      textAlign: 'center',
      marginTop: '50px' 
    }}>
      <p>&copy; {new Date().getFullYear()} E-Cell PCCOER. All rights reserved.</p>
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        Connect | Innovate | Empower
      </p>
    </footer>
  );
};

export default Footer;