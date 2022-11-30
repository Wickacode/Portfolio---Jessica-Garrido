import React from 'react';

export default function SocialNetwork() {
    return(
        <div className="social-network-container">
        <ul clasNames="social-network">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </li>
          <li clasNames="icon github">
            <span className="tooltip">Github</span>
            <span>
              <i className="fab fa-github"></i>
            </span>
          </li>
        </ul>
      </div>
    )
}