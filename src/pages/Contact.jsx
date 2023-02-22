import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import ContactForm from "../components/Form";
import SocialNetwork from "../components/SocialNetwork";

export default function Contact() {
  return (
    <div className="contact-container">

      <ContactForm />
      
       {/* <div className="container-right">
        <div className="contact-details">
          <div className="contact">
            <i className="icone fa-regular fa-envelope"></i>
            <div>
              <h2 className="title">Email</h2>
              <p className="text">jessica.garrido.di@gmail.com</p>
            </div>
          </div>
          <div className="contact">
            <i className="icone fa-solid fa-phone"></i>
            <div>
              <h2 className="title">Numero</h2>
              <p className="text">xx-xx-xx-xx-xx</p>
            </div>
          </div>
        </div>
        <SocialNetwork /> */}

    </div>
  );
}
