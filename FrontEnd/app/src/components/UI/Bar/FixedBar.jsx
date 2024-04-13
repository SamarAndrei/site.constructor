import React from 'react';
import logo from '../../../assets/images/logo2.png';
import MyButton from '../Buttons/MyButton';
import './FixedBar.css'; 


const FixedBar = () => {
    return (
        <div className="fixed-bar">
            <img className="logo" src={logo} alt="Логотип сайта" />
        <div className='buttons-container'> 
            <MyButton style  = {{marginRight: '10px', marginLeft: '10px', }}>Войти</MyButton>
            <MyButton style = {{marginRight: '10px'}}>Регистрация</MyButton>
        </div>           
        </div>
    );
};

export default FixedBar;
