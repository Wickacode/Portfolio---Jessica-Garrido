import React, { useState } from "react";
import ProfilePicture from "../assets/img/Home/home-picture1.svg";
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
          <img className="grayscale" src={ProfilePicture} alt="" />
          <img className="grayscale" src={ProfilePicture2} alt="" />
        </div>
      </div>
      
      <div className="profile-description">
        <div className="title-and-citation">
          <h2>Développeuse Web Junior</h2>
          <div>
            <p className="citation">{citationParts[0]}</p>
            <p className="author">{citationParts[1]}</p>
          </div>
        </div>

        <p>
          Bienvenus sur mon site en ligne ! <br />
          Passionée par le code et à l'affût des nouvelles technologies, <br />
          je suis à la recherche d'une entreprise pour y faire mon alternance en
          Concepcion d'applications web et mobiles. <br />
          Je vous remercie de votre présence sur mon site, et vous invite à le
          parcourir pour mieux me découvrir ! <br />
          Au plaisir d'échanger avec vous !
        </p>
      </div>
    </div>
  );
}
