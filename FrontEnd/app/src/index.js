import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
//import Constructor from './pages/ConstructorPage';
import './index.css';
import LoginPage from './pages/LoginPage'
// import NotFoundPage from './pages/NotFoundPage'
import Patterns from './pages/Patterns';
import EmptyPattern from './pages/EmptyPattern'
import OnePattern from './pages/OnePattern'
import NoMatchPage from './pages/NoMatchPage';
import RegisterPage from './pages/RegisterPage'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Pattern" element={<Patterns/>} /> 
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
        <Route path='/EmptyPattern' element={<EmptyPattern/>}/>
        <Route path='/OnePattern' element={<OnePattern/>}/>
        <Route path='*' element={<NoMatchPage/>}/>

      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);
