import React, { useState } from 'react';
import MyButton from '../../UI/Buttons/MyButton';
import '../../myconstructor/myconstructor.css';

const FormConstructorBlockItem = ({ id, openSettingsModal, openContentModal, removeHeaderBlock, openSidebar }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="form-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls">
                    <button onClick={() => openSettingsModal({ id }, 'formBlock')}>Настройки</button>
                    <button onClick={() => openContentModal({ id }, 'formBlock')}>Контент</button>
                    <button onClick={() => removeHeaderBlock(id)}>🗑️</button>
                </div>
            )}
            <div className="form-block-content">
                <h3>Заголовок формы</h3>
                <p>Описание: Укажите поля и данные, которые необходимо заполнить клиенту для заказа услуги или связи с вами.</p>
                <div className="form-inputs">
                    <input type="text" placeholder="Имя" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Телефон" />
                </div>
                <MyButton>Отправить</MyButton>
                {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
            </div>
        </div>
    );
};

export default FormConstructorBlockItem;
