import React, { useState } from 'react';
import './Modal.css'
import MyButton from '../../UI/Buttons/MyButton';

const Modal = ({ element, updateElement, closeModal, type }) => {
    const [tempElement, setTempElement] = useState({ ...element });

    if (!element) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [key, subKey] = name.split('.');
        if (subKey) {
            setTempElement((prev) => ({
                ...prev,
                [key]: {
                    ...prev[key],
                    [subKey]: value
                }
            }));
        } else {
            setTempElement({ ...tempElement, [name]: value });
        }
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

    const renderTextSettings = (prefix, label) => (
        <>
            <div>
                <label>{label}:</label>
                <input type="text" name={`${prefix}.text`} value={tempElement[prefix]?.text || ''} onChange={handleChange} />
            </div>
            <div>
                <label>Цвет текста {label}:</label>
                <input type="color" name={`${prefix}.color`} value={tempElement[prefix]?.color || '#000000'} onChange={handleChange} />
            </div>
        </>
    );

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
                {type === 'headerBlock' && (
                    <>
                        <h2>Настройки шапки</h2>
                        <div>
                            <label>Цвет фона блока:</label>
                            <input type="color" name="backgroundColor" value={tempElement.backgroundColor || '#ffffff'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Текст:</label>
                            <input type="text" name="content" value={tempElement.content || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Цвет текста:</label>
                            <input type="color" name="textColor" value={tempElement.textColor || '#000000'} onChange={handleChange} />
                        </div>
                        <h3>Настройки кнопок</h3>
                        {['О нас', 'Услуги', 'Контакты'].map((button, index) => (
                            <div key={index}>
                                <label>Текст кнопки {button}:</label>
                                <input type="text" name={`buttons[${index}].text`} value={tempElement.buttons?.[index]?.text || button} onChange={handleChange} />
                                <label>Цвет фона кнопки {button}:</label>
                                <input type="color" name={`buttons[${index}].backgroundColor`} value={tempElement.buttons?.[index]?.backgroundColor || '#ffffff'} onChange={handleChange} />
                                <label>Цвет текста кнопки {button}:</label>
                                <input type="color" name={`buttons[${index}].color`} value={tempElement.buttons?.[index]?.color || '#000000'} onChange={handleChange} />
                            </div>
                        ))}
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
                            <label>Цвет текста заголовка:</label>
                            <input type="color" name="color" value={tempElement.color || '#000000'} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Расположение заголовка:</label>
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
                        {renderTextSettings('title', 'Надзаголовок')}
                        {renderTextSettings('subtitle', 'Заголовок')}
                        {renderTextSettings('description', 'Описание')}
                        <div>
                            <label>URL изображения:</label>
                            <input type="text" name="backgroundImage" value={tempElement.backgroundImage || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Или загрузите изображение:</label>
                            <input type="file" name="file" onChange={handleFileChange} />
                        </div>
                        <div>
                            <label>Прозрачность затемнения:</label>
                            <input type="range" name="overlayOpacity" min="0" max="1" step="0.01" value={tempElement.overlayOpacity || 0} onChange={handleChange} />
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
                <MyButton onClick={handleSave}>Сохранить</MyButton>
            </div>
        </div>
    );
};

export default Modal;
