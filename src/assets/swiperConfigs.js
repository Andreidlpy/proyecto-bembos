
import { Pagination, Grid, Navigation } from "swiper/modules";

 const swiperGridConfig = {
    spaceBetween: 30,
    slidesPerView: 2,
    modules: [Pagination, Grid, Navigation],
    grid: {
      rows: 2,
      fill: "row",
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        grid: {
          rows: 2,
          fill: "row",
          spaceBetween: 10,
        },
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 10,
      },
    },
  };
  const swiperRowConfig = {
    spaceBetween: 30,
    slidesPerView: 4,
    modules: [Pagination, Grid, Navigation],
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };
  export {
    swiperGridConfig,
    swiperRowConfig
  }