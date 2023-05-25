import React from 'react';
import Article from './Project';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from '../assets/data/projects.json';

function Articles() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaChevronLeft className="slick-prev" />,
    nextArrow: <FaChevronRight className="slick-next" />,
  };
  

  return (
    <div className="blog-card-container">
      <div className="blog-card-slider">
      <Slider {...settings} ref={sliderRef} className="custom-dots" key={data.articles.length}>

      {data.articles.map((article) => (
          <div key={article.id}>
            <Article
              image={article.image}
              title={article.title}
              subtitle={article.subtitle}
              content={article.content}
              github={article.github}
              url={article.url}
            />
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}

export default Articles;
