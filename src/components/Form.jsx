import React from "react";
import contactImg from "../assets/img/reseaux/contact.jpg";
import fbLogo from "../assets/img/reseaux/fb.svg";
import inLogo from "../assets/img/reseaux/inst.svg";
import gitLogo from "../assets/img/reseaux/github.svg";
import twLogo from "../assets/img/reseaux/twitter.svg";

export default function ContactForm() {
 
  return (
    <div className="form-container">
      <div className="text-container">
        <h3>
          À la recherche d'une développeuse junior passionnée et créative pour
          votre prochain projet ? <br />
          N'hésitez pas à me contacter et à découvrir comment je peux contribuer
          à votre succès !
        </h3>
      </div>

      <div className="imgContact-container">
        <img className="imgtest" src={contactImg} alt="Image de contact" />
      </div>

      <form netlify netlify-honeypot="bot-field">
        <div>
          <div className="labelContact">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"

            />
          </div>
          <div className="labelContact">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
            />  
          </div>
          <div className="labelContact">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"  

            />
          </div>
          <button type="submit">Envoyer</button>
        </div>

        <div className="social-links-container">
          <a
            href="https://github.com/Wickacode?tab=repositories"
            target="_blank">
            <img src={gitLogo} alt="Logo github" />
          </a>
          <a href="">
            <img src={fbLogo} alt="Logo linkdln" />
          </a>
          <a href="https://www.instagram.com/wickacode/?hl=fr" target="_blank">
            <img src={inLogo} alt="Logo instagram" />
          </a>
          <a href="">
            <img src={twLogo} alt="Logo twitter" />
          </a>
        </div>

        <div className="hidden">
    <label>Ne pas remplir : <input name="bot-field" /></label>
  </div>
      </form>
    </div>
  );
}
