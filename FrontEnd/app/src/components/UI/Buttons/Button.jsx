import React from 'react';



const MyButton = (props) => {
  return (
    <button className='button'>
      {props.children}
    </button>
  );
};

export default MyButton;
