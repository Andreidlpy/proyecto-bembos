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
export const Banner = ({ images = [] }) => {
  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots
      autoPlay
      infinite
      responsive={responsiveBannerSlider}
    >
      {
        images.map(( image ) => (
          <img
              key={image}
              className="banner"
              src={ image.src }
              alt={ image.alt }
          />
        ))
      }
    </Carousel>
  );
};
