import "./home.css";

import Carousel from "react-multi-carousel";

import { SocialBox } from "../../components/SocialBox/SocialBox";
import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card";
import { menu, promociones_online } from "../../assets/promociones";
import { images } from "../../assets/bannerImages";
import { Footer } from "../../components/Footer/Footer";

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

export const Home = () => {
  return (
    <>
      <main className="home page__wrapper">
        <Banner images={images} />
        <section className="hamburguesas">
          <div className="promociones container">
            <h2 className="promociones__heading">
              Promociones de hamburguesas online
            </h2>
            <Carousel responsive={responsive} itemClass="carousel">
              {promociones_online.map((promocion) => (
                <Card key={promocion.id} {...promocion} />
              ))}
            </Carousel>
          </div>
          <div className="promociones container">
            <h2 className="promociones__heading">
              Promociones de hamburguesas online
            </h2>
            <Carousel responsive={responsive} itemClass="carousel">
              {menu.map((promocion) => (
                <Card key={promocion.id} {...promocion} menu="menu" />
              ))}
            </Carousel>
          </div>
        </section>
        <SocialBox />
      </main>

      <Footer />
    </>
  );
};
