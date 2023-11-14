import { images } from "../../assets/bannerImages";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";
import { MenuList } from "../../components/MenuList/MenuList";
import "./menu.css";
export const Menu = () => {
  return (
    <>
      <main className="menu container">
        <h1 className="promotions__heading">Elige tu menú bembos</h1>
        <div className="separador"></div>
        <Banner images={images} />
        <MenuList />
      </main>

      <Footer />
    </>
  );
};
