import React from "react";
import "../assets/styles/containers/Home.css";
import { Header } from "../components/Header";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

export default () => {
  return (
    <div className="page__layout">
      <Header />
      <Banner />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
};
