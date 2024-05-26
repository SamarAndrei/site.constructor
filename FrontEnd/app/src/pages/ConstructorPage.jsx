import React, { useState } from "react";
import "./ConstructorPage.css";
import HeaderConstructorItem from "../components/myconstructor/HeaderConstructor/HeaderConstructorItem";
import CoverBlockItem from "../components/myconstructor/CoverBlock/CoverBlockItem";
import Modal from "../components/UI/Modal/Modal";
import coverblock from '../assets/images/coverblock.jpg';
import FormConstructorBlockItem from "../components/myconstructor/FormConstructorBlock/FormConstructorBlockItem";
import FooterConstructorBlockItem from "../components/myconstructor/FooterConstructorBlock/FooterConstructorBlockItem";




const Constructor = () => {
  const [headerBlock, setHeaderBlock] = useState({
      id: 1,
      content: "Наименование сайта",
      textColor: "#ffffff",
      backgroundColor: "black",
      buttons: []
  });

  const [coverBlock, setCoverBlock] = useState({
      id: 2,
      title: { text: "Заголовок", color: "#ffffff" },
      subtitle: { text: "Подзаголовок", color: "#ffffff" },
      description: { text: "Описание", color: "#ffffff" },
      backgroundImage: coverblock,
      overlayOpacity: 0.5
  });

  const [footerBlock, setFooterBlock] = useState({
    id: 4,
    content: "© Все права защищены. Acme Design Co. hello@mysite.com",
    textColor: "#ffffff",
    backgroundColor: "#000000",
    buttons: [],
    vkLink: "",
    tgLink: ""
});

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentElement, setCurrentElement] = useState(null);

  const updateHeaderBlock = (id, newData) => {
      setHeaderBlock((prevState) => ({
          ...prevState,
          ...newData
      }));
  };

  const [formBlock, setFormBlock] = useState({
    id: 3,
    title: "Обратная связь",
    description: "Пожалуйста, заполните для поддержания обратной связи с нами!",
    backgroundColor: "#f0f0f0",
    buttonText: "Отправить",
    buttonColor: "red",
    buttonTextColor: "#ffffff",
    titleColor: "#000000",
    descriptionColor: "#333333"
});

const updateFooterBlock = (id, newData) => {
  setFooterBlock((prevState) => ({
      ...prevState,
      ...newData
  }));
};

const removeFooterBlock = (id) => {
  setFooterBlock(null);
};

const updateCoverBlock = (id, newData) => {
  setCoverBlock((prevState) => ({
      ...prevState,
      ...newData
  }));
};

const updateFormBlock = (id, newData) => {
  setFormBlock((prevState) => ({
      ...prevState,
      ...newData
  }));
};

const removeHeaderBlock = (id) => {
  setHeaderBlock(null);
};

const removeCoverBlock = (id) => {
  setCoverBlock(null);
};

const removeFormBlock = (id) => {
  setFormBlock(null);
};

const openSettingsModal = (element, type) => {
  setCurrentElement(element);
  setModalType(type);
  setModalOpen(true);
};

const openContentModal = (element, type) => {
  setCurrentElement(element);
  setModalType(type);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  setCurrentElement(null);
  setModalType('');
};

const openSidebar = () => {
  console.log("Opening sidebar");
};

return (
  <div className="constructor-page">
      {headerBlock && (
          <HeaderConstructorItem
              {...headerBlock}
              updateHeaderBlock={updateHeaderBlock}
              removeHeaderBlock={removeHeaderBlock}
              openSettingsModal={openSettingsModal}
              openContentModal={openContentModal}
              openSidebar={openSidebar}
          />
      )}
      {coverBlock && (
          <CoverBlockItem
              {...coverBlock}
              updateCoverBlock={updateCoverBlock}
              removeCoverBlock={removeCoverBlock}
              openSettingsModal={openSettingsModal}
              openContentModal={openContentModal}
              openSidebar={openSidebar}
          />
      )}
      {formBlock && (
          <FormConstructorBlockItem
              {...formBlock}
              updateFormBlock={updateFormBlock}
              removeFormBlock={removeFormBlock}
              openSettingsModal={openSettingsModal}
              openContentModal={openContentModal}
              openSidebar={openSidebar}
          />
      )}
      {footerBlock && (
                <FooterConstructorBlockItem
                    {...footerBlock}
                    updateFooterBlock={updateFooterBlock}
                    removeFooterBlock={removeFooterBlock}
                    openSettingsModal={openSettingsModal}
                    openContentModal={openContentModal}
                    openSidebar={openSidebar}
                />
            )}
      {modalOpen && (
          <Modal
              element={currentElement}
              updateElement={
                  modalType === 'headerBlock' ? updateHeaderBlock :
                  modalType === 'coverBlock' ? updateCoverBlock :
                  updateFormBlock
              }
              closeModal={closeModal}
              type={modalType}
          />
      )}
  </div>
);
};


export default Constructor;
