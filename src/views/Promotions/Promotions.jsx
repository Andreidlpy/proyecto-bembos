import { images } from "../../assets/bannerImages";
import { Banner } from "../../components/Banner/Banner";
import { Contact } from "../../components/Promotions/Contact";
import { Features } from "../../components/Promotions/Features";
import { LastBembos } from "../../components/Promotions/LastBembos";
import { Promo } from "../../components/Promotions/Promo";
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
