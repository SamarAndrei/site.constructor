import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton';
import logo from '../../../assets/images/logo3.png';
import './Card.css';
import Input from '../Input/Input';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const Card = ({ login, showInputs = true, showButton = true, showLink = true, children }) => {

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

            {showInputs && !login && <Input placeholder='Username' name='Username' />}
            {showInputs && <Input placeholder='Email' name='Email' />}
            {showInputs && <Input placeholder='Password' name='Password' />}

            {showButton && !login && <MyButton onClick={handleClickReg}>Зарегистрироваться</MyButton>}
            {showButton && login && <MyButton onClick={handleClickLogin}>Войти</MyButton>}

            

            {children}
        </div>
    );
};

export default Card;
