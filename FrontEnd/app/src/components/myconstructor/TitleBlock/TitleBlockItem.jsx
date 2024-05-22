import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';

const TitleBlockItem = ({ id, title, content, size, color, alignment, updateTitleBlock, removeTitleBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="title-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: size,
                color: color,
                textAlign: alignment,
            }}
        >
            {hovered && (
                <div className="block-controls title-block-controls">
                    <button onClick={() => openSettingsModal({ id, title, content, size, color, alignment })}>Настройки</button>
                    <button onClick={() => openContentModal({ id, title , content, size, color, alignment })}>Контент</button>
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
