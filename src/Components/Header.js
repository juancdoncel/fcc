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
          FCC
           IN BLAU S.A.S &nbsp;
        </Link>
      </div>
      <div className="navBar">
        {pathName === "/" ? (
          <div className="on">
            <Link to={"/"}>
              <button className="on"> INICIO </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/"}>
              <button className="off">INICIO</button>
            </Link>
          </div>
        )}
        {pathName === "/nosotros" ? (
          <div className="on">
            <Link to={"/nosotros"}>
              <button className="on"> SOBRE NOSOTROS </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/nosotros"}>
              <button className="off"> SOBRE NOSOTROS</button>
            </Link>
          </div>
        )}
        {pathName === "/servicios" ? (
          <div className="on">
            <Link to={"/servicios"}>
              <button className="on"> SERVICIOS </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/servicios"}>
              <button className="off">SERVICIOS</button>
            </Link>
          </div>
        )}
        {pathName === "/contacto" ? (
          <div className="on">
            <Link to={"/contacto"}>
              <button className="on"> CONTACTENOS </button>
            </Link>
          </div>
        ) : (
          <div className="off">
            <Link to={"/contacto"}>
              <button className="off">CONTACTENOS</button>
            </Link>
          </div>
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;
