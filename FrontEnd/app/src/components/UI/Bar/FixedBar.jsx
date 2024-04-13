// import React from 'react';
// import './FixedBar.css'; 
// import { Button} from '@mui/material';
// import logo from '../../../assets/images/logosite.png';
// const FixedBar = () => {
//   return (
//     <div className="fixed-bar">
//       <img className="logo" src={logo} alt="Логотип сайта" />
//       <span className="text">Сайт-конструктор "botat"</span>
//       <Button variant="text" style = {{
//         marginLeft: 'auto',
//         color: '#FBE4D8', 
//         width: '50px', 
//         height: '30px', 
//         marginRight: '20px', 
//         fontFamily: 'Montserrat',
        
//       }}>
//         Войти
//       </Button>
//     </div>
//   );
// }


// export default FixedBar;
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
