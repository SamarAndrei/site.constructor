import React from 'react';
import mountains from './assets/images/reka_les_gory_159374_3840x2400.jpg'
import Form from './components/UI/CreatingLandings/Form';
function Body () {

	return (
		<div >
			<Form></Form>
			<img style={{width: "101%", height: '101%', marginRight: '0px', marginLeft: '0px', marginTop: '0px', objectFit: 'cover', display: 'block', }} src={mountains} alt="" />
			
			
		</div>
	);
};

export default Body;