import React, {Fragment, useState, useEffect} from "react";
import axios from 'axios';
import ContactForm from "../components/Form";
import SocialNetwork from "../components/SocialNetwork";

export default function Contact() {
  return (
    <div className="contact-container">

      <ContactForm />

    </div>
  );
}
