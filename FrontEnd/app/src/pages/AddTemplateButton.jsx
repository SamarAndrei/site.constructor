// AddTemplateButton.js
import React from 'react';
import './AddTemplateButton.css';

const AddTemplateButton = ({ onClick, position }) => {
  return (
    <div className={`add-template-button-container add-template-button-container--${position}`}>
      <button className="add-template-button" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default AddTemplateButton;
