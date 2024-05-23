import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import '../../myconstructor/myconstructor.css';

const HeaderConstructorItem = ({ id, content, textColor, backgroundColor, buttons = [], updateHeaderBlock, removeHeaderBlock, openSettingsModal, openContentModal, openSidebar }) => {
    const [hovered, setHovered] = useState(false);

    const defaultButtons = ['О нас', 'Услуги', 'Контакты'];

    return (
        <div
            className="header-block-item block-item"
            style={{ backgroundColor: backgroundColor || '#ffffff', color: textColor || '#000000' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, content, textColor, backgroundColor, buttons }, 'headerBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, content, textColor, backgroundColor, buttons }, 'headerBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeHeaderBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="header-block-content">
                <div className="header-buttons">
                    {defaultButtons.map((defaultText, index) => {
                        const button = buttons[index] || {};
                        return (
                            <MyButton
                                key={index}
                                style={{ backgroundColor: button.backgroundColor || '#000000', color: button.color || '#ffffff' }}
                            >
                                {button.text || defaultText}
                            </MyButton>
                        );
                    })}
                </div>
                <div className="header-center-text">{content}</div>
                {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
            </div>
        </div>
    );
};

export default HeaderConstructorItem;
