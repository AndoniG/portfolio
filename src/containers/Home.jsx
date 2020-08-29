import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/containers/Home.css";
import welcome from "../assets/static/welcome.svg";
import { Header } from "../components/Header";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

export default () => {
  return (
    <div className="page__layout">
      <Helmet>
        <title>Andoni González | Software engineer</title>
        <meta
          property="og:url"
          content="https://portfolio.andonig.vercel.app/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Portafolio de Andoni González" />
        <meta
          property="og:description"
          content="Soy un desarrollador de software que disfruta los desafíos y ama lo que hace. ¡Conoce un poco más de mí aquí!"
        />
        <meta property="og:image" content={welcome} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Header />
      <Banner />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
};
