import React from 'react';
import CreatingLandings from '../CreatingLandings/CreatingLandings';
import BodyComps from '../BodyComps/BodyComps';
import BodyCompsLower from '../BodyCompsLower/BodyCompsLower';
const Body = () => {
    return (
        <div>
         {/*    <CreatingLandings/> */}
            <BodyComps/>
            <BodyCompsLower/>
        </div>
    );
};

export default Body;