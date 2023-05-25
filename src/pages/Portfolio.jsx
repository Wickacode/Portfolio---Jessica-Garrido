import React from "react";
import Projects from "../components/Projects.jsx";
import { Link } from "react-router-dom";
import videoInsta from "../assets/img/instagram.webm";

const Portfolio = () => {
  return (
    <div className="width-contain">
      <div className="portfolio-container">
        <div className="title-description">
          <h2>Portfolio</h2>
        </div>

        <div>
          <Projects />
        </div>
      </div>

      <div className="video-container">
        <div className="insta-content">
          <h2>Visitez mon compte instagram</h2>
          <p>
            Crée en Janvier 2023, ce compte instagram est un de mes passe-temps
            favoris.
            <br />
            Il m'a permise non seulement d'échanger avec des nouvelles personnes
            mais également d'avoir à portée de main quelques tutos et mémos pour
            mes futurs projets.{" "}
          </p>
        </div>
        <a href="https://www.instagram.com/wickacode/?hl=fr">
          <video src={videoInsta} autoPlay loop></video>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
