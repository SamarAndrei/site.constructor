import React from 'react';
import FeedbackForm from './components/UI/FeedbackForm/FeedbackForm';
const footerStyles = {
	left: '0', 
	backgroundColor: 'rgba(28, 28, 28, 1', 
	padding: '0px', 
	textAlign: 'center', 
	bottom: '0', 
	width: '100%',
	height: '53vh'

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
