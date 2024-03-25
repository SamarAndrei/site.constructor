import React from 'react';
import classes from './StylesInput.css';

const Input = (props) => {
  return (
    <input className='inputName' {...props}/>
  );
};

export default Input;