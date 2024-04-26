import React from 'react';


const MyInput = (props) => {
  return (
    <input className='inputName' placeholder={props.placeholder}>
      {props.children}
    </input>
  );
};

export default MyInput;