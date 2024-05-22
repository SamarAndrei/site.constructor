import React from 'react';
import './NavBarTemp2.css';

const NavBarTemp2 = ({ onSelect }) => {
  const handleClick = () => {
    onSelect(
      <nav className="navbar">
        <div className="navbar-left">
          <button className="logo-button" onClick={() => console.log("Logo clicked")}>
            Логотип
          </button>
          <div className="navbar-links">
            <button className="nav-button" onClick={() => console.log("Home clicked")}>Главная</button>
            <button className="nav-button" onClick={() => console.log("Support clicked")}>Тех. поддержка</button>
          </div>
        </div>
        <div className="navbar-auth">
          <button className="auth-button" onClick={() => console.log("Login clicked")}>Войти</button>
          <button className="auth-button" onClick={() => console.log("Register clicked")}>Зарегистрироваться</button>
        </div>
      </nav>
    );
  };

  return (
    <div className="template-container" onClick={handleClick}>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="logo-button" onClick={() => console.log("Logo clicked")}>
            Логотип
          </button>
          <div className="navbar-links">
            <button className="nav-button" onClick={() => console.log("Home clicked")}>Главная</button>
            <button className="nav-button" onClick={() => console.log("Support clicked")}>Тех. поддержка</button>
          </div>
        </div>
        <div className="navbar-auth">
          <button className="auth-button" onClick={() => console.log("Login clicked")}>Войти</button>
          <button className="auth-button" onClick={() => console.log("Register clicked")}>Зарегистрироваться</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBarTemp2;
