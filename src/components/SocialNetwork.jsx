import React from 'react';

export default function SocialNetwork() {
    return(
        <div className="social-network-container">
        <ul class="social-network">
          <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
          </li>
          <li class="icon twitter">
            <span class="tooltip">Twitter</span>
            <span>
              <i class="fab fa-twitter"></i>
            </span>
          </li>
          <li class="icon instagram">
            <span class="tooltip">Instagram</span>
            <span>
              <i class="fab fa-instagram"></i>
            </span>
          </li>
          <li class="icon github">
            <span class="tooltip">Github</span>
            <span>
              <i class="fab fa-github"></i>
            </span>
          </li>
        </ul>
      </div>
    )
}