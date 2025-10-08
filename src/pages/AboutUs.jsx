// src/pages/AboutUs.jsx

import React from 'react';
// Assume your teammate provides an Objectives component
// import ObjectivesSection from '../components/objectives/ObjectivesSection.jsx'; 

const AboutUs = () => {
  return (
    <section id="about-us" style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>About Us</h2>
      
      {/* Simple about us text */}
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
        <p>
          We are the Entrepreneurship Cell (E-Cell) dedicated to fostering a spirit of innovation, connection, 
          and empowerment among young entrepreneurs. Our goal is to provide a platform for students to 
          develop their ideas, gain real-world skills, and build a strong network.
        </p>
        <p style={{ marginTop: '15px' }}>
          Through various events, workshops, and mentorship programs, we aim to be the launching pad 
          for the next generation of successful startups.
        </p>
      </div>

      <div className="objectives-container" style={{ marginTop: '60px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Objectives</h3>
        
        {/* Placeholder for the Connect/Innovate/Empower dynamic section */}
        {/* Once your teammate finishes their component, replace this with: <ObjectivesSection /> */}
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', textAlign: 'center' }}>
            <div className="objective-card">
                <h4>Connect</h4> {/* */}
                <p>Text will appear here when hovered/clicked.</p> {/* */}
            </div>
            <div className="objective-card">
                <h4>Innovate</h4> {/* */}
                <p>Text will appear here when hovered/clicked.</p> {/* */}
            </div>
            <div className="objective-card">
                <h4>Empower</h4> {/* */}
                <p>Text will appear here when hovered/clicked.</p> {/* */}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;