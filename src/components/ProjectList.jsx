import React from "react";
import ProjectItem from "./ProjectItem";
import djb from "../assets/static/djb-logo.svg";
import cdj from "../assets/static/cdj-logo.svg";
import unt from "../assets/static/unto.svg";
import man from "../assets/static/mannhaft.svg";
import wec from "../assets/static/wc.svg";
import ask from "../assets/static/askForMore.png";
import "../assets/styles/components/projectList.css";

export default () => {
  const PROJECTS = [
    {
      title: "WeChamber",
      description: "As front-end developer",
      image: wec,
      url: "https://wechamber.mx",
    },
    {
      title: "Don Juan Barbería",
      image: djb,
      description: "As full-stack developer",
      url: "https://www.donjuanbarberia.com/",
    },
    {
      title: "Casa Don Juan",
      image: cdj,
      description: "As full-stack developer",
      url: "https://www.casadonjuan.mx/",
    },
    {
      title: "Mannhaft",
      image: man,
      description: "As full-stack developer",
      url: "https://www.unto.mx/",
    },
    {
      title: "Unto",
      image: unt,
      description: "As full-stack developer",
      url: "https://www.unto.mx/",
    },
    {
      title: "More",
      image: ask,
      description: "Ask for admin apps",
      url: "mailto:andgonzalez75@gmail.com?subject=Saw your portfolio!",
    },
  ];

  return (
    <section className="project__list__container">
      <h1>Involved in</h1>
      <div className="project__list">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={`Project ${project.title}`}
            {...project}
            last={project.title === "More"}
          />
        ))}
      </div>
    </section>
  );
};
