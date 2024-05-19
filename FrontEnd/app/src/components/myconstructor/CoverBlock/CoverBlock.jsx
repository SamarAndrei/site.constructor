import React from 'react';

const CoverBlock = ({ addCoverBlock }) => {
    const handleAddCoverBlock = () => {
        const newCoverBlock = {
            id: Date.now(),
            title: "Заголовок",
            subtitle: "Подзаголовок",
            backgroundImage: "https://via.placeholder.com/150"
        };
        addCoverBlock(newCoverBlock);
    };

    return (
        <div>
            <button onClick={handleAddCoverBlock}>Добавить Cover Block</button>
        </div>
    );
};

export default CoverBlock;
