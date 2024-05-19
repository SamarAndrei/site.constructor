import React, { useState } from "react";
import "./ConstructorPage.css";
import BodyOfferForConstructorPage from "./TemplatesForConstructorPage/BodyOfferForConstructorPage.jsx";
import BodyCompsForConstructorPage from "./TemplatesForConstructorPage/BodyCompsForConstructorPage.jsx";
import AddTemplateButton from "./AddTemplateButton";

const Constructor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [currentCoverTemplate, setCurrentCoverTemplate] = useState(0);
  const [addedTemplates, setAddedTemplates] = useState([]);
  const [insertPosition, setInsertPosition] = useState(null);

  const handleOpenModal = (position) => {
    setIsModalOpen(true);
    setInsertPosition(position);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSection("");
    setInsertPosition(null);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleSelectTemplate = (template) => {
    const newTemplates = [...addedTemplates];
    if (insertPosition !== null) {
      if (insertPosition === "top") {
        newTemplates.unshift(template);
      } else {
        newTemplates.push(template);
      }
    } else {
      newTemplates.push(template);
    }
    setAddedTemplates(newTemplates);
    handleCloseModal();
  };

  const handleNextCoverTemplate = () => {
    setCurrentCoverTemplate((prevIndex) =>
      prevIndex === 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCoverTemplate = () => {
    setCurrentCoverTemplate((prevIndex) =>
      prevIndex === 0 ? 1 : prevIndex - 1
    );
  };

  const renderTemplates = () => {
    switch (selectedSection) {
      case "Навигационная панель":
        return <div>Шаблоны навигационной панели</div>;
      case "Обложка":
        return (
          <div className="cover-template-slider">
            <button onClick={handlePrevCoverTemplate}>Предыдущий</button>
            {currentCoverTemplate === 0 ? (
              <BodyOfferForConstructorPage onSelect={handleSelectTemplate} />
            ) : (
              <BodyCompsForConstructorPage onSelect={handleSelectTemplate} />
            )}
            <button onClick={handleNextCoverTemplate}>Следующий</button>
          </div>
        );
      case "Доп. шаблоны":
        return <div>Дополнительные шаблоны</div>;
      case "Подвал":
        return <div>Шаблоны подвала</div>;
      default:
        return <div>Выберите раздел</div>;
    }
  };

  return (
    <div className="template-selector-container">
      {addedTemplates.length === 0 && (
        <AddTemplateButton
          onClick={() => handleOpenModal("bottom")}
          position="top"
        />
      )}
      {addedTemplates.flatMap((template, index) => [
        <div key={`template-${index}`} className="template-container">
          <AddTemplateButton
            onClick={() => handleOpenModal("top")}
            position="top"
          />
          {template}
          <AddTemplateButton
            onClick={() => handleOpenModal("bottom")}
            position="bottom"
          />
        </div>,
      ])}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>

            <div className="section-buttons">
              <button
                onClick={() => handleSectionClick("Навигационная панель")}
              >
                Навигационная панель
              </button>
              <button onClick={() => handleSectionClick("Обложка")}>
                Обложка
              </button>
              <button onClick={() => handleSectionClick("Доп. шаблоны")}>
                Доп. шаблоны
              </button>
              <button onClick={() => handleSectionClick("Подвал")}>
                Подвал
              </button>
            </div>
            {renderTemplates()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Constructor;
