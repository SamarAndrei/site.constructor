import React from 'react';
import FeedbackForm from './components/UI/Form/FeedbackForm';

const footerStyles = {
	backgroundColor: '#0D1F23', 
  	padding: '10px', 
  	textAlign: 'center', 
  	position: 'fixed', 
  	bottom: 0, 
  	width: '100%' 
  };



function Footer () {
	return (
		<div className='poppins-regular'>
			<FeedbackForm/>
		</div>
	);
};

export default Footer;

