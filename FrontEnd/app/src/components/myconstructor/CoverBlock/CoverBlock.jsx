import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import coverblock from '../../../assets/images/coverblock.jpg';

const CoverBlock = ({ addCoverBlock }) => {
    const handleAddCoverBlock = () => {
        const newCoverBlock = {
            id: Date.now(),
            title: { text: "Надзаголовок", color: "#000000" },
            subtitle: { text: "Заголовок", color: "#000000" },
            description: { text: "Описание", color: "#000000" },
            backgroundImage: coverblock,
            overlayOpacity: 0.5 
        };
        addCoverBlock(newCoverBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddCoverBlock}>Добавить Обложку</MyButton>
        </div>
    );
};

export default CoverBlock;
