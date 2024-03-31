import React from 'react';
import './FixedBar.css'; 
import { Button} from '@mui/material';
import logo from '../../../assets/images/logosite.png';
const FixedBar = () => {
  return (
    <div className="fixed-bar">
      <img className="logo" src={logo} alt="Логотип сайта" />
      <span className="text">Сайт-конструктор "botat"</span>
      <Button className="button" variant="text" style = {{
        marginLeft: 'auto',
        color: '#ffffff', 
        fontFamily: 'Lucida Sans Unicode', 
        width: '50px', 
        height: '30px', 
        marginRight: '20px', 
      }}>
        Войти
      </Button>
    </div>
  );
}


export default FixedBar;
