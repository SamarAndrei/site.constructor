import React, { useState } from 'react';
import '../../myconstructor/myconstructor.css';

const ImageBlockItem = ({ id, imageUrl, caption, updateImageBlock, removeImageBlock, openSidebar, openSettingsModal, openContentModal }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="image-block-item block-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="block-controls image-block-controls">
                    <button onClick={() => openSettingsModal({ id, imageUrl, caption })}>Настройки</button>
                    <button onClick={() => openContentModal({ id, imageUrl, caption })}>Контент</button>
                    <button onClick={() => removeImageBlock(id)}>🗑️</button>
                </div>
            )}
            <div className="image-block-content">
                <img src={imageUrl} alt={caption} />
                <p>{caption}</p>
            </div>
            {hovered && <button className="add-button" onClick={openSidebar}>+</button>}
        </div>
    );
};

export default ImageBlockItem;
