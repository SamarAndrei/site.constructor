import React from 'react';
import MyText from '../components/UI/Text/Text';
import './NoMatchPage.css'
import samples from "../assets/images/samples.png";

function NoMatchPage() {
    return (
        <div className='no-match-page'>
            <MyText>Страница не найдена 404 ;(</MyText>
            <img style={{width:'800px', height:'700px'}} src={samples}></img>
        </div>
    );
}

export default NoMatchPage;