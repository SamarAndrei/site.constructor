import React from 'react';
import classes from'./StylesText.css'; 

const Text = (props) => {
  return (
    <text className='text'> 
       {props.children} 
    </text>
  );
};

export default Text;