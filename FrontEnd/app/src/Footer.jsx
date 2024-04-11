import React from 'react';
import FeedbackForm from './components/UI/FeedbackForm/FeedbackForm';
const footerStyles = {
	left: '0', 
	backgroundColor: 'rgba(28, 28, 28, 1', 
	padding: '9px', 
	textAlign: 'center', 
	bottom: '0', 
	width: '100%',

  };



function Footer () {
	return (
		<footer style={footerStyles}>
      <div>
        <FeedbackForm />
      </div>
    </footer>
	);
};

export default Footer;
