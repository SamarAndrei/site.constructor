import React from 'react';
import './StylesButton.css';

const MyButton = (props) => {
    return (
        <button className='button' style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default MyButton;
