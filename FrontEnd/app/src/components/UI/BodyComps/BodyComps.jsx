import React from "react";
import { Link, redirect } from "react-router-dom";
import "./BodyComps.css";
import behind from "../../../assets/images/behindThetext.png";
import MyButton from "../Buttons/MyButton";
import axios from "axios";

const BodyComps = () => {

  const handleClickCreate = () => {
    axios.post('http://127.0.0.1:8000/landings/creating', {})
      .then(() => redirect('/Pattern'))
      .catch(() => redirect('/Register'));

  }

  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${behind})`, backgroundSize: "cover" }}
    >
      <div className="texxt-container">
        <h2>
          Создайте сайт <br /> своей мечты
        </h2>
        <h6 className="texted" style={{}}>
          Используйте нашу профессиональную платформу для воплощения самых
          смелых идей. <br/>Благодаря гибким настройкам дизайна и управления, ваши
          возможности в развитии бизнеса становятся безграничными.
        </h6>
      </div>
      <div className="button-block">
        <MyButton className="button-create" onClick={handleClickCreate}>Создать</MyButton>
      </div>
      <span
        className="texted"
        style={{
          fontSize: "16px",
          position: "absolute",
          display: "flex",
          top: "107vh",
        }}
      >
        Стоит лишь попробовать. Это бесплатно
      </span>
    </div>
  );
};

export default BodyComps;
