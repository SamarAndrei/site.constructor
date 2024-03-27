import React from 'react';
import MyButton from '../Buttons/Button';
const Card = (props) => {
	return (
		<div style={props.style} className='container'>
			<img  src="https://images-ext-1.discordapp.net/external/UyfJnebdhLYfGa8P6O_3ERRujZQO7BpW4TbyNusJnsE/https/office-news.ru/wp-content/uploads/2023/11/SLAVA-1-720x768.jpg?format=webp&width=643&height=686" alt="city" />
			<div className='cl2'>
				<p className='cl1'><b>Мурманск</b></p>
				<p className='cl1'>Красивый город</p>
				<MyButton>Подробнее</MyButton>	
			</div>
		</div>
	);
};

export default Card;