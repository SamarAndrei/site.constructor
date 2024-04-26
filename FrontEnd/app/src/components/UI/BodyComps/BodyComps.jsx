import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './BodyComps.css';
import samplesImage from '../../../assets/images/samples.png';
import behind from '../../../assets/images/behindThetext.png'

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
            <Link to="/123">
            <button className="button-create"  >Создать</button>          
            </Link>
            </div>    
            <span className='texted' style={{fontSize: '16px', position: 'absolute', display: 'flex', top: '107vh', }}>
                Стоит лишь попробовать. Это бесплатно
            </span>

       {/*  <div>
        <img src={samplesImage} alt="imgWsamples" />

        </div> */}
        
        </div>
        
    )
};

export default BodyComps;