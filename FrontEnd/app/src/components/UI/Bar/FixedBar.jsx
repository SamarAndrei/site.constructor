import React from 'react';
import logo from '../../../assets/images/logo3.png';
import MyButton from '../Buttons/MyButton';
import './FixedBar.css';
import { Link } from 'react-router-dom';

const FixedBar = ({ showLoginButton = true, showRegisterButton = true, children }) => {
    return (
        <div className="fixed-bar">
            <Link to='/'><img className="logo" src={logo} alt="Логотип сайта" /></Link>
            <div className='buttons-container'>
                {showLoginButton && <Link to='/Login'><MyButton style={{ marginRight: '10px', marginLeft: '10px' }}>Войти</MyButton></Link>}
                {showRegisterButton && <Link to='/Register'><MyButton style={{ marginRight: '10px' }}>Регистрация</MyButton></Link>}
                {children}
            </div>
        </div>
    );
};

export default FixedBar;
