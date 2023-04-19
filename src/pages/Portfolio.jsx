import React from 'react';
import Projects from '../components/Projects.jsx';
import { Link } from "react-router-dom";
import videoInsta from "../assets/img/media_insta.webm";

const Portfolio = () => {

  return (
    <div>
      <div className='portfolio-container' >
        
        <div className="video-container">
          <p>
          Cliquez sur la vidéo pour visiter ma page instagram dédiée au développement web 
        </p>
          <a href="https://www.instagram.com/wickacode/?hl=fr">
            <video src={videoInsta} autoPlay loop ></video>
          </a>              
          
      </div>
      <Projects />
      </div>
      
    </div>
  );
};

export default Portfolio;
