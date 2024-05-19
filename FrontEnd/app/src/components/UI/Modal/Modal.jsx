import React from 'react';
import './Modal.css';

const Modal = ({ element, updateElement, closeModal, type }) => {
    if (!element) return null;

    const { id, text, backgroundColor, color, size, alignment, content, title, imageUrl, overlayColor } = element;

    const handleTextChange = (e) => {
        updateElement(id, { text: e.target.value });
    };

    const handleBackgroundColorChange = (e) => {
        updateElement(id, { backgroundColor: e.target.value });
    };

    const handleColorChange = (e) => {
        updateElement(id, { color: e.target.value });
    };

    const handleSizeChange = (e) => {
        updateElement(id, { size: e.target.value });
    };

    const handleAlignmentChange = (e) => {
        updateElement(id, { alignment: e.target.value });
    };

    const handleContentChange = (e) => {
        updateElement(id, { content: e.target.value });
    };

    const handleTitleChange = (e) => {
        updateElement(id, { title: e.target.value });
    };

    const handleImageUrlChange = (e) => {
        updateElement(id, { imageUrl: e.target.value });
    };

    const handleOverlayColorChange = (e) => {
        updateElement(id, { overlayColor: e.target.value });
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
                    </>
                )}
                {type === 'titleBlock' && (
                    <>
                        <h2>Настройки блока заголовка</h2>
                        <div>
                            <label>Заголовок:</label>
                            <input type="text" value={title || ''} onChange={handleTitleChange} />
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
            </div>
        </div>
    );
};

export default Modal;
