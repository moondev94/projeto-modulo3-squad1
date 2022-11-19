import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavMenu from './Nav';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <NavMenu />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
