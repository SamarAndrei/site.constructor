import React from 'react';
import './FixedBar.css'; // Импортируем файл стилей
import { Button} from '@mui/material';
const FixedBar = () => {
  return (
    <div className="fixed-bar">
      <span>Тестовая панель. Маринованные перчики</span>
      <Button variant = "contained" style={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif', width: '100px', height: '30px'}}>Кнопка</Button>
      <img className = "logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Berserk_Logo.svg/2560px-Berserk_Logo.svg.png" alt=''></img>
    </div>
  );
}

export default FixedBar;
