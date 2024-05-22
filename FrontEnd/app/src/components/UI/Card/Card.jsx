import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton';
import logo from '../../../assets/images/logo3.png';
import './Card.css';
import Input from '../Input/Input';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const Card = ({ login, showInputs = true, showButton = true, showLink = true, children }) => {

    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePass, setValuePass] = useState('');

    const handleClickReg = () => {
        axios.post('http://127.0.0.1:8000/users/register', {
            name: `${document.getElementsByName('Username').values}`,
            email: `${document.getElementsByName('Email').values}`,
            password: `${document.getElementsByName('Password').values}`,
        }).then(() => redirect('/'), () => console.error('Ошибка сервера'))
    };

    const handleClickLogin = () => {
        axios.post('http://127.0.0.1:8000/users/login', {
            email: `${document.getElementsByName('Email').values}`,
            password: `${document.getElementsByName('Password').values}`,
        }).then(() => redirect('/'), () => console.error('Ошибка сервера'))
    };

    return (
        <div className='container'>
            <img className='logoLogin' src={logo} alt='etagiki' />
            
            {showInputs && !login && <input value={valueName} onChange={e => setValueName(e.target.value)} placeholder='Username' name='Username' />}
            {showInputs && <input value={valueEmail} onChange={e => setValueEmail(e.target.value)} placeholder='Email' name='Email' />}
            {showInputs && <input value={valuePass} onChange={e => setValuePass(e.target.value)} placeholder='Password' name='Password' />}

            {showButton && !login && <MyButton type='submit' disabled={valueName && valueEmail && valuePass ? false : true} onClick={handleClickReg}>Зарегистрироваться</MyButton>}
            {showButton && login && <MyButton type='submit' disabled={valueEmail && valuePass ? false : true} onClick={handleClickLogin}>Войти</MyButton>}

            

            {children}
        </div>
    );
};

export default Card;
