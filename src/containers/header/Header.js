import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.js";
import "./Header.css";
import imageSlider from "../../data.js";
import star from "../../assets/slider/star.png";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide !== 3) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 7500);
  });

  const Rating = () => {
    const rating = [];
    for (var i = 0; i < imageSlider[currentSlide].rating; i++) {
      rating.push(<img src={star} alt="rating-img" />);
    }

    return rating;
  };

  const sliderStyle = {
    url: imageSlider[currentSlide].url,
    title: imageSlider[currentSlide].title,
    rating: imageSlider[currentSlide].rating,
    description: imageSlider[currentSlide].desc,
  };

  return (
    <div className="container header">
      <Navbar />
      <div id="popular" className="slider">
        <img className="slider-img" src={sliderStyle.url} alt="ds" />
        <div className="transparent" />
        <div className="features">
          <h1 className="anime-title features-item">{sliderStyle.title}</h1>
          <div className="features-item">
            <Rating />
          </div>

          <p className="desc features-item">{sliderStyle.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
