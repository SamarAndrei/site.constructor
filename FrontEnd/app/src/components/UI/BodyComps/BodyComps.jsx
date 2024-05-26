import React from "react";
import "./BodyComps.css";
import behind from "../../../assets/images/behindThetext.png";
import MyButton from "../Buttons/MyButton";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const BodyComps = () => {

  const navigate = useNavigate();


  const handleClickCreate = () => {
    axios.post('http://127.0.0.1:8001/landings/creating', {}, { withCredentials: true , headers: {Cookie: document.cookie}}) //попробовать через /me
      .then(response => {
        console.log(response.data);
        navigate('/Pattern');
      })
      .catch(() => {
        console.error('Зарегайтесь');
        navigate('/Register');
      });
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
