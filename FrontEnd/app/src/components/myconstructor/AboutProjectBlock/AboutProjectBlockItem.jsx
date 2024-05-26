import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';

const AboutProjectBlockItem = ({ id, content, size, color, alignment, updateTextBlock, removeAboutProjectBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="text-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: size,
                color: color,
                textAlign: alignment,
            }}
        >
            {hovered && (
                <div className="block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, content, size, color, alignment }, 'textBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, content, size, color, alignment }, 'textBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeAboutProjectBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="text-block-content">
                <p>{content}</p>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default AboutProjectBlockItem;
