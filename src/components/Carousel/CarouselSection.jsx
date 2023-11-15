import React from "react";
import Carousel from "react-multi-carousel";
import { Card } from "../Card/Card";
import "./carousel-section.css";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

export const CarouselSection = ({ data, loading, title, cardsSkeleton }) => {
  return (
    <div className="promociones container">
      <h2 className="promociones__heading">{title}</h2>
      {loading ? (
        <div className="card-skeleton__list">
          <CardSkeleton cardsSkeleton={cardsSkeleton} />
        </div>
      ) : (
        <Carousel responsive={responsive} itemClass="carousel">
          {data.map((promocion) => (
            <Card key={promocion.id} {...promocion} />
          ))}
        </Carousel>
      )}
    </div>
  );
};
