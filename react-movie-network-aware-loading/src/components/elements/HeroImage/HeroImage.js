
import React from "react";

import ConnectionAwareBgDiv from "../../../hoc/ConnectionAwareBgDiv/ConnectionAwareBgDiv";
import "./HeroImage.css";

const HeroImage = ({ backdropPath, title, text }) => {
  return (
    <ConnectionAwareBgDiv className="rmdb-heroimage" backdropPath={backdropPath}>
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </ConnectionAwareBgDiv>
  );
};

export default HeroImage;
