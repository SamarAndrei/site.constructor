import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';

const CoverBlockItem = ({ id, title, subtitle, description, backgroundImage, updateCoverBlock, removeCoverBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="cover-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: 'medium',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {hovered && (
                <div className="block-controls cover-block-controls">
                    <button onClick={() => openSettingsModal({ id, title, subtitle, description, backgroundImage })}>Настройки</button>
                    <button onClick={() => openContentModal({ id, title, subtitle, description, backgroundImage })}>Контент</button>
                    <button onClick={() => removeCoverBlock(id)}>🗑️</button>
                </div>
            )}
            {backgroundImage && (
                <img 
                    src={backgroundImage} 
                    alt="Cover" 
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
                />
            )}
            <div className="cover-block-content">
                <h6>{title}</h6>
                <h1>{subtitle}</h1>
                <p>{description}</p>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default CoverBlockItem;
