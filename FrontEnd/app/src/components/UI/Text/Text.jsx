import React from 'react';


const MyText = (props) => {
  return (
    <text className='text'> 
       {props.children} 
    </text>
  );
};

export default MyText;