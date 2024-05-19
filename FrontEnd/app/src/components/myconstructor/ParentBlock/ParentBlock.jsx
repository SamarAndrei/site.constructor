import React, { useState } from 'react';
import Sidebar from '../../UI/Sidebar/Sidebar'
import PopupSidebar from '../../UI/Sidebar/PopupSidebar'
import Modal from '../../UI/Modal/Modal'
import ContentModal from '../../UI/Modal/ContentModal'
import CoverBlockItem from '../../myconstructor/CoverBlock/CoverBlockItem';
import TitleBlockItem from '../../myconstructor/TitleBlock/TitleBlockItem';
import TextBlockItem from '../../myconstructor/TextBlock/TextBlockItem';
import ImageBlockItem from '../../myconstructor/ImageBlock/ImageBlockItem';
import ButtonBlockItem from '../../myconstructor/ButtonBlock/ButtonBlock';
import '../../myconstructor/myconstructor.css'


function ParentBlock() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [popupSidebarVisible, setPopupSidebarVisible] = useState(false);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [buttons, setButtons] = useState([]);
    const [textBlocks, setTextBlocks] = useState([]);
    const [titleBlocks, setTitleBlocks] = useState([]);
    const [coverBlocks, setCoverBlocks] = useState([]);
    const [imageBlocks, setImageBlocks] = useState([]);
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [contentModalVisible, setContentModalVisible] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);
    const [elementType, setElementType] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const selectBlock = (block) => {
        setSelectedBlock(block);
        setSidebarVisible(false);
        setPopupSidebarVisible(true);
    };

    const addButtons = (newButtons) => {
        setButtons([...buttons, ...newButtons]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addTextBlock = (newTextBlocks) => { 
        setTextBlocks([...textBlocks, ...newTextBlocks]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addTitleBlock = (newTitleBlocks) => {
        setTitleBlocks([...titleBlocks, ...newTitleBlocks]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addCoverBlock = (newCoverBlock) => {
        setCoverBlocks([...coverBlocks, newCoverBlock]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addImageBlock = (newImageBlock) => {
        setImageBlocks([...imageBlocks, newImageBlock]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const updateButton = (id, updatedProperties) => {
        setButtons(buttons.map(button =>
            button.id === id ? { ...button, ...updatedProperties } : button
        ));
    };

    const removeButton = (id) => {
        setButtons(buttons.filter(button => button.id !== id));
    };

    const updateTextBlock = (id, updatedProperties) => {
        setTextBlocks(textBlocks.map(textBlock =>
            textBlock.id === id ? { ...textBlock, ...updatedProperties } : textBlock
        ));
    };

    const removeTextBlock = (id) => {
        setTextBlocks(textBlocks.filter(textBlock => textBlock.id !== id));
    };

    const updateTitleBlock = (id, updatedProperties) => {
        setTitleBlocks(titleBlocks.map(titleBlock =>
            titleBlock.id === id ? { ...titleBlock, ...updatedProperties } : titleBlock
        ));
    };

    const removeTitleBlock = (id) => {
        setTitleBlocks(titleBlocks.filter(titleBlock => titleBlock.id !== id));
    };

    const updateCoverBlock = (id, updatedProperties) => {
        setCoverBlocks(coverBlocks.map(coverBlock =>
            coverBlock.id === id ? { ...coverBlock, ...updatedProperties } : coverBlock
        ));
    };

    const removeCoverBlock = (id) => {
        setCoverBlocks(coverBlocks.filter(coverBlock => coverBlock.id !== id));
    };

    const updateImageBlock = (id, updatedProperties) => {
        setImageBlocks(imageBlocks.map(imageBlock =>
            imageBlock.id === id ? { ...imageBlock, ...updatedProperties } : imageBlock
        ));
    };

    const removeImageBlock = (id) => {
        setImageBlocks(imageBlocks.filter(imageBlock => imageBlock.id !== id));
    };

    const openSidebar = () => {
        setSidebarVisible(true);
        setPopupSidebarVisible(false);
    };

    const openSettingsModal = (element, type) => {
        if (element) {
            setCurrentElement(element);
            setElementType(type);
            setSettingsModalVisible(true);
        }
    };

    const closeSettingsModal = () => {
        setSettingsModalVisible(false);
        setCurrentElement(null);
        setElementType(null);
    };

    const openContentModal = (element, type) => {
        if (element) {
            setCurrentElement(element);
            setElementType(type);
            setContentModalVisible(true);
        }
    };

    const closeContentModal = () => {
        setContentModalVisible(false);
        setCurrentElement(null);
        setElementType(null);
    };
    
    return (
        <div>
            <button onClick={toggleSidebar}>ВСЕ БЛОКИ</button>
            <Sidebar 
                sidebarVisible={sidebarVisible}
                selectBlock={selectBlock}
            />
            {popupSidebarVisible && (
                <PopupSidebar 
                    block={selectedBlock} 
                    setSelectedBlock={setSelectedBlock} 
                    addButtons={addButtons} 
                    addTextBlock={addTextBlock} 
                    addTitleBlock={addTitleBlock}
                    addCoverBlock={addCoverBlock}
                    addImageBlock={addImageBlock}
            />
            )}
            <div id="mainContent">
                {buttons.map(button => (
                    <ButtonBlockItem 
                        key={button.id} 
                        {...button} 
                        updateButton={updateButton} 
                        removeButton={removeButton} 
                        openSidebar={openSidebar} 
                        openSettingsModal={() => openSettingsModal(button, 'button')}
                        openContentModal={() => openContentModal(button, 'button')}
                    />
                ))}
                {textBlocks.map(textBlock => (
                    <TextBlockItem
                        key={textBlock.id}
                        {...textBlock}
                        updateTextBlock={updateTextBlock}
                        removeTextBlock={removeTextBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(textBlock, 'textBlock')}
                        openContentModal={() => openContentModal(textBlock, 'textBlock')}
                    />
                ))}
                {titleBlocks.map(titleBlock => (
                    <TitleBlockItem
                        key={titleBlock.id}
                        {...titleBlock}
                        updateTitleBlock={updateTitleBlock}
                        removeTitleBlock={removeTitleBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(titleBlock, 'titleBlock')}
                        openContentModal={() => openContentModal(titleBlock, 'titleBlock')}
                    />
                ))}
                {coverBlocks.map(coverBlock => (
                    <CoverBlockItem
                        key={coverBlock.id}
                        {...coverBlock}
                        updateCoverBlock={updateCoverBlock}
                        removeCoverBlock={removeCoverBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(coverBlock, 'coverBlock')}
                        openContentModal={() => openContentModal(coverBlock, 'coverBlock')}
                    />
                ))}
                {imageBlocks.map(imageBlock => (
                    <ImageBlockItem
                        key={imageBlock.id}
                        {...imageBlock}
                        updateImageBlock={updateImageBlock}
                        removeImageBlock={removeImageBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(imageBlock, 'imageBlock')}
                        openContentModal={() => openContentModal(imageBlock, 'imageBlock')}
                    />
                ))}
            </div>
            {settingsModalVisible && (
                <Modal 
                    element={currentElement} 
                    updateElement={elementType === 'button' ? updateButton : elementType === 'textBlock' ? updateTextBlock : elementType === 'titleBlock' ? updateTitleBlock : elementType === 'coverBlock' ? updateCoverBlock : updateImageBlock} 
                    closeModal={closeSettingsModal} 
                    type={elementType}
                />
            )}
            {contentModalVisible && (
                <ContentModal 
                    element={currentElement} 
                    updateElement={elementType === 'button' ? updateButton : elementType === 'textBlock' ? updateTextBlock : elementType === 'titleBlock' ? updateTitleBlock : elementType === 'coverBlock' ? updateCoverBlock : updateImageBlock} 
                    closeModal={closeContentModal} 
                    type={elementType}
                />
            )}
        </div>
    );
}

export default ParentBlock;
