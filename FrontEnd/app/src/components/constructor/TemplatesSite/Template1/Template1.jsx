import React from 'react';
import FixedBar from '../../../UI/Bar/FixedBar'
import ImagePanel from '../../ImagePanel'
import HeaderPanel from '../../HeaderPanel'
import img1 from '../../../../assets/images/logoetagi.jpg'
import img2 from '../../../../assets/images/logo3.png'
import Footer from '../../../UI/Footer/Footer';


function Template1(props) {
	return (
		<div>
			{/* <FixedBar showLoginButton={false} showRegisterButton={false}/> */}
            <HeaderPanel img2={img2}/>
			<ImagePanel img1={img1}/>
			<Footer/>	
		</div>
	);
}

export default Template1;