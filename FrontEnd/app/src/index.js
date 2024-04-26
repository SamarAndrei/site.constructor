import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Constructor from './pages/ConstructorPage';
import './index.css';
import LoginPage from './pages/LoginPage'
// import NotFoundPage from './pages/NotFoundPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="*" element={<Constructor />} /> 
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
