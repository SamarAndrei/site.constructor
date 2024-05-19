import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css'

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
            <button onClick={handleAddTitleBlock}>Добавить заголовок</button>
        </div>
    );
};

export default TitleBlock;
