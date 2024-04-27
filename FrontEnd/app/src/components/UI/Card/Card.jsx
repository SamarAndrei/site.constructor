import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton';
import logo from '../../../assets/images/logo3.png';
import './Card.css';
import Input from '../Input/Input';

const Card = ({ showInputs = true, showButton = true, showLink = true, children }) => {
    const [value, setValue] = useState(true);
    const [registrationOrLogin, setRegistrationOrLogin] = useState('Войти');

    const handleOnClick = () => {
        if (value) {
            setValue(false);
            setRegistrationOrLogin('Войти');
        } else {
            setValue(true);
            setRegistrationOrLogin('Зарегистрироваться');
        }
    };

    return (
        <div className='container'>
            <img className='logoLogin' src={logo} alt='etagiki' />

            {showInputs && <Input placeholder='Username' />}
            {showInputs && <Input placeholder='Email' />}
            {showInputs && <Input placeholder='Password' />}

            {showButton && <MyButton>{registrationOrLogin}</MyButton>}

            {showLink && (
                <a href='#' onClick={handleOnClick} style={{ marginTop: '60%' }}>
                    {value ? 'Войти' : 'Регистрация'}
                </a>
            )}

            {children}
        </div>
    );
};

export default Card;
