import React from 'react';

function Article({ id, image, title, subtitle, content }) {
  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{content}</p>
        <p className="read-more">
          <a href="#">Code source disponible sur Github</a>
        </p>
      </div>
    </div>
  );
}

export default Article;