import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';

const TextBlockItem = ({ id, content, updateTextBlock, removeTextBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="text-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <button onClick={() => openSettingsModal({ id, content }, 'textBlock')}>Настройки</button>
                    <button onClick={() => openContentModal({ id, content }, 'textBlock')}>Контент</button>
                    <button onClick={() => removeTextBlock(id)}>🗑️</button>
                </div>
            )}
            <div className="text-block-content">
                <p>{content}</p>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default TextBlockItem;
