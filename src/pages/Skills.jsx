import React from "react";
import SkillsBox from "../components/SkillsBox";
import SoftSkills from "../components/SoftSkills";
import DownloadLink from "../components/DownloadLink";

export default function Skills() {
  const cvUrl = "../assets/files/Jessica_garrido_cv_2023.pdf";

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
              d'autres. <br />
              Après avoir exercé pendant près de 7 ans plusieurs corps de
              métiers comme la vente, l'accueil et le travail en production,
              j'ai finalement trouvé le domaine dans lequel je m'épanouis
              totalement : le développement ! <br />
              Je suis à la recherche d'une entreprise pour réaliser ma formation
              en tant que Conceptrice d'application Web et mobiles, réalisée
              auprès de la Fabrique numérique Paloise <br />
            </p>
          </div>
        </div>
        <section>
          <div>
            <h3>Liens utiles :</h3>
            <DownloadLink fileUrl={cvUrl} />
            <DownloadLink fileUrl={cvUrl} />
            <DownloadLink fileUrl={cvUrl} />
          </div>
        </section>
        c
      </div>
    </div>
  );
}
