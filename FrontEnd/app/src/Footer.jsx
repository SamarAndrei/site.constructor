import React from 'react';
import FeedbackForm from './components/UI/Form/FeedbackForm';
import './index.css'


const footerStyles = {
	left: '0', // Установите значение left в 0
	backgroundColor: '#0D1F23', 
	padding: '10px', 
	textAlign: 'center', 
	bottom: 0, 
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

