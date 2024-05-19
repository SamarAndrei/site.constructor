import React from 'react';

const ImageBlock = ({ addImageBlock }) => {
    const handleAddImageBlock = () => {
        const newImageBlock = {
            id: Date.now(),
            imageUrl: "https://via.placeholder.com/150",
            caption: "Подпись к изображению"
        };
        addImageBlock(newImageBlock);
    };

    return (
        <div>
            <button onClick={handleAddImageBlock}>Добавить Image Block</button>
        </div>
    );
};

export default ImageBlock;
