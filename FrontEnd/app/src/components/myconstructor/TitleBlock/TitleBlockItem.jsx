import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';

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
                    <MyButton onClick={() => openSettingsModal({ id, title, content, size, color, alignment })}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, title , content, size, color, alignment })}>Контент</MyButton>
                    <MyButton onClick={() => removeTitleBlock(id)}>🗑️</MyButton>
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

