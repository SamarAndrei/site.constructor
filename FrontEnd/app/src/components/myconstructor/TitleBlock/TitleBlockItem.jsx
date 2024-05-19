import React from 'react';
import '../../myconstructor/myconstructor.css'

const TitleBlockItem = ({ id, title, updateTitleBlock, removeTitleBlock, openSidebar, openSettingsModal, openContentModal }) => {
    return (
        <div className="title-block-item">
            <div className="title-block-content">
                <h1>{title}</h1>
            </div>
            <div className="title-block-controls">
                <button onClick={() => openSettingsModal({ id, title })}>Настройки</button>
                <button onClick={() => openContentModal({ id, title })}>Контент</button>
                <button onClick={() => removeTitleBlock(id)}>🗑️</button>
            </div>
            <button className="add-button" onClick={openSidebar}>+</button>
        </div>
    );
};

export default TitleBlockItem;
