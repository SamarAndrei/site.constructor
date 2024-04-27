import React from 'react';
import { Link } from 'react-router-dom';
import './BodyComps.css';
import behind from '../../../assets/images/behindThetext.png'
import MyButton from '../Buttons/MyButton';

const BodyComps = () => {
    return(
        <div className='main-container' style={{backgroundImage: `url(${behind})`, backgroundSize: 'cover', }}>    
            <div className='texxt-container'>
                <h2>
                Создайте сайт <br/> своей мечты
                </h2>
                <h6 className='texted' style = {{}}>
                Используйте нашу профессиональную платформу для воплощения самых смелых идей. Благодаря гибким
                настройкам дизайна и управления, ваши возможности в развитии бизнеса становятся безграничными.
                </h6>
            </div>        
            <div className='button-block'>
            <Link to="/Pattern">
            <MyButton className="button-create"  >Создать</MyButton>          
            </Link>
            </div>    
            <span className='texted' style={{fontSize: '16px', position: 'absolute', display: 'flex', top: '107vh', }}>
                Стоит лишь попробовать. Это бесплатно
            </span>

        
        </div>
        
    )
};

export default BodyComps;