import React from 'react';
import '../../myconstructor/myconstructor.css'
const ImageBlockItem = ({ id, imageUrl, caption, updateImageBlock, removeImageBlock, openSidebar, openSettingsModal, openContentModal }) => {
    return (
        <div className="image-block-item">
            <div className="image-block-content">
                <img src={imageUrl} alt={caption} />
                <p>{caption}</p>
            </div>
            <div className="image-block-controls">
                <button onClick={() => openSettingsModal({ id, imageUrl, caption })}>Настройки</button>
                <button onClick={() => openContentModal({ id, imageUrl, caption })}>Контент</button>
                <button onClick={() => removeImageBlock(id)}>🗑️</button>
            </div>
            <button className="add-button" onClick={openSidebar}>+</button>
        </div>
    );
};

export default ImageBlockItem;
