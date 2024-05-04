import React from 'react';
import FixedBar from '../components/UI/Bar/FixedBar';
import MyButton from '../components/UI/Buttons/MyButton';
import './PageStyle.css';
import Card from '../components/UI/Card/Card';
import emptypage from '../assets/images/emptypage.png';
import Footer from '../components/UI/Footer/Footer.jsx';
import { Link } from 'react-router-dom';


const Patterns = () => {
    

    return (
        <div>
            <FixedBar showLoginButton={false} showRegisterButton={false}>
                <MyButton style={{ marginRight: '20px' }}>Выйти</MyButton>
            </FixedBar>
            <div className='centered-content' style={{ color: 'white', fontFamily: '"Montserrat", sans-serif' }}>
                <h1>Новая страница</h1>
                <h2>Выберите подходящий шаблон и адаптируйте его под ваши цели.</h2>
            </div>
            <div className='card-pattern-o'>               
                    <Card showInputs={false} showButton={false} showLink={false} >
                        <img className='image-empty' src={emptypage} alt="Пустая страница" />
                        <div className='text-empty'>
                            <p>Пустая страница</p>
                            <p>Начать с пустого листа</p>
                        </div>
                       <Link to='/EmptyPattern'><MyButton>Выбрать</MyButton></Link>
                    </Card>
                    <Card showInputs={false} showButton={false} showLink={false} >
                        <img className='image-empty' src={emptypage} alt="Пустая страница" />
                        <div className='text-empty'>
                            <p>Страница с готовым шаблоном</p>
                            <p>Начать с готового шаблона</p>
                        </div>
                        <Link to='/OnePattern'><MyButton>Выбрать</MyButton></Link>
                    </Card>
            </div>
            <div className='footer-pattern'>
                <Footer/>
            </div>
        </div>
    );
};

export default Patterns;
