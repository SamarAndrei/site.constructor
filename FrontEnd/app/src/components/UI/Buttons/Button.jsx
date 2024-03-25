import React from 'react';
import classes from  './StylesButtons.css';


const Button = (props) => {
  return (
    <button className='textButton'>
      {props.children}
    </button>
  );
};

export default Button;
