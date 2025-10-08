import React, { useState, useEffect } from 'react';

// Components
import ProgressiveWord from './components/loading/ProgressiveWord.jsx';
import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';

// Pages/Sections
import LandingPage from './pages/LandingPage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Workflow from './pages/Workflow.jsx';
import Events from './pages/Events.jsx';
// Note: TeamMembers and ContactUs handled by teammate

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Logic to hide the pre-loader when major assets are ready 
  useEffect(() => {
    // A placeholder to ensure the animation is seen for a minimum time (e.g., 2s)
    const minDisplayTime = 2000;
    
    // Simulate complex asset loading (window.onload event  detection)
    const assetsReadyPromise = new Promise(resolve => {
        // The only JavaScript needed is a very small script at the end of the page to detect when the rest of the site's major assets are ready (window.onload) 
        window.onload = resolve; 
    });

    Promise.all([
        new Promise(resolve => setTimeout(resolve, minDisplayTime)),
        assetsReadyPromise
    ]).then(() => {
        // Tell the pre-loader to hide 
        setIsLoading(false);
    });
    
    // Cleanup is not strictly needed here but good practice
    return () => { 
        window.onload = null;
    }
    
  }, []);

  return (
    <>
      {/* 1. Loading Screen: Displayed when isLoading is true */}
      {isLoading && <ProgressiveWord />}
      
      {/* 2. Main Content: Displayed when isLoading is false */}
      {!isLoading && (
        <div className="site-content">
          <Header />
          <main>
            <LandingPage />
            {/* AboutUs section includes the 'Connect Innovate Empower' objectives [cite: 38-60] */}
            <AboutUs /> 
            {/* Workflow section [cite: 61] */}
            <Workflow />
            {/* Events section [cite: 66] */}
            <Events />
            {/* Team Members and Contact Us sections will be placed here by your teammate */}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;