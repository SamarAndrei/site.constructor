import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardLand from '../components/UI/LandCard/CardLand';
import Header from '../components/UI/Header/Header';
import Footer from '../components/UI/Footer/Footer';

const MyLandingsPage = () => {

    const [data, setData] = useState([])
    
    
    async function fetchLandings() {
        const response = await axios.get('http://127.0.0.1:8001/landings')
            .catch(() => console.error('Ошибка сервера'))
        setData(response.data)
    }   
    
    useEffect(
        fetchLandings(),
    []);

    return (
        <div>
            <Header/>
            {data.map(landing => <CardLand props={landing}/>)}
            <h1> Лэндосы</h1>
         
        </div>
    );
};

export default MyLandingsPage;