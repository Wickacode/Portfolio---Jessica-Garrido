import React, { useState } from "react";
import ProfilePicture from "../assets/img/Home/home-picture1.jpg";
import ProfilePicture2 from "../assets/img/Home/home-picture2.svg";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const citations = [
    "« Le plus grand obstacle à la découverte n’est pas l’ignorance, c’est l’illusion de la connaissance. » - Michaël Aguilar",
    "« Le succès arrive toujours lorsqu’une opportunité rencontre la préparation. » - Albert Einstein",
    "« Vous ne pouvez pas épuiser votre créativité. Plus vous l’utilisez, plus vous en avez. » - Maya Angelou",
  ];

  const citationAleatoire =
    citations[Math.floor(Math.random() * citations.length)];
  const citationParts = citationAleatoire.split(" - ");

  return (
    <div className="home-container width-contain">
      <div className="home-elements">
        <div className="name-container">
          <h1>
            Jessica <br /> Garrido
          </h1>
        </div>
        <div
          className={`profile-pictures ${isActive ? "grayscale-active" : ""}`}
        >
          <img className="grayscale homePicture" src={ProfilePicture} alt="" />
          <img className="grayscale homePicture" src={ProfilePicture2} alt="" />
        </div>
      </div>

      <div className="profile-description">
        <div className="title-and-citation">
          <h2><b>Développeuse Web Junior</b></h2>
          <div>
            <p className="citation">{citationParts[0]}</p>
            <p className="author">{citationParts[1]}</p>
          </div>
        </div>

        <p className="home-description">
          <b>Bienvenus sur mon site en ligne ! </b> <br />
          <br />
          <b>Passionée</b> par le code et à l'affût des nouvelles technologies, <br />
          j'ai récemment ouvert ma micro-entreprise pour me lancer en tant que 
          <b> développeuse freelance</b>. <br /> Mon entreprise répond au doux nom de <b>CODEPIC</b>. <br /><br />
          Disponible pour tout type de challenges, je suis également à la
          recherche d'une entreprise pour y faire mon alternance en  <b>Concepcion
          d'applications web et mobiles</b>. <br />
          Cet apprentissage se déroulera en compagnie de la <b>Fabrique Numérique Paloise</b>. <br />
          Je vous remercie de votre présence sur mon site, et vous invite à
          le parcourir pour mieux me découvrir ! <br />
          <b>Au plaisir d'échanger avec vous !</b>
        </p>
      </div>
    </div>
  );
}
