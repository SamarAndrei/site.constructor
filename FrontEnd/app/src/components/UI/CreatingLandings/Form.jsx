import React from 'react';
import './Form.css'

const Form = () => {
	return (
		<div className='container'>
			<div className="content-container">
				<div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod facere, placeat nesciunt eum officiis quis repudiandae, fugit suscipit quia impedit quasi quidem enim veniam rem distinctio voluptates nisi ipsa!</div>
				<div className="content">Lorem ipsum dolor sit amet consectetur.
				</div>
				<div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, placeat quis nihil molestias possimus nobis.</div>
			</div>
			

			<div className="form2">
				<span id='h' className='clform'> <p>Интуитивный конструктор сайтов</p>	 </span>
				<span className='clform'><p>Создайте сайт без знаний программирования</p></span>
				<button className="buttonForm" style={{width: '90%'}} type="submit">         <b>Отправить</b>
				</button>
			</div>
		
		</div>
	);
};

export default Form;