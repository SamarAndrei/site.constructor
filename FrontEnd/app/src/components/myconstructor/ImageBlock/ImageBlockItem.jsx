import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';

const ImageBlockItem = ({ id, imageUrl,  title, content, size, color, overlayOpacity, alignment, caption, updateImageBlock, removeImageBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="image-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: size,
                color: color,
                textAlign: alignment,
            }}
        >
            {hovered && (
                <div className="block-controls image-block-controls">
                    <MyButton onClick={() => openSettingsModal({ id, imageUrl, caption, title, content, size, color, alignment, overlayOpacity})}>Настройки</MyButton>
                    <MyButton onClick={() => openContentModal({ id, imageUrl, caption, title, content, size, color, alignment,overlayOpacity })}>Контент</MyButton>
                    <MyButton onClick={() => removeImageBlock(id)}>🗑️</MyButton>
                </div>
            )}
            <div className="overlay" style={{ opacity: overlayOpacity }}></div>
            <div className="image-block-content">
                <img src={imageUrl} alt={caption} />
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default ImageBlockItem;
