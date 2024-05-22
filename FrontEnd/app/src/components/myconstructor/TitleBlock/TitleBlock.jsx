import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css'
import MyButton from '../../UI/Buttons/MyButton'
const TitleBlock = ({ addTitleBlock }) => {
    const [title, setTitle] = useState('');

    const handleAddTitleBlock = () => {
        const newTitleBlock = { id: Date.now(), title };
        addTitleBlock([newTitleBlock]);
        setTitle('');
    };

    return (
        <div className="title-block">
            <input
                type="text"
                placeholder="Введите заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <MyButton onClick={handleAddTitleBlock}>Добавить заголовок</MyButton>
        </div>
    );
};

export default TitleBlock;
