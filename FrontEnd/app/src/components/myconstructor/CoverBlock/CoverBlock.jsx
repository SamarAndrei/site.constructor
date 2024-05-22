import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import logoetagi from '../../../assets/images/logoetagi.jpg';

const CoverBlock = ({ addCoverBlock }) => {
    const handleAddCoverBlock = () => {
        const newCoverBlock = {
            id: Date.now(),
            title: { text: "Надзаголовок", color: "#000000" },
            subtitle: { text: "Заголовок", color: "#000000" },
            description: { text: "Описание", color: "#000000" },
            backgroundImage: logoetagi,
            overlayOpacity: 0.5 
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
