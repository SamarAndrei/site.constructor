import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import logo3 from '../../../assets/images/logo3.png';

const HeaderConstructor = ({ addHeaderBlock }) => {
    const handleAddHeaderBlock = () => {
        const newHeaderBlock = {
            id: Date.now(),
            content: <img src={logo3} alt="Logo" style={{ width: '180px', height: '30px',}} /> // Set the logo size to be very small
        };
        addHeaderBlock(newHeaderBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddHeaderBlock}>Добавить Шапку</MyButton>
        </div>
    );
};

export default HeaderConstructor;
