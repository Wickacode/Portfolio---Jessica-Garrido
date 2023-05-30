import React from "react";
import SkillsBox from "../components/SkillsBox";
import SoftSkills from "../components/SoftSkills";

export default function Skills() {

  return (
    <div className="skills-container width-contain">
      <div className="title-description">
        <h2>Compétences</h2>
      </div>
      <div className="about-container">
        <SkillsBox />
        <section className="softSkills-container">
          <SoftSkills />
        </section>
        <div className="profile-container">
          <div className="profile-box">
            <h3>A propos de moi</h3>
            <p>
              Originaire du Chili, je suis arrivée en France à l'âge de 8 ans.{" "}
              <br />
              Créative dans l'âme, j'ai toujours trouvé du plaisir dans le
              dessin, la musique, le montage vidéo, la photographie et bien
              d'autres. <br /><br />
              Après avoir exercé pendant près de 7 ans plusieurs corps de
              métiers comme la vente, l'accueil et le travail en production,
              j'ai finalement trouvé le domaine dans lequel je m'épanouis
              totalement : le développement ! <br />
            </p>
          </div>
        </div>
        <section className="shareCv">
          <div>
            <h3>Liens utiles :</h3>
            <a href="../assets/files/cv-freelance.pdf" download>Télécharger mon CV</a>
          </div>
        </section>
      </div>
    </div>
  );
}
