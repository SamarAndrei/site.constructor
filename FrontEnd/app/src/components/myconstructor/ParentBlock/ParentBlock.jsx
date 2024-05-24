import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../../UI/Sidebar/Sidebar';
import PopupSidebar from '../../UI/Sidebar/PopupSidebar';
import Modal from '../../UI/Modal/Modal';
import ContentModal from '../../UI/Modal/ContentModal';
import CoverBlockItem from '../../myconstructor/CoverBlock/CoverBlockItem';
import TitleBlockItem from '../../myconstructor/TitleBlock/TitleBlockItem';
import TextBlockItem from '../../myconstructor/TextBlock/TextBlockItem';
import ImageBlockItem from '../../myconstructor/ImageBlock/ImageBlockItem';
import ButtonBlockItem from '../../myconstructor/ButtonBlock/ButtonBlock';
import HeaderConstructorItem from '../../myconstructor/HeaderConstructor/HeaderConstructorItem';
import FormConstructorBlockItem from '../../myconstructor/FormConstructorBlock/FormConstructorBlockItem';
import FooterConstructorBlockItem from '../../myconstructor/FooterConstructorBlock/FooterConstructorBlockItem';
import '../../myconstructor/myconstructor.css';
import MyButton from '../../UI/Buttons/MyButton';

