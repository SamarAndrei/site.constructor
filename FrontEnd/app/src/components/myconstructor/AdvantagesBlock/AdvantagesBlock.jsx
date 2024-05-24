import React from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import '../../myconstructor/myconstructor.css';

const AdvantagesBlock = ({ addAdvantagesBlock }) => {

    
    const handleAddAdvantagesBlock = () => {
        const newAdvantage = {
            id: Date.now(),
            title: "Новое преимущество",
            description: "Описание нового преимущества"
        };
        addAdvantagesBlock(newAdvantage);
    };

    return (
        <div>
            <MyButton onClick={handleAddAdvantagesBlock}>Добавить Преимущество</MyButton>
        </div>
    );
};

export default AdvantagesBlock;
