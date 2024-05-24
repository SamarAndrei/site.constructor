import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import '../../myconstructor/myconstructor.css';
import vkicon from '../../../assets/images/vkicon.png';
import telegramicon from '../../../assets/images/telegramicon.png';

const FooterConstructorBlockItem = ({ 
    id, 
    content, 
    textColor, 
    backgroundColor, 
    buttons = [], 
    vkLink,
    tgLink,
    updateFooterBlock, 
    removeFooterBlock, 
    openSettingsModal, 
    openContentModal, 
    openSidebar 
}) => {
    const [hovered, setHovered] = useState(false);

    const defaultButtons = ['About', 'Features', 'Works', 'Blog', 'Help', 'Contacts'];

    return (
        <div
            className="footer-block-item block-item"
            style={{ backgroundColor: backgroundColor || '#ffffff', color: textColor || '#000000' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, content, textColor, backgroundColor, buttons, vkLink, tgLink }, 'footerBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, content, textColor, backgroundColor, buttons, vkLink, tgLink }, 'footerBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeFooterBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="footer-block-content">
                <div className="footer-buttons">
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
                <div className="footer-center-text">{content || '© Все права защищены. Acme Design Co. hello@mysite.com'}</div>
                <div className="footer-social-icons">
                    {vkLink && (
                        <a href={vkLink} target="_blank" rel="noopener noreferrer">
                            <img src={vkicon} alt="ВКонтакте" />
                        </a>
                    )}
                    {tgLink && (
                        <a href={tgLink} target="_blank" rel="noopener noreferrer">
                            <img src={telegramicon} alt="Телеграм" />
                        </a>
                    )}
                </div>
                {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
            </div>
        </div>
    );
};

export default FooterConstructorBlockItem;
