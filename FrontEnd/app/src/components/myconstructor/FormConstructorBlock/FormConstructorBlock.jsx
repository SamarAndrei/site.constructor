import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';

const FormConstructorBlock = ({ addFormBlock }) => {
    const handleAddFormBlock = () => {
        const newFormBlock = {
            id: Date.now(),
            content: "Новый блок формы"
        };
        addFormBlock(newFormBlock);
    };

    return (
        <div>
            <MyButton onClick={handleAddFormBlock}>Добавить блок формы</MyButton>
        </div>
    );
};

export default FormConstructorBlock;
