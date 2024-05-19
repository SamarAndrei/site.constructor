import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./BodyOffer.css";
import MyButton from "../Buttons/MyButton";

const BodyOffer = () => {
  return (
    <div className="main">
      {/* Колонка 1 */}
      <div className="textbox1">
        <h1>Это не просто сайт!</h1>
      </div>

      {/* Колонка 2 */}
      <div className="textbox2">
        <div>
          <h5 className="text2">
            От продаж в Интернете, ведения блога и организации мероприятий до
            продвижения вашего бизнеса и создания своего сообщества — создайте
            веб-сайт, который может расти вместе с вами.
          </h5>
        </div>
    <div className="text-and-button blinking-text">
      <Link to="/Pattern" className="blinking-text">Приступить к работе</Link>
    </div>
      </div>
    </div>
  );
};

export default BodyOffer;
