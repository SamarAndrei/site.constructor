import React, { useState } from 'react';
import './Modal.css';

const ContentModal = ({ element, updateElement, closeModal, type }) => {
    const [tempElement, setTempElement] = useState({ ...element });

    if (!element) {
        return null;
    }

    const handleTextChange = (e) => {
        setTempElement({ ...tempElement, text: e.target.value });
    };

    const handleBackgroundColorChange = (e) => {
        setTempElement({ ...tempElement, backgroundColor: e.target.value });
    };

    const handleColorChange = (e) => {
        setTempElement({ ...tempElement, color: e.target.value });
    };

    const handleSizeChange = (e) => {
        setTempElement({ ...tempElement, size: e.target.value });
    };

    const handleAlignmentChange = (e) => {
        setTempElement({ ...tempElement, alignment: e.target.value });
    };

    const handleContentChange = (e) => {
        setTempElement({ ...tempElement, content: e.target.value });
    };

    const handleTitleChange = (e) => {
        setTempElement({ ...tempElement, title: e.target.value });
    };

    const handleSave = () => {
        updateElement(tempElement.id, tempElement);
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {type === 'button' ? (
                    <>
                        <h2>Настройки кнопки</h2>
                        <div>
                            <label>Текст кнопки:</label>
                            <input type="text" value={tempElement.text} onChange={handleTextChange} />
                        </div>
                        <div>
                            <label>Цвет фона:</label>
                            <input type="color" value={tempElement.backgroundColor} onChange={handleBackgroundColorChange} />
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" value={tempElement.color} onChange={handleColorChange} />
                        </div>
                        <div>
                            <label>Размер:</label>
                            <select value={tempElement.size} onChange={handleSizeChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Расположение:</label>
                            <select value={tempElement.alignment} onChange={handleAlignmentChange}>
                                <option value="left">Слева</option>
                                <option value="center">Центр</option>
                                <option value="right">Справа</option>
                            </select>
                        </div>
                    </>
                ) : type === 'textBlock' ? (
                    <>
                        <h2>Настройки текстового блока</h2>
                        <div>
                            <label>Контент:</label>
                            <textarea value={tempElement.content} onChange={handleContentChange} />
                        </div>
                        
                    </>
                ) : type === 'titleBlock' ? (
                    <>
                        <h2>Настройки блока заголовка</h2>
                        <div>
                            <label>Заголовок:</label>
                            <input type="text" value={tempElement.title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label>Подзаголовок:</label>
                            <input type="text" value={tempElement.title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label>Описание:</label>
                            <input type="text" value={tempElement.title} onChange={handleTitleChange} />
                        </div>
                    </>
                ) : null}
                <button className="save-button" onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default ContentModal;
