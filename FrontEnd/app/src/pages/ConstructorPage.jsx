import React, { useState } from "react";
import "./ConstructorPage.css";
import BodyOfferForConstructorPage from "./TemplatesForConstructorPage/BodyOfferForConstructorPage.jsx";
import BodyCompsForConstructorPage from "./TemplatesForConstructorPage/BodyCompsForConstructorPage.jsx";
import NavBarTemp1 from "./TemplatesForConstructorPage/NavBarTemp1.jsx";
import AddTemplateButton from "./AddTemplateButton";
import "./ConstructorPage.css";

const Constructor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [currentCoverTemplate, setCurrentCoverTemplate] = useState(0);
  const [addedTemplates, setAddedTemplates] = useState([]);
  const [insertPosition, setInsertPosition] = useState(null);
  const [showInitialPlus, setShowInitialPlus] = useState(true);

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
      newTemplates.splice(insertPosition, 0, template);
    } else {
      newTemplates.push(template);
    }
    setAddedTemplates(newTemplates);
    setShowInitialPlus(false);
    handleCloseModal();
  };

  const handleNextCoverTemplate = () => {
    setCurrentCoverTemplate(
      (prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1) // меняем кол-во шаблонов
    );
  };

  const handlePrevCoverTemplate = () => {
    setCurrentCoverTemplate(
      (prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1) // меняем чтобы возращаться к первому
    );
  };

  const handleRemoveTemplate = (indexToRemove) => {
    const updatedTemplates = addedTemplates.filter(
      (_, index) => index !== indexToRemove
    );
    setAddedTemplates(updatedTemplates);
    setShowInitialPlus(updatedTemplates.length === 0);
  };

  const renderTemplates = () => {
    switch (selectedSection) {
      case "Навигационная панель":
        return (
          <div className="cover-template-slider template-full-screen">
            <button onClick={handlePrevCoverTemplate}>Предыдущий</button>
            {currentCoverTemplate === 0 ? (
              <NavBarTemp1 onSelect={handleSelectTemplate} />
            ) : (
              <BodyCompsForConstructorPage onSelect={handleSelectTemplate} />
            )}
            <button onClick={handleNextCoverTemplate}>Следующий</button>
          </div>
        );
      case "Обложка":
        return (
          <div className="cover-template-slider template-full-screen">
            <button onClick={handlePrevCoverTemplate}>Предыдущий</button>
            {currentCoverTemplate === 0 ? (
              <BodyOfferForConstructorPage onSelect={handleSelectTemplate} />
            ) : currentCoverTemplate === 1 ? (
              <BodyCompsForConstructorPage onSelect={handleSelectTemplate} />
            ) : (
              <NavBarTemp1 onSelect={handleSelectTemplate} />
            )}
            <button onClick={handleNextCoverTemplate}>Следующий</button>
          </div>
        );

      case "Доп. шаблоны":
        return (
          <div className="template-full-screen">Дополнительные шаблоны</div>
        );
      case "Подвал":
        return <div className="template-full-screen">Шаблоны подвала</div>;
      default:
        return <div className="template-full-screen">Выберите раздел</div>;
    }
  };

  return (
    <div className="template-selector-container">
      {showInitialPlus && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <AddTemplateButton
            onClick={() => handleOpenModal(null)}
            position="center"
          />
        </div>
      )}

      {addedTemplates.map((template, index) => (
        <div key={`template-${index}`} className="template-container">
          <AddTemplateButton
            className="add-template-button"
            onClick={() => handleOpenModal(index)}
            position="top"
          />
          {template}
          <button
            className="remove-template-button"
            onClick={() => handleRemoveTemplate(index)}
          >
            &times;
          </button>
          {index === addedTemplates.length - 1 && (
            <AddTemplateButton
              className="add-template-button"
              onClick={() => handleOpenModal(index + 1)}
              position="bottom"
            />
          )}
        </div>
      ))}

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
