import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import galochka from '../../../assets/images/galochka.png';

const AdvantagesBlockItem = ({ id, title, description, updateAdvantagesBlock, removeAdvantagesBlock, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="advantages-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, title, description }, 'advantagesBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, title, description }, 'advantagesBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeAdvantagesBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="advantages-content">
                <img src={galochka} alt="галочка" className="advantages-icon" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AdvantagesBlockItem;
