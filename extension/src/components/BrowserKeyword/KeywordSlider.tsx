import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { KeywordSliderProps } from "./types";

export const KeywordSlider: React.FC<KeywordSliderProps> = ({
  trend,
  host,
  isGoogle,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="keyword">
      {trend.map((value, index) => {
        return (
          <div key={index}>
            <div className="keyword-text">
              <span className="font-bold"> {index + 1} </span>{" "}
              <a
                href={
                  isGoogle
                    ? `https://${host}/search?q=${value}`
                    : `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${value}`
                }
                style={{ textDecoration: "none" }}
              >
                {value}
              </a>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
