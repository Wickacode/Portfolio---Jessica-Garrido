import React from "react";

export default function ProgressBar() {
  return (
    <div className="progressBar-container">
      <div className="progress-skills">
        <p>Html</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>Css/Sass</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>React</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>VueJs</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>Bootstrap</p>
        <div class="progress">
          <div class="progress-value"></div>
        </div>
      </div>
    </div>
  );
}
