// import React, { useState } from "react";

// const Slider = ({ items }) => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const handleSlideClick = (index) => {
//     setActiveSlide(index);
//   };

//   const slideItems = items.map((item, index) => {
//     const isActive = index === activeSlide;

//     return (
//       <div
//         key={index}
//         className={`slide ${isActive ? "active" : ""}`}
//         style={{ backgroundImage: `url(${item.imageUrl})` }}
//         onClick={() => handleSlideClick(index)}
//       >
//         <h2>{item.title}</h2>
//         <p>{item.description}</p>
//       </div>
//     );
//   });

//   return <div className="slider">{slideItems}</div>;
// };

// export default Slider;
