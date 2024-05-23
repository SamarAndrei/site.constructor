import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import '../../myconstructor/myconstructor.css';

const FormConstructorBlockItem = ({ 
    id, 
    title, 
    description, 
    backgroundColor, 
    buttonText, 
    buttonColor, 
    buttonTextColor,  // New property
    titleColor,  // New property
    descriptionColor,  // New property
    openSettingsModal, 
    openContentModal, 
    removeFormBlock, 
    openSidebar 
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="form-block-item block-item"
            style={{ backgroundColor: backgroundColor || '#ffffff' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, title, description, backgroundColor, buttonText, buttonColor, buttonTextColor, titleColor, descriptionColor }, 'formBlock')}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, title, description, backgroundColor, buttonText, buttonColor, buttonTextColor, titleColor, descriptionColor }, 'formBlock')}>Контент</MyButton>
                    <MyButton onClick={() => removeFormBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="form-block-content">
                <h3 style={{ color: titleColor || '#000000' }}>{title || 'Заголовок формы'}</h3>
                <p style={{ color: descriptionColor || '#000000' }}>{description || 'Описание: Укажите поля и данные, которые необходимо заполнить клиенту для заказа услуги или связи с вами.'}</p>
                <div className="form-inputs">
                    <input type="text" placeholder="Имя" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Телефон" />
                </div>
                <MyButton style={{ backgroundColor: buttonColor || '#000000', color: buttonTextColor || '#ffffff' }}>{buttonText || 'Отправить'}</MyButton>
                {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
            </div>
        </div>
    );
};

export default FormConstructorBlockItem;

