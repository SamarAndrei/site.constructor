import React from 'react';
import './StylesForms.css'; 

const FeedbackForm = () => {
  return (
    <div className="form">
      <h1 style={{ color: '#FBE4D8', fontFamily: '"Montserrat", sans-serif' }}>Обратная связь</h1>
      <input type="text" placeholder="Ваше имя" />
      <input type="tel" placeholder="Ваш номер телефона" />
      <textarea placeholder="Ваше сообщение" rows="1" />
      <button className="buttonForm" type="submit">         <b>Отправить</b>
      </button>
    </div>
  );
};

export default FeedbackForm;