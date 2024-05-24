import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';
import { Padding } from '@mui/icons-material';

const CoverBlockItem = ({ id, title, subtitle, description, backgroundImage, overlayOpacity, updateCoverBlock, removeCoverBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="cover-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                color: 'white',
                textAlign: 'center',
                maxWidth: '100%',
                height: '400px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            {hovered && (
                <div className="block-controls cover-block-controls ">
                    <MyButton onClick={() => openSettingsModal({ id, title, subtitle, description, backgroundImage, overlayOpacity }, 'coverBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, title, subtitle, description, backgroundImage, overlayOpacity }, 'coverBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeCoverBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="overlay" style={{ opacity: overlayOpacity }}></div>
            <div className="cover-block-content">
                <h6 style={{ color: title?.color }}>{title?.text}</h6>
                <h1 style={{ color: subtitle?.color }}>{subtitle?.text}</h1>
                <p style={{ color: description?.color }}>{description?.text}</p>
            </div>
            {hovered && (
                <button
                    className="add-button"
                    onClick={openSidebar}
                >
                    +
                </button>
            )}
        </div>
    );
};

export default CoverBlockItem;
