import React from 'react';
import '../../myconstructor/myconstructor.css'
const TextBlockItem = ({ id, content, updateTextBlock, removeTextBlock, openSidebar, openSettingsModal, openContentModal }) => {
    return (
        <div className="text-block-item">
            <div className="text-block-content">
                <p>{content}</p>
            </div>
            <div className="text-block-controls">
                <button onClick={() => openSettingsModal({ id, content }, 'textBlock')}>Настройки</button>
                <button onClick={() => openContentModal({ id, content }, 'textBlock')}>Контент</button>
                <button onClick={() => removeTextBlock(id)}>🗑️</button>
            </div>
            <button className="add-button" onClick={openSidebar}>+</button>
        </div>
    );
};

export default TextBlockItem;
