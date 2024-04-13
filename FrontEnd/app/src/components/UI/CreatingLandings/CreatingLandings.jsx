import React from 'react';
import backgroundImage from '../../../assets/images/logoetagi.jpg';
import MyButton from '../Buttons/MyButton';
import './CreatingLandings.css'; 

const CreatingLandings = () => {
  return (
    <div className="container"> 
      <div className="text-container"> 
        <div>Придумайте название, адрес сайта и добавьте разделы, например информацию о компании и условия доставки</div>
        <div>Шаблоны уже готовы — вам не придется думать о дизайне каждой страницы</div>
        <div>Добавьте описания, фотографии и цены. Вы можете указывать скидки и предлагать оплату в кредит</div>
      </div>
      <img src={backgroundImage} alt="Background" className="background-image" /> {/* Заменяем style на className */}
      <div className="main-content"> 
        <h1>Создайте впечатляющий сайт для бизнеса и медиа</h1>
        <MyButton style={{ 
          marginTop: '20px', 
          backgroundColor: '#CE2023', 
          color: 'white', 
          textTransform: 'uppercase', 
          padding: '10px 100px',
          border: '1px solid #CE2023'}}>Создать</MyButton>
      </div>
    </div>
  );
};

export default CreatingLandings;



































/* 
const CreatingLandings = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <img
          src={backgroundImage}
          alt="Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(40%)',

          }}
        />
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <h1>Создайте впечатляющий сайт для бизнеса и медиа</h1>
        </div>
      </div>
    );
  };
  
  export default CreatingLandings;
   */