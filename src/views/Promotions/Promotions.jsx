import { images } from "../../assets/bannerImages";
import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Home/Contact";
import { Features } from "../../components/Home/Features";
import { LastBembos } from "../../components/Home/LastBembos";
import { Promo } from "../../components/Home/Promo";
import "./promotions.css";

export const Promotions = () => {
  return (
    <main className="promotions container">
      <h1 className="promotions__heading">
        Disfruta de nuestras promociones bembos
      </h1>
      <div className="separador"></div>
      <Banner images={ images } />
      <Promo />
      <LastBembos />
      <Features />
      <Contact />
    </main>
  );
};
