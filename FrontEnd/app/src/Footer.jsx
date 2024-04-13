import React from 'react';
import FeedbackForm from './components/UI/FeedbackForm/FeedbackForm';

const footerStyles = {
  backgroundColor: 'rgba(28, 28, 28, 1)', 
  padding: '0px', 
  textAlign: 'center', 
  width: '100%',
  height: '53vh',
  bottom: '0',
  left: '0'
};

function Footer() {
  return (
    <footer style={footerStyles}>
      <div>
        <FeedbackForm />
      </div>
    </footer>
  );
}

export default Footer;
