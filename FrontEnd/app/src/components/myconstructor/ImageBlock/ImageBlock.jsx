import React from 'react';
import MyButton from '../../UI/Buttons/MyButton'

const ImageBlock = ({ addImageBlock }) => {
    const handleAddImageBlock = () => {
        const newImageBlock = {
            id: Date.now(),
            imageUrl: "https://via.placeholder.com/150",
            
        };
        addImageBlock(newImageBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddImageBlock}>Добавить Изображение</MyButton>
        </div>
    );
};

export default ImageBlock;
