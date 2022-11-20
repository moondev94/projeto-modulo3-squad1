import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavMenu from './Nav';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './banner';
import Section from './section';

ReactDOM.render(
  <React.StrictMode>
    <NavMenu />
    <Banner />
    <Section />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
