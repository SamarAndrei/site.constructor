import React from 'react';
import FixedBar from '../components/UI/Bar/FixedBar';
import MyButton from '../components/UI/Buttons/MyButton';
import './PageStyle.css';
import Card from '../components/UI/Card/Card';
import emptypage from '../assets/images/emptypage.png';
import Footer from '../components/UI/Footer/Footer.jsx';
import { Link } from 'react-router-dom';
import pattern1 from '../assets/images/pattern1.png';
import patic2 from '../assets/images/patic2.png';
import patic3 from '../assets/images/patic3.png';


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
                        <img className='image-empty' src={patic3} alt="Пустая страница" />
                        <div className='text-empty'>
                            <p>Пустая страница</p>
                            <p>Начать с пустого листа</p>
                        </div>
                       <Link to='/EmptyPattern'><MyButton>Выбрать</MyButton></Link>
                    </Card>
                    <Card showInputs={false} showButton={false} showLink={false} >
                        <img className='image-empty' src={pattern1} alt="Пустая страница" />
                        <div className='text-empty'>
                            <p>Страница с готовым шаблоном №1</p>
                            <p>Начать с готового шаблона</p>
                        </div>
                        <Link to='/OnePattern'><MyButton>Выбрать</MyButton></Link>
                    </Card>
                    <Card showInputs={false} showButton={false} showLink={false} >
                        <img className='image-empty' src={patic2} alt="Пустая страница" />
                        <div className='text-empty'>
                            <p>Страница с готовым шаблоном №2</p>
                            <p>Начать с готового шаблона</p>
                        </div>
                        <Link to='/SecondPattern'><MyButton>Выбрать</MyButton></Link>
                    </Card>
            </div>
            <div className='footer-pattern'>
                <Footer/>
            </div>
        </div>
    );
};

export default Patterns;
