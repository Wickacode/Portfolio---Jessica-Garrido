import React from "react";
import Article from "./Project";
import data from "../assets/data/projects.json";

function Articles() {
  return (
    <div className="blog-card-container">
      {data.articles.map((article) => (
        <div key={article.id}>
          <Article
            image={article.image}
            title={article.title}
            content={article.content}
            github={article.github}
            url={article.url}
          />
        </div>
      ))}
    </div>
  );
}

export default Articles;
