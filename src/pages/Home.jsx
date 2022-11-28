import React from "react";
import ProfilePicture from "../assets/img/Home/home-picture1.svg";
import ProfilePicture2 from "../assets/img/Home/home-picture2.svg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-elements">
        <div className="name-container">
          <h1>Jessica Garrido</h1>
        </div>
        <div className="profile-pictures">
          <img src={ProfilePicture} alt="" />
          <img src={ProfilePicture2} alt="" />
        </div>
      </div>
      <hr />
      <div className="profile-description">
        <h2>Développeuse Web Junior</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero saepe
          recusandae minus laboriosam? Quaerat minima mollitia tenetur iste
          pariatur? Quos!
        </p>
      </div>
    </div>
  );
}
