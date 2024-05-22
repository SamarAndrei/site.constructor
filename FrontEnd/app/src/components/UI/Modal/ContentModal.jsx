import React, { useState } from 'react';
import './Modal.css';
import MyButton from '../../UI/Buttons/MyButton';
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
                    </>
                ) : type === 'imageBlock' ? (
                    <>
                        <h2>Настройки блока изображения</h2>
                        <div>
                            <label>URL изображения:</label>
                            <input type="text" name="imageUrl" value={tempElement.imageUrl || ''} onChange={handleChange} />
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
                ) : null}
                <MyButton className="save-button" onClick={handleSave}>Сохранить</MyButton>
            </div>
        </div>
    );
};

export default ContentModal;
