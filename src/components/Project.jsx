import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

function Article({ id, image, title, subtitle, content, github, url }) {
  return (
    <div className="blog-card">
      <h1 className="title">{title}</h1>
      <div className="blog-card-box">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="description">
          <h2 className="subtitle">{subtitle}</h2>
          <hr />
          <p className="content">{content}</p>
          <p className="read-more">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <FaEye />
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
