import React from "react";
import angular from "../assets/static/angular-logo.svg";
import express from "../assets/static/express-logo.svg";
import js from "../assets/static/js-logo.svg";
import mongo from "../assets/static/mongodb-logo.svg";
import next from "../assets/static/nextjs-logo.svg";
import node from "../assets/static/node-logo.svg";
import reactLogo from "../assets/static/react-logo.svg";
import redux from "../assets/static/redux-logo.svg";
import vue from "../assets/static/vue-logo.svg";
import vuex from "../assets/static/vuex-logo.svg";
import mysql from "../assets/static/mysql-logo.svg";
import typescript from "../assets/static/typescript-logo.svg";

import "../assets/styles/components/skills.css";

export default () => {
  const LOGOS = [
    js,
    reactLogo,
    redux,
    node,
    express,
    next,
    mongo,
    vue,
    vuex,
    typescript,
    mysql,
    angular,
  ];
  return (
    <section className="skills__container">
      <div className="skills__content">
        <h1>Working with</h1>
        <div className="skills__carousel">
          {LOGOS.map((logo, index) => (
            <img
              key={`Skill logo ${index}`}
              src={logo}
              alt="Skill logo"
              className="skills__carousel__item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
