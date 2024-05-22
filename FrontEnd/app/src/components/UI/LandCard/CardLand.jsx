import React from 'react';
import './CardLand.css'
import MyButton from '../Buttons/MyButton';

const CardLand = (props) => {
    return (
        <div className='container'>
            <h4>{props.name}</h4>
            <h4>{props.description}</h4>
            <h4>{props.adress}</h4>
            <MyButton>Посмотреть</MyButton>
        </div>
    );
};

export default CardLand;