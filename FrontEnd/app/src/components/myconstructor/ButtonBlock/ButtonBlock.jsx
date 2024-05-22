import React from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton'

const ButtonBlock = ({ addButtonBlock }) => {
    const handleAddButton = (count) => {
        const newButtons = Array.from({ length: count }, (_, index) => ({
            id: Date.now() + index,
            text: `Кнопка ${index + 1}`,
            backgroundColor: '#007bff',
            color: '#fff',
            size: 'medium',
            alignment: 'center'
        }));
        addButtonBlock(newButtons);
    };

    return (
        <div>
            <MyButton onClick={() => handleAddButton(1)}>Добавить одну кнопку</MyButton>
            <MyButton onClick={() => handleAddButton(2)}>Добавить две кнопки</MyButton>
        </div>
    );
};

export default ButtonBlock;

