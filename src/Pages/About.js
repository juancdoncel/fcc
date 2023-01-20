import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { NavBar } from "../Components/NavBar";
import { AboutStyle } from "../styles/Styles";

const About = () => {
  return (
    <>
      <Header />
      <AboutStyle>
      <div className="banner-about">
      <div className="title-about">
        ¿Qué es FCC in blau?
      </div>
      </div>
        <div className="description-about">
          FCC IN BLAU SAS. es una organización empresarial que provee servicios
          de suministro, instalación y mantenimiento de Cubiertas, Fachadas y
          Cielo Rasos.
          Nuestro objetivo es desarrollar alianzas estratégicas en el tiempo,
          contribuyendo así al logro de las metas propuestas en su proyecto
          arquitectónico.
          <div className="separator"></div>
          Ponemos a su disposición toda la experiencia demostrada por el equipo
          de expertos en el manejo e instalación de productos arquitectónicos,
          quienes como profesionales, han obtenido resultados exitosos en
          diversos proyectos a nivel nacional, ofreciendo así la confianza y
          seguridad requerida por nuestros Clientes.
          <div className="separator"></div>
          A futuro queremos brindar a nuestros Clientes la mejor solución para su proyecto
          arquitectónico cumpliendo con sus metas y expectativas de diseño a
          través de nuestros servicios de Instalación y mantenimiento.
          Asi lograr ser el aliado estratégico más confiable en el sector de la
          construcción en Colombia, respondiendo a las necesidades del diseño
          arquitectónico de cada Cliente.
          <div className="separator"></div>
        </div>
        <div className="avatar-section">
          Nuestro equipo de trabajo
          <div className="avatar-card">
            <img className="avatar-about" src="https://unavatar.io/kikobeats" alt="Imagen" />
            <div className="avatar-name">Nombre - apellido</div>
            <div className="avatar-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </div>
      </AboutStyle>
      <Footer />
      <NavBar/>
    </>
  );
};

export default About;
