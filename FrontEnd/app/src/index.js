import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Constructor from './pages/ConstructorPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Constructor from './pages/ConstructorPage'; 
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} /> 
//         <Route path="/constructor" element={<Constructor />} /> 
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
