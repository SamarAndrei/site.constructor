import React from 'react';
import '../../myconstructor/myconstructor.css';
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
            <button onClick={() => handleAddButton(1)}>Добавить одну кнопку</button>
            <button onClick={() => handleAddButton(2)}>Добавить две кнопки</button>
        </div>
    );
};

export default ButtonBlock;

