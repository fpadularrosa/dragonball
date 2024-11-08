import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.API_URL = 'http://localhost:3001';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);