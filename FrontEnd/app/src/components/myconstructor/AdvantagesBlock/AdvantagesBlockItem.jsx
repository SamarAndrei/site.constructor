import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import galocka from '../../../assets/images/galochka.png';
import '../../myconstructor/myconstructor.css';

const AdvantagesBlockItem = ({ id, title, description, advantages = [], updateAdvantageBlock, removeAdvantageBlock, openSettingsModal, text, color, openContentModal, openSidebar }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="advantage-block-item block-item"
            style={{ backgroundColor: color || 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px', position: 'relative' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls" style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '5px' }}>
                    <MyButton onClick={() => openSettingsModal({ id, title, description, advantages, text, color }, 'advantageBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, color, }, 'textBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeAdvantageBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div style={{ marginBottom: '20px' }}>
                <h3>{title}</h3>
                <p>{description}</p>
                {text && <p>{text}</p>}
            </div>
            <div style={{ paddingLeft: '20px' }}>
                {advantages.length > 0 ? (
                    advantages.map((adv, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <img src={galocka} alt="Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <div>
                                <h4>{adv.title}</h4>
                                <p>{adv.description}</p>
                            </div>
                        </div>
                    ))
                ) : null}
                {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
            </div>
        </div>
    );
};

export default AdvantagesBlockItem;
