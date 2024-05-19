import React from "react";
import { Link } from "react-router-dom";
// import "./BodyCompsForConstructorPage.css";
import behind from "../../assets/images/behindThetext.png";
import MyButton from "../../components/UI/Buttons/MyButton";

const SecondCoverTemplate = ({ onSelect }) => {
  const handleClick = () => {
    onSelect(
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
            смелых идей. Благодаря гибким настройкам дизайна и управления, ваши
            возможности в развитии бизнеса становятся безграничными.
          </h6>
        </div>
        <div className="button-block">
          <Link to="/Pattern">
            <MyButton className="button-create">Создать</MyButton>
          </Link>
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

  return (
    <div className="second-cover-template-container" onClick={handleClick}>
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
            смелых идей. Благодаря гибким настройкам дизайна и управления, ваши
            возможности в развитии бизнеса становятся безграничными.
          </h6>
        </div>
        <div className="button-block">
          <Link to="/Pattern">
            <MyButton className="button-create">Создать</MyButton>
          </Link>
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
    </div>
  );
};

export default SecondCoverTemplate;
