import React from "react";
import avatar from "../assets/static/my-avatar.svg";
import linkedin from "../assets/static/linkedin-logo.svg";
import "../assets/styles/components/banner.css";

export default () => {
  return (
    <section className="banner__container">
      <div className="banner__content">
        <div className="banner__header">
          <h1>Hello! I'm Andoni González</h1>
          <h2>Software engineer and Code lover</h2>
          <a
            href="https://www.linkedin.com/in/andoni-gonzalez-soriano-99114510a/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="Linkedin logo"
              className="banner__header__icon"
            />
          </a>
        </div>
        <img src={avatar} alt="Andoni's avatar" className="banner__avatar" />
      </div>
    </section>
  );
};
