import React from "react";
import CreatingLandings from "../CreatingLandings/CreatingLandings";
import BodyComps from "../BodyComps/BodyComps";
import BodyCompsLower from "../BodyCompsLower/BodyCompsLower";
import BodyOffer from "../BodyOffer/BodyOffer";
const Body = () => {
  return (
    <div>
      {/*    <CreatingLandings/> */}
      <BodyComps />
      <BodyCompsLower />
      <BodyOffer />
    </div>
  );
};

export default Body;
