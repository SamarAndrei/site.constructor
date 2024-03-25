import React from 'react';


const Text = (props) => {
  return (
    <text className='text'> 
       {props.children} 
    </text>
  );
};

export default Text;