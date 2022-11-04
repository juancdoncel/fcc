import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { BannerStyle, DescriptionStyle } from "../styles/Styles";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <BannerStyle>
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </BannerStyle>
      <DescriptionStyle>
        <div className="description">
          <div>
            Especialistas en la instalación de cubiertas, fachadas, cielo raso.
          </div>
          <div>
            Respaldados por una experiencia de más de 15 años como expertos en
            montaje e instalación.
          </div>
          <div>
            Nuestro compromiso con su proyecto busca conseguir los mejores
            resultados en calidad, productividad y eficiencia.
          </div>
        </div>
        <div className="slogan">
          "Generamos relaciones en firme"
        </div>
      </DescriptionStyle>
      <Footer/>
      
    </>
  );
}

export default Home;
