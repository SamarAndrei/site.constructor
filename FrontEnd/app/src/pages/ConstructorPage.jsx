import React from 'react';
import ParentComponent from '../components/constructor/ParentComponent.jsx';
import HeaderTemplatsOne from '../components/constructor/Templats/TemplatsOne/HeaderTemplatsOne.jsx';


const Constructor = () => {
    return (
        <div>
        {/* <Header/> */}
        <ParentComponent/>
        <HeaderTemplatsOne/>   
        </div>
    );
};

export default Constructor;