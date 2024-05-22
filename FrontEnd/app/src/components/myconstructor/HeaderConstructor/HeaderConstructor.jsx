import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const HeaderConstructor = ({ addHeaderBlock }) => {
    const handleAddHeaderBlock = () => {
        const newHeaderBlock = {
            id: Date.now(),
            content: "New Header"
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
