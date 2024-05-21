import React from 'react';
import MyButton from '../../UI/Buttons/MyButton'
const TextBlock = ({ addTextBlock }) => {
    const handleAddTextBlock = (count) => {
        const newTextBlocks = Array.from({ length: count }).map((_, index) => ({
            id: Date.now() + index,
            content: "Some Text",
            alignment: 'center' 
        }));
        addTextBlock(newTextBlocks);
    };

    return (
        <div>
            <MyButton onClick={() => handleAddTextBlock(1)}>Добавить один текстовый блок</MyButton>
            <MyButton onClick={() => handleAddTextBlock(2)}>Добавить два текстовых блока</MyButton>
        </div>
    );
};

export default TextBlock;
