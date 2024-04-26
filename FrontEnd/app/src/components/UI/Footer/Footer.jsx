import React from 'react';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const footerStyles = {
  /* backgroundColor: 'rgba(28, 28, 28, 1)', */
  margin: '0px', 
  padding: '0px',
  marginTop : '-50px', 
  height: '50vh',
  background: 'linear-gradient(to right, #121313, #0f0f0f)'

};

function Footer() {
  return (
    <footer style={footerStyles}>
        <FeedbackForm />
    </footer>
  );
}

export default Footer;


/* body {
  margin: 0;
  padding: 0;
  margin-top: 60px;
}

footer {
  margin: 0;
  padding: 0;
  margin-top: -50px;
  font-family: "Montserrat", sans-serif;
} */