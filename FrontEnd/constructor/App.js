import React, { useState } from 'react';
import './App.css';
import PlusButton from './components/PlusButton'
import ComponentSelector from './components/ComponentSelector'
import ParentComponent from './components/ParentComponent'



function App() {
  return (
   <div>
    <ParentComponent></ParentComponent>
   </div> 
  );
}

export default App;
