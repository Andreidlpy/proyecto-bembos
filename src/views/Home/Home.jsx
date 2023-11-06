import "./home.css";
import { Promocion } from "../../components/Promocion/Promocion";
import Carousel from "react-multi-carousel";
const promociones_online = [
  {
    nombre: "Dupla Perfecta",
    precio_actual: 30.9,
    precio_antiguo: 40.6,
    id: 44,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-royal-cheese-bb.webp",
  },
  {
    nombre: "Combo A lo pobre",
    precio_actual: 14.9,
    precio_antiguo: 26.8,
    id: 45,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-a-lo-pobre-oct.webp",
  },
  {
    nombre: "Dúo Extrema",
    precio_actual: 30.9,
    precio_antiguo: 51.6,
    id: 46,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-duo-extrema.webp",
  },
  {
    nombre: "Extremadamente Cheesy",
    precio_actual: 57.9,
    precio_antiguo: 91.2,
    id: 47,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-extremadamente-cheesy-bb.webp",
  },
  {
    nombre: "Familiar Parrillero",
    precio_actual: 54.9,
    precio_antiguo: 85.2,
    id: 48,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-familiar-parrillero-bb.webp",
  },
  {
    nombre: "Parrillera con antojito",
    precio_actual: 18.9,
    precio_antiguo: 28.7,
    id: 49,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-parrillera-mini-princesa.webp",
  },
  {
    nombre: "Combo Interbank",
    precio_actual: 19.9,
    precio_antiguo: 30.3,
    id: 50,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x1370-combo-interbank-oct.webp",
  },
  {
    nombre: "Familiar 1",
    precio_actual: 49.9,
    precio_antiguo: 83.2,
    id: 51,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/f/a/familiar-1-bembos.webp",
  },
  {
    nombre: " Promo Churrita",
    precio_actual: 16.9,
    precio_antiguo: 27.7,
    id: 52,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/h/churrita-base-individual.webp",
  },
  {
    nombre: "Combo Cheese",
    precio_actual: 12.9,
    precio_antiguo: 19.8,
    id: 53,
    img: "https://www.bembos.com.pe/_ipx/q_85,w_275/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/c/o/combo-cheese-nuevo.webp",
  },
];
const menu = [
  {
    id: 1,
    nombre: "Promociones Exclusivas Web",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/promociones-bembos-delivery.webp"
  },
  {
    id: 2,
    nombre: "Hamburguesas",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/hamburguesas_2.webp"
  },
  {
    id: 3,
    nombre: "Pollo",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/pollo_2.webp"
  },
  {
    id: 4,
    nombre: "Loncheritas",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/loncheritas_1.webp"
  },
  {
    id: 5,
    nombre: "Complementos",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/complementos_1.webp"
  },
  {
    id: 6,
    nombre: "Bebidas ",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-gaseosas.webp"
  },
  {
    id: 7,
    nombre: "Helados",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-mini-princesa.webp"
  },
  {
    id: 8,
    nombre: "Inka Chips",
    img: "https://www.bembos.com.pe/_ipx/q_60,s_275x368/https://d31npzejelj8v1.cloudfront.net/media/catalog/category/500x669-inka-chips-1.webp"
  }
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2
  }
};
const responsiveBannerSlider = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

export const Home = () => {
  return (
    <>
      <main className="home">
        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          showDots
          autoPlay
          infinite
          responsive={responsiveBannerSlider}
        >
          <img className="banner" src="./src/assets/menuSlider-4.webp" alt="menu-slider" />
          <img className="banner" src="./src/assets/menuSlider-2.webp" alt="menu-slider" />
          <img className="banner" src="./src/assets/menuSlider03.webp" alt="menu-slider" />
        </Carousel>
        <section className="hamburguesas">
          <div className="promociones container">
            <h2 className="promociones__heading">
              Promociones de hamburguesas online
            </h2>
            <Carousel responsive={responsive} itemClass="carousel">
              {promociones_online.map((promocion) => (
                <Promocion key={promocion.id} {...promocion} />
              ))}
            </Carousel>
          </div>
          <div className="promociones container">
            <h2 className="promociones__heading">
              Promociones de hamburguesas online
            </h2>
            <Carousel responsive={responsive} itemClass="carousel">
              {menu.map((promocion) => (
                <Promocion key={promocion.id} {...promocion} menu='menu' />
              ))}
            </Carousel>
          </div>
        </section>
      </main>

    </>
  );
};
