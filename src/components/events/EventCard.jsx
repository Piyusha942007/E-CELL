// src/components/events/EventCard.jsx

import React, { useState } from 'react';

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Use status to determine color/style
  const statusColor = event.status === 'Upcoming' ? 'var(--color-secondary)' : '#6c757d';

  return (
    <div 
      className="event-card" 
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        padding: '30px', 
        maxWidth: '900px', 
        margin: '0 auto',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        [cite_start]<h3 style={{ margin: 0 }}>{event.name}</h3> {/* [cite: 79, 85] */}
        <span 
          style={{ 
            padding: '5px 10px', 
            borderRadius: '5px', 
            backgroundColor: statusColor, 
            color: 'white', 
            fontWeight: 'bold' 
          }}
        >
          [cite_start]{event.status} {/* [cite: 84] */}
        </span>
      </div>
      
      <p style={{ marginTop: '10px', color: '#555' }}>{event.tagline}</p>

      {/* Conditional rendering for detailed content */}
      {isExpanded && (
        <div style={{ marginTop: '20px', textAlign: 'left', borderTop: '1px dashed #eee', paddingTop: '15px' }}>
          [cite_start]<h4>About the Event</h4> {/* [cite: 81, 87] */}
          <p>{event.details.about}</p>
          
          <h4 style={{ marginTop: '10px' }}>Key Details:</h4>
          <ul>
            [cite_start]<li>**Workflow:** {event.details.workflow} {/* [cite: 83, 90] */}</li>
            [cite_start]<li>**Registration:** {event.details.registration} {/* [cite: 80, 86] */}</li>
            [cite_start]{event.details.winners && <li>**Winners:** {event.details.winners} {/* [cite: 82] */}</li>}
            [cite_start]{event.details.prizes && <li>**Prizes/Benefits:** {event.details.prizes} {/* [cite: 89, 91] */}</li>}
            {/* Add placeholders for video/other specific content */}
          </ul>
        </div>
      )}
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: 'var(--color-primary)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        {isExpanded ? 'Show Less' : 'Show Details'}
      </button>

    </div>
  );
};

export default EventCard;