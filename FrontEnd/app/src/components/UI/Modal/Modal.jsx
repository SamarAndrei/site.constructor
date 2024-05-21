import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ element, updateElement, closeModal, type }) => {
    const [tempElement, setTempElement] = useState({ ...element });

    if (!element) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempElement({ ...tempElement, [name]: value });
    };

    const handleSave = () => {
        updateElement(tempElement.id, tempElement);
        closeModal();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setTempElement({ ...tempElement, backgroundImage: reader.result });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
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
                            <input type="text" name="text" value={tempElement.text || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Цвет фона:</label>
                            <input type="color" name="backgroundColor" value={tempElement.backgroundColor || '#ffffff'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" name="color" value={tempElement.color || '#000000'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Размер:</label>
                            <select name="size" value={tempElement.size || 'medium'} onChange={handleChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Расположение:</label>
                            <select name="alignment" value={tempElement.alignment || 'center'} onChange={handleChange}>
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
                            <textarea name="content" value={tempElement.content || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Размер текста:</label>
                            <select name="size" value={tempElement.size || 'medium'} onChange={handleChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" name="color" value={tempElement.color || '#000000'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Расположение текста:</label>
                            <select name="alignment" value={tempElement.alignment || 'center'} onChange={handleChange}>
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
                            <input type="text" name="title" value={tempElement.title || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Размер текста:</label>
                            <select name="size" value={tempElement.size || 'medium'} onChange={handleChange}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" name="color" value={tempElement.color || '#000000'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Расположение текста:</label>
                            <select name="alignment" value={tempElement.alignment || 'center'} onChange={handleChange}>
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
                            <label>Надзаголовок:</label>
                            <input type="text" name="title" value={tempElement.title || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Заголовок:</label>
                            <input type="text" name="subtitle" value={tempElement.subtitle || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Описание:</label>
                            <input type="text" name="description" value={tempElement.description || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Фоновое изображение (URL):</label>
                            <input type="text" name="backgroundImage" value={tempElement.backgroundImage || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Или загрузите изображение:</label>
                            <input type="file" name="file" onChange={handleFileChange} />
                        </div>
                    </>
                )}
                {type === 'imageBlock' && (
                    <>
                        <h2>Настройки блока изображения</h2>
                        <div>
                            <label>URL изображения:</label>
                            <input type="text" name="imageUrl" value={tempElement.imageUrl || ''} onChange={handleChange} />
                        </div>
                    </>
                )}
                <button className="save-button" onClick={handleSave}>Сохранить</button>
            </div>
        </div>
    );
};

export default Modal;
