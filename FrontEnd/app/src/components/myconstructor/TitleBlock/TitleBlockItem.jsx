import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';

const TitleBlockItem = ({ id, title, updateTitleBlock, removeTitleBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="title-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls title-block-controls">
                    <button onClick={() => openSettingsModal({ id, title })}>Настройки</button>
                    <button onClick={() => openContentModal({ id, title })}>Контент</button>
                    <button onClick={() => removeTitleBlock(id)}>🗑️</button>
                </div>
            )}
            <div className="title-block-content">
                <h1>{title}</h1>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default TitleBlockItem;
