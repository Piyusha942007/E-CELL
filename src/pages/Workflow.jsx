// src/pages/Workflow.jsx

import React from 'react';

const Workflow = () => {
  // The video link provided: https://g.co/gemini/share/cdb814900314 [cite: 63]
  const videoEmbedUrl = "YOUR_EMBED_URL_HERE"; // Get the actual embed URL from the video source

  return (
    <section className="workflow" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h2>Workflow</h2>
      <p>A video explaining the workflow[cite: 64]:</p>
      
      {/* Placeholder for the embedded video player */}
      <div className="video-container" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <iframe
          width="100%"
          height="450"
          src={videoEmbedUrl} 
          title="Workflow Explanation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={{ marginTop: '10px', fontSize: '0.8rem' }}>
            (something similar which will explain the workflow) [cite: 64]
        </p>
      </div>

    </section>
  );
};

export default Workflow;