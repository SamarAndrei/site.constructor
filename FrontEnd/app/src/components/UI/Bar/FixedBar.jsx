import React from 'react';
import logo from '../../../assets/images/logo3.png';
import MyButton from '../Buttons/MyButton';
import './FixedBar.css'; 
import { Link } from 'react-router-dom';


const FixedBar = () => {
    return (
        <div className="fixed-bar">
            <img className="logo" src={logo} alt="Логотип сайта" />
        <div className='buttons-container'> 
            <Link to='/Login'><MyButton style  = {{marginRight: '10px', marginLeft: '10px', }}>Войти</MyButton></Link>
            <MyButton style = {{marginRight: '10px'}}>Регистрация</MyButton>
        </div>           
        </div>
    );
};

export default FixedBar;
