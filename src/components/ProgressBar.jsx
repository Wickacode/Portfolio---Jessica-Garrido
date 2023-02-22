import React from "react";

export default function ProgressBar() {
  return (
    <div className="progressBar-container">
      <div className="progress-skills">
        <p>Html</p>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>Css/Sass</p>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>React</p>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>VueJs</p>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
      <div className="progress-skills">
        <p>Bootstrap</p>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
    </div>
  );
}
