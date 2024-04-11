import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer /> 
  </React.StrictMode>
);

