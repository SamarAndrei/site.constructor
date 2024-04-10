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
import logo from '../../../assets/images/logosite.png';
import MyButton from '../Buttons/MyButton';
import './FixedBar.css'; 

const FixedBar = () => {
    const buttonStyle = {
        marginLeft: 'auto', 
        color: 'white', 
        padding: '10px 20px',  
        marginRight: '20px',
        backgroundColor: 'rgba(28, 28, 28, 1)' ,
    };

    return (
        <div className="fixed-bar">
            <img className="logo" src={logo} alt="Логотип сайта" />
            <MyButton style={buttonStyle}>Войти</MyButton>
        </div>
    );
};

export default FixedBar;
