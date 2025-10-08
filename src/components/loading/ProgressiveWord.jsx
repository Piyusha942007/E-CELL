// src/components/loading/ProgressiveWord.jsx
import React, { useEffect, useState } from "react";
import "./ProgressiveWord.css";

// Import sounds & gif
import swipePopSound from "../../assets/swipe_pop.mp3";
import launchIgniteSound from "../../assets/launch_ignite.mp3";
import fireAnimation from "../../assets/fire_launch.gif";

// Play sound utility
const playSound = (src) => {
  if (src) {
    const audio = new Audio(src);
    audio.volume = 0.6;
    audio.play().catch((e) => console.log("Sound blocked:", e));
  }
};

const ProgressiveWord = () => {
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    // 1. INNOVATE sound
    const t1 = setTimeout(() => playSound(swipePopSound), 0);

    // 2. CONNECT sound
    const t2 = setTimeout(() => playSound(swipePopSound), 800);

    // 3. LAUNCH + Fire burst
    const t3 = setTimeout(() => {
      playSound(launchIgniteSound);
      setShowFire(true);
      setTimeout(() => setShowFire(false), 800);
    }, 1600);

    // 4. Final zoom transition
    const t4 = setTimeout(() => {
      document.body.classList.add("launch-zoom");
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.classList.remove("launch-zoom");
    };
  }, []);

  return (
    <div id="pre-loader">
      <h1>
        <span className="word-1 dynamic-word">INNOVATE</span>
        <span className="word-2 dynamic-word">CONNECT</span>
        <span className="word-3 launch dynamic-word">LAUNCH</span>
      </h1>

      {showFire && (
        <img src={fireAnimation} alt="Fire Burst" className="fire-animation" />
      )}
    </div>
  );
};

export default ProgressiveWord;

