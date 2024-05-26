import React, { useState } from "react";
import "./ConstructorPage.css";
import HeaderConstructorItem from "../components/myconstructor/HeaderConstructor/HeaderConstructorItem";
import CoverBlockItem from "../components/myconstructor/CoverBlock/CoverBlockItem";
import Modal from "../components/UI/Modal/Modal";
import coverblock from '../assets/images/coverblock.jpg';
import FormConstructorBlockItem from "../components/myconstructor/FormConstructorBlock/FormConstructorBlockItem";
import FooterConstructorBlockItem from "../components/myconstructor/FooterConstructorBlock/FooterConstructorBlockItem";
import AboutProjectBlockItem from "../components/myconstructor/AboutProjectBlock/AboutProjectBlockItem";
import AdvantagesBlockItem from "../components/myconstructor/AdvantagesBlock/AdvantagesBlockItem";

const SecondPattern = () => {
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
      id: 6,
      content: "© Все права защищены. Acme Design Co. hello@mysite.com",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      buttons: [],
      vkLink: "",
      tgLink: ""
    });
  
    const [formBlock, setFormBlock] = useState({
      id: 5,
      title: "Обратная связь",
      description: "Пожалуйста, заполните для поддержания обратной связи с нами!",
      backgroundColor: "#f0f0f0",
      buttonText: "Отправить",
      buttonColor: "red",
      buttonTextColor: "#ffffff",
      titleColor: "#000000",
      descriptionColor: "#333333"
    });
  
    const [aboutProjectBlock, setAboutProjectBlock] = useState({
      id: 4,
      content: "Сайт Конструктор - это инновационная платформа, предназначенная для тех, кто стремится создать профессиональный веб-сайт без необходимости в глубоких знаниях программирования и дизайна. Наш интуитивно понятный интерфейс позволяет каждому пользователю легко и быстро настроить свой сайт, адаптировать его под уникальные бизнес-потребности и стилистические предпочтения.",
      size: "20px",
      color: "#000000",
      alignment: "left"
    });
  
    const [advantagesBlock, setAdvantagesBlock] = useState({
      id: 3,
      title: "Преимущества",
      description: "Наши основные преимущества",
      advantages: [
        { title: "Преимущество 1", description: "Описание преимущества 1" },
        { title: "Преимущество 2", description: "Описание преимущества 2" }
      ],
      color: "#ffffff"
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
  
    const updateFooterBlock = (id, newData) => {
        setFooterBlock((prevState) => ({
            ...prevState,
            ...newData
        }));
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
  
    const updateAboutProjectBlock = (id, newData) => {
        setAboutProjectBlock((prevState) => ({
            ...prevState,
            ...newData
        }));
    };
  
    const updateAdvantageBlock = (id, newData) => {
        setAdvantagesBlock((prevState) => ({
            ...prevState,
            ...newData
        }));
    };
  
    const removeHeaderBlock = (id) => {
        setHeaderBlock(null);
    };
  
    const removeFooterBlock = (id) => {
        setFooterBlock(null);
    };
  
    const removeCoverBlock = (id) => {
        setCoverBlock(null);
    };
  
    const removeFormBlock = (id) => {
        setFormBlock(null);
    };
  
    const removeAboutProjectBlock = (id) => {
        setAboutProjectBlock(null);
    };
  
    const removeAdvantageBlock = (id) => {
        setAdvantagesBlock(null);
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
            {advantagesBlock && (
                <AdvantagesBlockItem
                    {...advantagesBlock}
                    updateAdvantageBlock={updateAdvantageBlock}
                    removeAdvantageBlock={removeAdvantageBlock}
                    openSettingsModal={openSettingsModal}
                    openContentModal={openContentModal}
                    openSidebar={openSidebar}
                />
            )}

            {aboutProjectBlock && (
                <AboutProjectBlockItem
                    {...aboutProjectBlock}
                    updateTextBlock={updateAboutProjectBlock}
                    removeAboutProjectBlock={removeAboutProjectBlock}
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
                        modalType === 'formBlock' ? updateFormBlock :
                        modalType === 'footerBlock' ? updateFooterBlock :
                        modalType === 'aboutProjectBlock' ? updateAboutProjectBlock :
                        modalType === 'advantageBlock' ? updateAdvantageBlock :
                        null
                    }
                    closeModal={closeModal}
                    type={modalType}
                />
            )}
        </div>
    );
  };
  
  export default SecondPattern;
  