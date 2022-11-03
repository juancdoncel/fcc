import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderStyle } from "../styles/Styles";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <HeaderStyle>
      <div className="title">
        <Link
          to={"/"}
        >
          FCC IN BLAU S.A.S &nbsp;
        </Link>
      </div>
      <div className="navBar">
        {pathName === "/" ? (
          <div className="on">
            <Link to={"/"}>
              <button className="on"> Inicio </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/"}>
              <button className="off">Inicio</button>
            </Link>
          </div>
        )}
        {pathName === "/nosotros" ? (
          <div className="on">
            <Link to={"/nosotros"}>
              <button className="on"> Nosotros </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/nosotros"}>
              <button className="off">Nosotros</button>
            </Link>
          </div>
        )}
        {pathName === "/servicios" ? (
          <div className="on">
            <Link to={"/servicios"}>
              <button className="on"> Servicios </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/servicios"}>
              <button className="off">Servicios</button>
            </Link>
          </div>
        )}
        {pathName === "/contacto" ? (
          <div className="on">
            <Link to={"/contacto"}>
              <button className="on"> Contactenos </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/contacto"}>
              <button className="off">Contactenos</button>
            </Link>
          </div>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
