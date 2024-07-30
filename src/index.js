import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  // Add GTM container ID
  gtmId: process.env.REACT_APP_GTM_ID
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);