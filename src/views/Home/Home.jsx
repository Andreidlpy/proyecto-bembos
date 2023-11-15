import "./home.css";
import { SocialBox } from "../../components/SocialBox/SocialBox";
import { Banner } from "../../components/Banner/Banner";
import { images } from "../../assets/bannerImages";
import { Footer } from "../../components/Footer/Footer";
import { usePromotions } from "../../hooks/usePromotions";
import { CarouselSection } from "../../components/Carousel/CarouselSection";

export const Home = () => {
  const {
    productList,
    productMenuList,
    productListLoading,
    productMenuLoading,
  } = usePromotions();
  return (
    <>
      <main className="home page__wrapper">
        <Banner images={images} />
        <section className="hamburguesas">
          <CarouselSection
            title="Promociones de hamburguesas online"
            data={productList}
            loading={productListLoading}
            cardsSkeleton={ 4 }
          />
          <CarouselSection
           title="Menu de hamburguesas online"
            data={productMenuList}
            loading={productMenuLoading}
            cardsSkeleton={ 4 }
          />
        </section>
        <SocialBox />
      </main>

      <Footer />
    </>
  );
};
