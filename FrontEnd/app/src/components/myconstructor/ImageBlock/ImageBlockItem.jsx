import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';

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
                    <button onClick={() => openSettingsModal({ id, imageUrl, caption, title, content, size, color, alignment, overlayOpacity})}>Настройки</button>
                    <button onClick={() => openContentModal({ id, imageUrl, caption, title, content, size, color, alignment,overlayOpacity })}>Контент</button>
                    <button onClick={() => removeImageBlock(id)}>🗑️</button>
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
