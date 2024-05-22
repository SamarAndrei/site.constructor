import React from "react";
import './NavBarTemp1.css';

const NavBarTemp1 = ({ onSelect }) => {
  const handleClick = () => {
    onSelect(
        <nav className="navigation-panel">
        <div className="logo">
          <img src="path_to_your_logo" alt="Логотип" />
        </div>
        <div className="buttons">
          {/* Переместите кнопки внутрь элемента, который будет позиционироваться абсолютно */}
          <div className="buttons-container">
            <button className="login-button">Войти</button>
            <button className="register-button">Зарегистрироваться</button>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="second-cover-template-container" onClick={handleClick}>
      <nav className="navigation-panel">
      <div className="logo">
        <img src="path_to_your_logo" alt="Логотип" />
      </div>
      <div className="buttons">
        {/* Переместите кнопки внутрь элемента, который будет позиционироваться абсолютно */}
        <div className="buttons-container">
          <button className="login-button">Войти</button>
          <button className="register-button">Зарегистрироваться</button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBarTemp1;
