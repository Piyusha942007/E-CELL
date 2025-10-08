// src/main.jsx

import React from 'react';
// 💡 CORRECT: You must import from 'react-dom/client'
import ReactDOM from 'react-dom/client'; 
import App from './App.jsx';
import './styles/global.css';

// The rest of the file should look like this:
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);