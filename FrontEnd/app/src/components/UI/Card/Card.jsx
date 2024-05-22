import React, { useState } from 'react';
import MyButton from '../Buttons/MyButton';
import logo from '../../../assets/images/logo3.png';
import './Card.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = ({ login, showInputs = true, showButton = true, showLink = true, children }) => {

    const [valueName, setValueName] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valuePass, setValuePass] = useState('');
    const navigate = useNavigate();


    const handleClickReg = () => {
        axios.post('http://127.0.0.1:8001/users/register', {
            name: valueName,
            email: valueEmail,
            password: valuePass,
        })
        .then(response => {
            console.log(response.data);
            navigate('/');
        })
        .catch(() => console.error('Сервак не отвечает'));
    };

    const handleClickLogin = () => {
        axios.post('http://127.0.0.1:8001/users/login', {
            email: valueEmail,
            password: valuePass,
        }).then(response => {
            console.log(response.data);
            navigate('/');
        })
        .catch(() => console.error('Сервак не отвечает'))
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
