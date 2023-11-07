import React from "react";
import Carousel from "react-multi-carousel";

const responsiveBannerSlider = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};
export const Banner = () => {
  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots
      autoPlay
      infinite
      responsive={responsiveBannerSlider}
    >
      <img
        className="banner"
        src="./src/assets/menuSlider-4.webp"
        alt="menu-slider"
      />
      <img
        className="banner"
        src="./src/assets/menuSlider-2.webp"
        alt="menu-slider"
      />
      <img
        className="banner"
        src="./src/assets/menuSlider03.webp"
        alt="menu-slider"
      />
    </Carousel>
  );
};
