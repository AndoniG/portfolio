import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/containers/Home.css";
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
          name="description"
          content="Soy un desarrollador de software que disfruta los desafíos y ama lo que hace. ¡Conoce un poco más de mí aquí!"
        />
        <meta name="twitter:card" content="portfolio" />
        <meta name="twitter:title" content="Portafolio de Andoni González" />
        <meta
          name="twitter:description"
          content="Soy un desarrollador de software que disfruta los desafíos y ama lo que hace. ¡Conoce un poco más de mí aquí!"
        />
        <meta
          name="twitter:image"
          content="https://portfolio.andonig.vercel.app/assets/welcome.svg"
        />
        <meta property="og:title" content="Portafolio de Andoni González" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://portfolio.andonig.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio.andonig.vercel.app/assets/welcome.svg"
        />
        <meta
          property="og:description"
          content="Soy un desarrollador de software que disfruta los desafíos y ama lo que hace. ¡Conoce un poco más de mí aquí!"
        />
      </Helmet>
      <Header />
      <Banner />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
};
