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
<<<<<<< HEAD
	<footer style={footerStyles}>
      	<div>
		  <FeedbackForm />
      	</div>
    </footer>
=======
		<div className='poppins-regular'>
			<FeedbackForm/>
		</div>
>>>>>>> 4ac369a4d68c56586b22b2f75af5574273d6a148
	);
};

export default Footer;

