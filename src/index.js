import React from 'react';
import ReactDOM from 'react-dom/client'; // Atualizado para React 18
import './App.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Nova forma de renderizar o app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
