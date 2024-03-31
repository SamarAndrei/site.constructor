import React from 'react';
import './Form.css'

const Form = () => {
	return (
		<div className='container'>
			<div className="content-container">
				<div className="content">Придумайте название, адрес сайта и добавьте разделы, например информацию о компании и условия доставки
				</div>
				<div className="content">Шаблоны уже готовы — вам не придется думать о дизайне каждой страницы
				</div>
				<div className="content">Добавьте описания, фотографии и цены. Вы можете указывать скидки и предлагать оплату в кредит</div>
			</div>
			
			<hr width="600px" />
			<div className="form2">
				<span id='h' className='clform'> <p><b> Интуитивный конструктор сайтов</b></p>	 </span>
				<span className='clform'><p>Создайте сайт без знаний программирования</p></span>
				<button className="buttonForm" style={{width: '90%'}} type="submit">         <b>Отправить</b>
				</button>
			</div>
		
		</div>
	);
};

export default Form;