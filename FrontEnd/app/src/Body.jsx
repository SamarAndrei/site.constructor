import React from 'react';
import mountains from './assets/images/reka_les_gory_159374_3840x2400.jpg'
import Form from './components/UI/CreatingLandings/Form';
function Body () {

	return (
		<div style={{padding: '0px'}}>
			<Form></Form>
			<img style={{width: "100%"}} src={mountains} alt="" />
			
		</div>
	);
};

export default Body;