import React from 'react';

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
            <button onClick={() => handleAddTextBlock(1)}>Добавить один текстовый блок</button>
            <button onClick={() => handleAddTextBlock(2)}>Добавить два текстовых блока</button>
        </div>
    );
};

export default TextBlock;
