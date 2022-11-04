import React, { useContext } from "react";
import Header from "../Components/Header";
import { ServiceStyle } from "../styles/Styles";
import fachada from "../assets/fachada-removebg-preview.png";
import mantenimiento from "../assets/mantenimiento__1_-removebg-preview.png";
import cubierta from "../assets/Cubierta.png";
import cieloraso from "../assets/CieloRaso.png";
import Service from "../Components/Service";
import fachadaAntes from "../assets/Fachada1.jpeg";
import fachadaDespues from "../assets/Fachada2.jpeg";
import cieloRasoAntes from "../assets/cieloRaso1.jpeg";
import cieloRasoDespues from "../assets/cieloRaso2.jpeg";
import mantenimientoAntes from "../assets/mantenimiento1.jpeg";
import mantenimientoDespues from "../assets/mantenimiento2.jpeg";
import cubiertaAntes from "../assets/cubierta1.jpeg";
import cubiertaDespues from "../assets/cubierta2.jpeg";
import Footer from "../Components/Footer";
import { ServiceContext } from "../context/serviceContext";

export const Services = () => {
  const {service, setService} = useContext(ServiceContext)

  return (
    <>
        <Header />
        <ServiceStyle>
          {service !== "fachada" ? (
            <div className="service" onClick={() => setService("fachada")}>
              <img src={fachada} alt="" />
              <div className="title">Fachadas</div>
            </div>
          ) : (
            <div className="serviceOn" onClick={() => setService("fachada")}>
              <img src={fachada} alt="" />
              <div className="title">Fachadas</div>
            </div>
          )}
          {service !== "cieloRaso" ? (
            <div className="service" onClick={() => setService("cieloRaso")}>
              <img src={cieloraso} alt="" />
              <div className="title">Cielo Raso</div>
            </div>
          ) : (
            <div className="serviceOn" onClick={() => setService("cieloRaso")}>
              <img src={cieloraso} alt="" />
              <div className="title">Cielo Raso</div>
            </div>
          )}
          {service !== "mantenimiento" ? (
            <div
              className="service"
              onClick={() => setService("mantenimiento")}
            >
              <img src={mantenimiento} alt="" />
              <div className="title">Mantenimiento</div>
            </div>
          ) : (
            <div
              className="serviceOn"
              onClick={() => setService("mantenimiento")}
            >
              <img src={mantenimiento} alt="" />
              <div className="title">Mantenimiento</div>
            </div>
          )}
          {service !== "cubierta" ? (
            <div className="service" onClick={() => setService("cubierta")}>
              <img src={cubierta} alt="" />
              <div className="title">Cubierta</div>
            </div>
          ) : (
            <div className="serviceOn" onClick={() => setService("cubierta")}>
              <img src={cubierta} alt="" />
              <div className="title">Cubierta</div>
            </div>
          )}
        </ServiceStyle>
        {service === "fachada" ? (
          <Service
            title="Suministro e instalación de Fachadas"
            image1={fachadaAntes}
            image2={fachadaDespues}
            description="Instalación de panel en fachada"
            proyect="Estadio Bello Horizonte"
            ubication="Villavicencio-Meta"
            antes = "Antes"
            despues = "Después"
          />
        ) : null}

        {service === "cieloRaso" ? (
          <Service
            title="Suministro e instalación de Cielo raso"
            image1={cieloRasoAntes}
            image2={cieloRasoDespues}
            description="Cambio de panel – Instalación de panel"
            proyect="Clínica Country – La Florida"
            ubication="Cartagena- Bogotá D.C."
            antes = "Cambio de panel"
            despues = "Instalación de panel"
          />
        ) : null}

        {service === "mantenimiento" ? (
          <Service
            title="Mantenimiento de Fachadas, Cubiertas y cielo raso"
            image1={mantenimientoAntes}
            image2={mantenimientoDespues}
            description="Mantenimiento – pintura de cubierta"
            proyect="Zona franca metropolitana - Arena Movistar"
            ubication="Bogotá D.C"

          />
        ) : null}

        {service === "cubierta" ? (
          <Service
            title="Suministro e instalación de Cubiertas"
            image1={cubiertaAntes}
            image2={cubiertaDespues}
            description="Instalación de Cubierta"
            proyect="Bodegas Sigma"
            ubication="Bogotá D.C"
            antes = "Antes"
            despues = "Después"
          />
        ) : null}

        <Footer />
    </>
  );
};
