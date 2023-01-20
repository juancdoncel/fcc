import React from "react";
import { FooterStyle } from "../styles/Styles";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <FooterStyle>
      <div className="titleFooter">FCC IN BLAU S.A.S </div>
      
      <div>
        <Link
          to={"/nosotros"}
        >
        </Link>
        <div className="contacts">Calle 18 sur N 57 - 25 Bogota D.C <br /> jcanonfcc@gmail.com - 324 566 0337 <br /> gdoncelfcc@gmail.com - 300 450 8777 </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
