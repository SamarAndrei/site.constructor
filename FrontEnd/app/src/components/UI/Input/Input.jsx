import React from 'react';


const MyInput = (props) => {
  return (
    <input className='inputName'>
      {props.children}
    </input>
  );
};

export default MyInput;