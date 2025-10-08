// src/pages/Events.jsx

import React from 'react';
import EventCard from '../components/events/EventCard.jsx';

// Sample Event Data (All citation markers removed for clean syntax)
const eventData = [
// Inside the eventData array
{
  id: 1,
  name: 'UDBHAV', // Your flagship event
  status: 'Past Event',
  tagline: 'The annual flagship event showcasing entrepreneurship.',
  details: {
    // These four lines MUST be cleaned of all bracketed text
    about: 'Details about UDBHAV and its successful run.', // About it 
    winners: 'List of winners from the previous year.', // Winners 
    workflow: 'Link to workflow video or diagram explaining how the event ran.', // Workflow 
    registration: 'Past registration is now closed.', // Registration form 
    prizes: 'Information on the prizes awarded in the past.',
  }
},
 // Inside the eventData array, this is the second block:
{
  id: 2,
  name: 'Ideathon', // Upcoming event
  status: 'Upcoming',
  tagline: 'Unleash your innovative ideas!',
  details: {
    about: 'Details about the upcoming Ideathon event.', // About the event
    benefits: 'Prizes and benefits for participants.', // Benefits
    video: 'Video intro for the event.', // Video intro
    workflow: 'The process and stages of the Ideathon.', // Workflow
    prizes: 'Prizes for the top innovators.', // Prizes
    registration: 'Coming Soon', // Coming Soon
  }
},
];


const Events = () => {
  return (
    <section id="events" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--color-background)' }}>
      <h2>Our Upcoming and Past Events</h2>
      
      <div className="event-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '40px' }}>
        {/* Map the data to render an EventCard component for each event */}
        {eventData.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
          />
        ))}
      </div>
    </section>
  );
};

// This is the crucial line for fixing the previous import error
export default Events;