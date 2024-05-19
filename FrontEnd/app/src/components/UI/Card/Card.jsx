import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton';
import logo from '../../../assets/images/logo3.png';
import './Card.css';
import Input from '../Input/Input';
import axios from 'axios';

const Card = ({ login, showInputs = true, showButton = true, showLink = true, children }) => {

    const handleButReg = () => {

    }

    return (
        <div className='container'>
            <img className='logoLogin' src={logo} alt='etagiki' />

            {showInputs && !login && <Input placeholder='Username' />}
            {showInputs && <Input placeholder='Email' />}
            {showInputs && <Input placeholder='Password' />}

            {showButton && !login && <MyButton>Зарегистрироваться</MyButton>}
            {showButton && login && <MyButton>Войти</MyButton>}

            

            {children}
        </div>
    );
};

export default Card;
