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
import React from 'react';
import backgroundImage from '../../../assets/images/logoetagi.jpg';


const CreatingLandings = () => {
    return (
        <div style={{ position: 'sticky', textAlign: 'center', marginTop: '0px', display: 'flex'  }}>
            <img src={backgroundImage} alt="Background" style={{ width: '104%', height: '100%' , objectFit: 'cover', filter: 'brightness(30%)', justifyItems: 'center' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div /* style={{ flex: '1', marginRight: '20px' }} */>
                    <h2>Придумайте название</h2>
                    <p>Адрес сайта и другие разделы</p>
                </div>
                <div /* style={{ flex: '1', marginRight: '20px' }} */>
                    <h2>Шаблоны уже готовы</h2>
                    <p>Вам не придется думать о дизайне каждой страницы</p>
                </div>
                <div /* style={{ flex: '1' }} */>
                    <h2>Добавьте описания, фотографии и цены</h2>
                    <p>Вы можете указывать скидки и предлагать оплату в кредит</p>
                </div>
            </div>
        </div>
    );
};

export default CreatingLandings;