import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { AboutStyle } from "../styles/Styles";

const About = () => {
  return (
    <>
      <Header />
      <AboutStyle>
      <div>
        <div className="title">Somos</div>
        <div className="subtitle">
          FCC IN BLAU SAS. es una organización empresarial que provee servicios
          de suministro, instalación y mantenimiento de Cubiertas, Fachadas y
          Cielo Rasos.
        </div>
        <div className="subtitle">
          Nuestro objetivo es desarrollar alianzas estratégicas en el tiempo,
          contribuyendo así al logro de las metas propuestas en su proyecto
          arquitectónico.
        </div>
        <div className="subtitle">
          Ponemos a su disposición toda la experiencia demostrada por el equipo
          de expertos en el manejo e instalación de productos arquitectónicos,
          quienes como profesionales, han obtenido resultados exitosos en
          diversos proyectos a nivel nacional, ofreciendo así la confianza y
          seguridad requerida por nuestros Clientes.
        </div>
        <div className="title" >Misión</div>
        <div className="subtitle">
          Brindar a nuestros Clientes la mejor solución para su proyecto
          arquitectónico cumpliendo con sus metas y expectativas de diseño a
          través de nuestros servicios de Instalación y mantenimiento.
        </div>
        <div className="title">Visión</div>
        <div className="subtitle">
          Ser el aliado estratégico más confiable en el sector de la
          construcción en Colombia, respondiendo a las necesidades del diseño
          arquitectónico de cada Cliente.
        </div>
      </div>
      </AboutStyle>
      <Footer />
    </>
  );
};

export default About;
