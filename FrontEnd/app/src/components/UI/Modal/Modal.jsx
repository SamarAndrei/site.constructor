import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ element, updateElement, closeModal, type }) => {
    const [tempElement, setTempElement] = useState({ ...element });

    if (!element) return null;

    const { id, text, backgroundColor, color, size, alignment, content, title, imageUrl, overlayColor } = tempElement;

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

    const handleImageUrlChange = (e) => {
        setTempElement({ ...tempElement, imageUrl: e.target.value });
    };

    const handleOverlayColorChange = (e) => {
        setTempElement({ ...tempElement, overlayColor: e.target.value });
    };

    const handleSave = () => {
        updateElement(tempElement.id, tempElement);
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {type === 'button' && (
                    <>
                        <h2>Настройки кнопки</h2>
                        <div>
                            <label>Текст кнопки:</label>
                            <input type="text" value={text || ''} onChange={handleTextChange} />
                        </div>
                        <div>
                            <label>Цвет фона:</label>
                            <input type="color" value={backgroundColor || '#ffffff'} onChange={handleBackgroundColorChange} />
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" value={color || '#000000'} onChange={handleColorChange} />
                        </div>
                        <div>
                            <label>Размер:</label>
                            <select value={size || 'medium'} onChange={handleSizeChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Расположение:</label>
                            <select value={alignment || 'center'} onChange={handleAlignmentChange}>
                                <option value="left">Слева</option>
                                <option value="center">Центр</option>
                                <option value="right">Справа</option>
                            </select>
                        </div>
                    </>
                )}
                {type === 'textBlock' && (
                    <>
                        <h2>Настройки текстового блока</h2>
                        <div>
                            <label>Контент:</label>
                            <textarea value={content || ''} onChange={handleContentChange} />
                        </div>
                        <div>
                            <label>Размер текста:</label>
                            <select value={size || 'medium'} onChange={handleSizeChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" value={color || '#000000'} onChange={handleColorChange} />
                        </div>
                        <div>
                            <label>Расположение текста:</label>
                            <select value={alignment || 'center'} onChange={handleAlignmentChange}>
                                <option value="left">Слева</option>
                                <option value="center">Центр</option>
                                <option value="right">Справа</option>
                            </select>
                        </div>
                    </>
                )}
                {type === 'titleBlock' && (
                    <>
                        <h2>Настройки блока заголовка</h2>
                        <div>
                            <label>Заголовок:</label>
                            <input type="text" value={title || ''} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label>Размер текста:</label>
                            <select value={size || 'medium'} onChange={handleSizeChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" value={color || '#000000'} onChange={handleColorChange} />
                        </div>
                        <div>
                            <label>Расположение текста:</label>
                            <select value={alignment || 'center'} onChange={handleAlignmentChange}>
                                <option value="left">Слева</option>
                                <option value="center">Центр</option>
                                <option value="right">Справа</option>
                            </select>
                        </div>
                    </>
                )}
                {type === 'coverBlock' && (
                    <>
                        <h2>Настройки блока обложки</h2>
                        <div>
                            <label>Заголовок:</label>
                            <input type="text" value={title || ''} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label>Цвет наложения:</label>
                            <input type="color" value={overlayColor || '#000000'} onChange={handleOverlayColorChange} />
                        </div>
                    </>
                )}
                {type === 'imageBlock' && (
                    <>
                        <h2>Настройки блока изображения</h2>
                        <div>
                            <label>URL изображения:</label>
                            <input type="text" value={imageUrl || ''} onChange={handleImageUrlChange} />
                        </div>
                    </>
                )}
                <button className="save-button" onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default Modal;
