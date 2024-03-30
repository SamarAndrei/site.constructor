import React from 'react';
import './StylesForms.css'; 

const FeedbackForm = () => {
  return (
    <div className="form">
      <h1>Обратная связь</h1>
      <input className="input" type="text" placeholder="Ваше имя" />
      <input className="input" type="tel" placeholder="Ваш номер телефона" />
      <textarea className="textarea" placeholder="Ваше сообщение" rows="1" />
      <button className="buttonForm" type="submit">Отправить</button>
    </div>
  );
};

export default FeedbackForm;