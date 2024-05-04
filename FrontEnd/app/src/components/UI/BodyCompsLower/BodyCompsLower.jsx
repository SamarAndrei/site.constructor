import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./BodyCompsLower.css";
import samplesImage from "../../../assets/images/samples.png";
import pieceok from "../../../assets/images/piece.png";
import samples from "../../../assets/images/samplesss.png";

const BodyCompsLower = () => {
  return (
    <div
      className="collective-container"
      style={{
        backgroundImage: `url(${pieceok})`,
        backgroundSize: "cover",
        zIndex: "3",
      }}
    >
      <img src={samples} alt="sampleoid"></img>
      <h2 className="textbox">
        Шаблоны уже готовы - вам <br />
        не придется думать о дизайне каждой страницы
      </h2>
      <h2 className="textbox">
        Придумайте название, адрес сайта <br /> и добавьте разделы, например,
        информацию <br /> о компании и условия доставки
      </h2>
      <h2 className="textbox">
        Добавьте описание, фотографии и цены. <br />
        Вы можете указывать скидки и предлагать оплату в кредит
      </h2>
      <div className="imagesettings"></div>
    </div>
  );
};

export default BodyCompsLower;
