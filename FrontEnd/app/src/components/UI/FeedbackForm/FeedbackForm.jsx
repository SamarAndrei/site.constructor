import React from 'react';
import './FeedbackFormStyle.css'; 
import MyButton from '../Buttons/MyButton';

const FeedbackForm = () => {

  return (
    <div className="form">
      <h1 style={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Обратная связь</h1>
      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Ваш номер телефона" />
      <textarea placeholder="Ваше сообщение" rows="1" />
      <MyButton >Отправить</MyButton>
    </div>
  );
};

export default FeedbackForm;



