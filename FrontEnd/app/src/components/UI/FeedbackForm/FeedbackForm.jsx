import React from 'react';
import './FeedbackFormStyle.css'; 
import MyButton from '../Buttons/MyButton';

const FeedbackForm = () => {
    const buttonStyle = {
        margin: '10px 0', 
        color: 'white', 
        padding: '15px 0',  
        marginRight: '0px',
        backgroundColor: '#CE2023' ,
        border: '1px solid #CE2023',
        textTransform: 'uppercase',
    };


  return (
    <div className="form">
      <h1 style={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>Обратная связь</h1>
      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Ваш номер телефона" />
      <textarea placeholder="Ваше сообщение" rows="1" />
      <MyButton style={buttonStyle}>Отправить</MyButton>
    </div>
  );
};

export default FeedbackForm;



