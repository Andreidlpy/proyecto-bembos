import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./card-slider.css";
import { Grid, Navigation, Pagination } from "swiper/modules";

export const CardSlider = ({ id, children }) => {
  return (
    <div className="swiper-container-wrapper">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Grid]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: `.swiper-next-${id}`,
            prevEl: `.swiper-prev-${id}`,
          }}
          grid = {{
            rows: 4,
            fill: "row"
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              grid: { rows: 4, fill: "row" }
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 2, fill: "row" }
            },
            1024: {
              slidesPerView: 2,
              grid: { rows: 2, fill: "row" }
            },
          }}
        >
          {children}
        </Swiper>
      </div>
      <div className={`swiper-button-next swiper-next-${id}`}></div>
      <div className={`swiper-button-prev swiper-prev-${id}`}></div>
    </div>
  );
};
