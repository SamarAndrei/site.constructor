import React from 'react';
import galochka from '../../../assets/images/galochka.png';

const AdvantagesBlockItem = ({ title, description }) => {
    return (
        <div className="advantages-block-item">
            <img src={galochka} alt="галочка" className="advantages-icon" />
            <div className="advantages-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdvantagesBlockItem;
