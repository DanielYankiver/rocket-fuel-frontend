import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <App className="app" />
        {/* <Routes /> */}
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
