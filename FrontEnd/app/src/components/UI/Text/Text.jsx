import React from 'react';
import './StylesText.css'

const MyText = (props) => {
  return (
    <text className='text'> 
       {props.children} 
    </text>
  );
};

export default MyText;