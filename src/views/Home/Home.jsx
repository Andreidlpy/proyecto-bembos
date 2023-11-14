import "./home.css";
import { SocialBox } from "../../components/SocialBox/SocialBox";
import { Banner } from "../../components/Banner/Banner";
import { images } from "../../assets/bannerImages";
import { Footer } from "../../components/Footer/Footer";
import { useProducts } from "../../hooks/useProducts";
import { CarouselSection } from "../../components/Carousel/CarouselSection";



export const Home = () => {
  const {productList , productMenuList} = useProducts();

  return (
    <>
      <main className="home page__wrapper">
        <Banner images={images} />
        <section className="hamburguesas">
            <CarouselSection data= { productList } />
            <CarouselSection data= { productMenuList } />
        </section>
        <SocialBox />
      </main>

      <Footer />
    </>
  );
};
