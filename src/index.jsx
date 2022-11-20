import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavMenu from './Nav';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';


ReactDOM.render(
  <React.StrictMode>
    <NavMenu/>
    <App/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
