import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const CoverBlock = ({ addCoverBlock }) => {
    const handleAddCoverBlock = () => {
        const newCoverBlock = {
            id: Date.now(),
            title: "Надзаголовок",
            subtitle: "Заголовок",
            description: "Описание",
            backgroundImage: "https://via.placeholder.com/150"
        };
        addCoverBlock(newCoverBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddCoverBlock}>Добавить Cover Block</MyButton>
        </div>
    );
};

export default CoverBlock;