function ParentBlock() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [popupSidebarVisible, setPopupSidebarVisible] = useState(false);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [buttons, setButtons] = useState([]);
    const [textBlocks, setTextBlocks] = useState([]);
    const [titleBlocks, setTitleBlocks] = useState([]);
    const [coverBlocks, setCoverBlocks] = useState([]);
    const [imageBlocks, setImageBlocks] = useState([]);
    const [headerBlocks, setHeaderBlocks] = useState([]);
    const [formBlocks, setFormBlocks] = useState([]);
    const [footerBlocks, setFooterBlocks] = useState([]); 
    const [settingsModalVisible, setSettingsModalVisible] = useState(false);
    const [contentModalVisible, setContentModalVisible] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);
    const [elementType, setElementType] = useState(null);

    const sidebarRef = useRef(null);
    const popupSidebarRef = useRef(null);

    const collectBlocks = () => {
        return {
            buttons,
            textBlocks,
            titleBlocks,
            coverBlocks,
            imageBlocks,
            headerBlocks,
            formBlocks,
            footerBlocks, 
        };
    };

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };

    const selectBlock = (block) => {
        setSelectedBlock(block);
        setSidebarVisible(false);
        setPopupSidebarVisible(true);
    };

    const addButtonBlock = (newButtons) => {
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

    const addHeaderBlock = (newHeaderBlock) => {
        setHeaderBlocks([...headerBlocks, newHeaderBlock]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addFormBlock = (newFormBlock) => {
        setFormBlocks([...formBlocks, newFormBlock]);
        setSelectedBlock(null);
        setPopupSidebarVisible(false);
    };

    const addFooterBlock = (newFooterBlock) => { 
        setFooterBlocks([...footerBlocks, newFooterBlock]);
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

    const updateHeaderBlock = (id, updatedProperties) => {
        setHeaderBlocks(headerBlocks.map(headerBlock =>
            headerBlock.id === id ? { ...headerBlock, ...updatedProperties } : headerBlock
        ));
    };

    const removeHeaderBlock = (id) => {
        setHeaderBlocks(headerBlocks.filter(headerBlock => headerBlock.id !== id));
    };

    const updateFormBlock = (id, updatedProperties) => {
        setFormBlocks(formBlocks.map(formBlock =>
            formBlock.id === id ? { ...formBlock, ...updatedProperties } : formBlock
        ));
    };

    const removeFormBlock = (id) => {
        setFormBlocks(formBlocks.filter(formBlock => formBlock.id !== id));
    };

    const updateFooterBlock = (id, updatedProperties) => { 
        setFooterBlocks(footerBlocks.map(footerBlock =>
            footerBlock.id === id ? { ...footerBlock, ...updatedProperties } : footerBlock
        ));
    };

    const removeFooterBlock = (id) => { 
        setFooterBlocks(footerBlocks.filter(footerBlock => footerBlock.id !== id));
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

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarVisible(false);
        }
        if (popupSidebarRef.current && !popupSidebarRef.current.contains(event.target)) {
            setPopupSidebarVisible(false);
        }
    };

    useEffect(() => {
        if (sidebarVisible || popupSidebarVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarVisible, popupSidebarVisible]);

    return (
        <div>
            <MyButton onClick={toggleSidebar}>ВСЕ БЛОКИ</MyButton>
            <Sidebar 
                ref={sidebarRef}
                sidebarVisible={sidebarVisible}
                selectBlock={selectBlock}
            />
            {popupSidebarVisible && (
                <PopupSidebar 
                    ref={popupSidebarRef}
                    block={selectedBlock} 
                    setSelectedBlock={setSelectedBlock} 
                    addButtonBlock={addButtonBlock} 
                    addTextBlock={addTextBlock} 
                    addTitleBlock={addTitleBlock}
                    addCoverBlock={addCoverBlock}
                    addImageBlock={addImageBlock}
                    addHeaderBlock={addHeaderBlock}
                    addFormBlock={addFormBlock}
                    addFooterBlock={addFooterBlock} 
                    collectBlocks={collectBlocks}
                />
            )}
            <div id="mainContent">
                {headerBlocks.map(headerBlock => (
                    <HeaderConstructorItem
                        key={headerBlock.id}
                        {...headerBlock}
                        updateHeaderBlock={updateHeaderBlock}
                        removeHeaderBlock={removeHeaderBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(headerBlock, 'headerBlock')}
                        openContentModal={() => openContentModal(headerBlock, 'headerBlock')}
                    />
                ))}
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
                {formBlocks.map(formBlock => (
                    <FormConstructorBlockItem
                        key={formBlock.id}
                        {...formBlock}
                        updateFormBlock={updateFormBlock}
                        removeFormBlock={removeFormBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(formBlock, 'formBlock')}
                        openContentModal={() => openContentModal(formBlock, 'formBlock')}
                    />
                ))}
                {footerBlocks.map(footerBlock => ( 
                    <FooterConstructorBlockItem
                        key={footerBlock.id}
                        {...footerBlock}
                        updateFooterBlock={updateFooterBlock}
                        removeFooterBlock={removeFooterBlock}
                        openSidebar={openSidebar}
                        openSettingsModal={() => openSettingsModal(footerBlock, 'footerBlock')}
                        openContentModal={() => openContentModal(footerBlock, 'footerBlock')}
                    />
                ))}
            </div>
            {settingsModalVisible && (
                <Modal 
                    element={currentElement} 
                    updateElement={
                        elementType === 'button' ? updateButton : 
                        elementType === 'textBlock' ? updateTextBlock : 
                        elementType === 'titleBlock' ? updateTitleBlock : 
                        elementType === 'coverBlock' ? updateCoverBlock : 
                        elementType === 'headerBlock' ? updateHeaderBlock : 
                        elementType === 'formBlock' ? updateFormBlock :
                        elementType === 'footerBlock' ? updateFooterBlock : 
                        updateImageBlock
                    } 
                    closeModal={closeSettingsModal} 
                    type={elementType}
                />
            )}
            {contentModalVisible && (
                <ContentModal 
                    element={currentElement} 
                    updateElement={
                        elementType === 'button' ? updateButton : 
                        elementType === 'textBlock' ? updateTextBlock : 
                        elementType === 'titleBlock' ? updateTitleBlock : 
                        elementType === 'coverBlock' ? updateCoverBlock : 
                        elementType === 'headerBlock' ? updateHeaderBlock : 
                        elementType === 'formBlock' ? updateFormBlock :
                        elementType === 'footerBlock' ? updateFooterBlock : 
                        updateImageBlock
                    } 
                    closeModal={closeContentModal} 
                    type={elementType}
                />
            )}
        </div>
    );
}

export default ParentBlock;