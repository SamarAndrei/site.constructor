// import React from 'react';
// import './Form.css'



// const Form = () => {
// 	return (
// 		<div className='container'>
// 			<div className="content-container">
// 				<div className="content">Придумайте название, адрес сайта и добавьте разделы, например информацию о компании и условия доставки
// 				</div>
// 				<div className="content">Шаблоны уже готовы — вам не придется думать о дизайне каждой страницы
// 				</div>
// 				<div className="content">Добавьте описания, фотографии и цены. Вы можете указывать скидки и предлагать оплату в кредит</div>
// 			</div>

// 			<div className="form2">
// 				<span id='h' className='clform'> <p><b> Интуитивный конструктор сайтов</b></p>	 </span>
// 				<span className='clform'><p>Создайте сайт без знаний программирования</p></span>
// 				<button className="buttonForm" style={{width: '90%'}} type="submit">         <b>Создать</b>
// 				</button>
// 			</div>

// 		</div>
// 	);
// };

// export default Form;





// left: '0', 
// 	backgroundColor: 'rgba(28, 28, 28, 1', 
// 	padding: '9px', 
// 	textAlign: 'center', 
// 	bottom: '0', 
// 	width: '100%',

import React from 'react';
import backgroundImage from '../../../assets/images/logoetagi.jpg';
import MyButton from '../Buttons/MyButton';

const CreatingLandings = () => {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(210, 210, 210, 1)', }}>
            <div style={{ 
                width: '50%', 
                position: 'relative',
                display: 'flex' }}>
                <img src={backgroundImage} alt="Background" style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', 
                    filter: 'brightness(40%)' }} />
            </div>
            <div style={{ 
                width: '50%', 
                textAlign: 'center', 
                paddingLeft: '20px',
                  }}>
                <h1 style={{ 
                    color: 'rgba(28, 28, 28, 1)', 
                      }}>Создайте впечатляющий сайт для бизнеса и медиа</h1>
                <MyButton style={{ marginTop: '20px', backgroundColor: 'rgba(28, 28, 28, 1)' }}>Создать</MyButton>
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