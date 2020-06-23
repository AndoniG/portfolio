import React from "react";
import "../assets/styles/components/header.css";
import logo from "../assets/static/portfolio-logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__img" src={logo} alt="Andy's logo" />
      </div>
    </header>
  );
};
