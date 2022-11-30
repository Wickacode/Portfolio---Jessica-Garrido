import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container width-footer">
        <h4>A propos de ce site</h4>
        <div className="footer-infos">
          <div className="footer-about">
            <p>
              Ce portfolio est codé en <em>ReactJs</em> et <em>Sass</em>
            </p>
          </div>

          <div className="footer-social">
            <a href="#"><i class="fa-brands fa-square-github"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>

          <p className="footer-disclaimer">
            Jessica Garrido <time>2022</time> | Tous droits reservés
          </p>
        </div>
      </div>
    </footer>
  );
}
