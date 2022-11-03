import React from "react";
import { ServiceComponentStyle } from "../styles/Styles";

const Service = (props) => {
  return (
    <ServiceComponentStyle>
      <h1 className="title ">{props.title}</h1>
      <div className="images">
        <div className="image">
        Antes
          <img src={props.image1} alt="" />
        </div>

        <div className="image">
          Después
          <img src={props.image2} alt="" />
        </div>
      </div>
      <div className="caption">
        <span className="subTitle">Descripción: </span> {props.description}
      </div>
      <div  className="caption">
        <span className="subTitle">Proyecto: </span> {props.proyect}
      </div>
      <div  className="caption">
        <span className="subTitle">Ubicación: </span> {props.ubication}
      </div>
    </ServiceComponentStyle>
  );
};

export default Service;
