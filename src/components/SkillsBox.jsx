import React, { useState, useEffect } from "react";
import skillsFront from "../assets/data/frontendSkills.json";
import skillsBack from "../assets/data/backendSkills.json";
import skillsTechnos from "../assets/data/technosSkills.json";
import image1 from "./frontSvg/html.svg";
import image2 from "./frontSvg/css.svg";
import image3 from "./frontSvg/js.svg";

export default function SkillsBox() {
  const [front, frontData] = useState([]);
  const [back, backData] = useState([]);
  const [techno, technoData] = useState([]);

  useEffect(() => {
    frontData(skillsFront.data);
    backData(skillsBack.data);
    technoData(skillsTechnos.data);
  }, []);

  const images = [
    {
      id: 1,
      component: <img src={image1} alt="Image 1" />,
    },
    {
      id: 2,
      component: <img src={image2} alt="Image 2" />,
    },
    {
      id: 3,
      component: <img src={image3} alt="Image 3" />,
    },
  ];

  return (
    <div className="skills">
      <div className="skills-main">
        <h2>Front</h2>
        {front.map((skill, index) => (
          <div className="" key={index}>
            <div className="box-skills-container">
              {images.map((image) => (
                <div className="img-logo" key={image.id}>
                  {image.component}
                </div>
              ))}
              {skill.techno}

              <div className="box-skill-details">
                <h2>{skill.techno}</h2>
                <p>Maîtrise : {skill.score} %</p>
              </div>
            </div>
          </div>
        ))}
      </div> 

      <div className="skills-main">
        <h2>Back</h2>
        {back.map((skill, index) => (
          <div className="" key={index}>
            <div className="box-skills-container">
              <div className="box-skill">
                <p>{skill.techno}</p>
              </div>
              <div className="box-skill-details">
                <h2>{skill.techno}</h2>
                <p>Maîtrise : {skill.score} %</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-main">
        <h2>Technos</h2>
        {techno.map((skill, index) => (
          <div className="" key={index}>
            <div className="box-skills-container">
              <div className="box-skill">
                <p>{skill.techno}</p>
              </div>
              <div className="box-skill-details">
                <h2>{skill.techno}</h2>
                <p>Maîtrise : {skill.score} %</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
