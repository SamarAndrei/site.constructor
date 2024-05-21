import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton'

const ButtonBlockItem = ({ id, text, backgroundColor, color, size, alignment, updateButton, removeButton, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    const alignmentStyle = {
        left: { justifyContent: 'flex-start' },
        center: { justifyContent: 'center' },
        right: { justifyContent: 'flex-end' }
    }[alignment];

    return (
        <div
            className="button-block block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <button onClick={() => openSettingsModal({ id, text, backgroundColor, color, size, alignment }, 'button')}>Настройки</button>
                    <button onClick={() => openContentModal({ id, text, backgroundColor, color, size, alignment }, 'button')}>Контент</button>
                    <button onClick={() => removeButton(id)}>🗑️</button>
                </div>
            )}
            <div style={{ display: 'flex', ...alignmentStyle }}>
                <button style={{ backgroundColor, color, padding: size === 'large' ? '10px 20px' : size === 'medium' ? '8px 16px' : '6px 12px' }}>
                    {text}
                </button>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default ButtonBlockItem;
