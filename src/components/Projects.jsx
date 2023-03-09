import React from 'react';
import Article from './Project';
import data from '../assets/data/projects.json';

function Articles() {
  return (
    <div className='blog-card-container'>
      {data.articles.map(article => (
        <Article
          key={article.id}
          image={article.image}
          title={article.title}
          subtitle={article.subtitle}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default Articles;

