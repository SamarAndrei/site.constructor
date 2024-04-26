import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton'
import logo from '../../../assets/images/logo3.png';
import './Card.css'
import Input from '../Input/Input';

const Card = (props) => {

	const [value, setValue] = useState(true)
	const [registrationOrLogin, setRegistrationOrLogin] = useState('Войти')

	const handleOnClick = () => {
		if(value){
			setValue(false)
			setRegistrationOrLogin('Войти')
		} else {
			setValue(true)
			setRegistrationOrLogin('Зарегистрироваться')
		}
	}

	return (
		<div style={props.style} className='container'>
			<img  className="logoLogin" src={logo} alt="etagiki"  />

				{value && <Input placeholder='Username'/>}
				<Input placeholder='Email'/>
				<Input placeholder='Password'/>

				<MyButton children={registrationOrLogin}></MyButton>

				<a href="#" onClick={handleOnClick} style={{marginTop:"60%"}}>
				{value ? 'Войти' : 'Регистрация' }
				</a>
		</div>
	);
};



export default Card;