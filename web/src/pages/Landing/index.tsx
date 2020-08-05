import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./styles.css";
function Landing() {
  return (
    <div id="page-landing">
      <div id="page-lading-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img src={landing} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coracão roxo" />
        </span>
      </div>
    </div>
  );
}
export default Landing;
