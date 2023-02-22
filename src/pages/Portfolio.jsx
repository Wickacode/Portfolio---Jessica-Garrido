import React from "react";
import videoBooki from "../assets/img/projects/video-booki.webm";

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="projects-container">
        <h1>Booki</h1>
        <div className="projects">
          <video
            src={videoBooki}
            type="video/webm"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="project-description">
            <h2>Trouver des hébergements et des activités dans la ville de son choix.</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellat sunt eum? Veniam molestiae odit molestias architecto iure
            deserunt praesentium?
          </p>
          <div project-ressources>
            <p>icone</p>
            <p>icone</p>
            <p>lien github</p>
          </div>
          </div>
          
        </div>

        <div className="projects-leftSpace">
          {/* <div className="projects-details">
            <h2>Booki</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li><i class="fa-brands fa-html5"></i></li>
              <li><i class="fa-brands fa-css3-alt"></i></li>
            </ul>
          </div>

          <div className="next-slide-container">
            <h2>Projet suivant</h2>
            <i class="fa-duotone fa-forward"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}
