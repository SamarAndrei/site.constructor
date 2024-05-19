import React from 'react';
import '../../myconstructor/myconstructor.css'

const CoverBlockItem = ({ id, title, subtitle, backgroundImage, updateCoverBlock, removeCoverBlock, openSidebar, openSettingsModal, openContentModal }) => {
    return (
        <div className="cover-block-item">
            <div className="cover-block-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="cover-block-controls">
                <button onClick={() => openSettingsModal({ id, title, subtitle, backgroundImage })}>Настройки</button>
                <button onClick={() => openContentModal({ id, title, subtitle, backgroundImage })}>Контент</button>
                <button onClick={() => removeCoverBlock(id)}>🗑️</button>
            </div>
            <button className="add-button" onClick={openSidebar}>+</button>
        </div>
    );
};

export default CoverBlockItem;