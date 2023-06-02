import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> Veroorzaakt problemen met Axios Abortcontroller ivm 2x renderen
    <Router>
      <App />
    </Router>
  // </React.StrictMode>
);
