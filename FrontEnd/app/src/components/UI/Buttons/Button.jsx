import React from 'react';



const MyButton = (props) => {

  return (
    <button onClick={() => {alert('12')}} className='button'>
      {props.children}

    </button>
  );
};

export default MyButton;
