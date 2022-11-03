import React, { useContext } from "react";
import { FooterStyle } from "../styles/Styles";
import { Link } from "react-router-dom";
import { ServiceContext } from "../context/serviceContext";

const Footer = () => {
  const { setService } = useContext(ServiceContext);

  return (
    <FooterStyle>
      <div className="title">FCC IN BLAU S.A.S </div>
      <div>
        <ul className="services">
          Nuestros servicios:
          <br />
          <Link
            onClick={() => {
              setService("fachada");
            }}
            to={"/servicios"}
          >
            <li>Fachadas</li>
          </Link>
          <Link
            onClick={() => {
              setService("cieloRaso");
            }}
            to={"/servicios"}
          >
            <li>Cielo Raso</li>
          </Link>
          <Link
            onClick={() => {
              setService("mantenimiento");
            }}
            to={"/servicios"}
          >
            <li>Mantenimiento</li>
          </Link>
          <Link
            onClick={() => {
              setService("cubierta");
            }}
            to={"/servicios"}
          >
            <li>Cubiertas</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link
          to={"/nosotros"}
        >
          <div>¿Quienes somos?</div>
        </Link>
      </div>
    </FooterStyle>
  );
};

export default Footer;
