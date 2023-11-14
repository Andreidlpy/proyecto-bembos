import { Tabs } from "../../components/Tabs/Tabs";
import "./deliveryBurguer.css";

import "./deliveryBurguer.css";
import { promociones_online } from "../../assets/promociones";
import { PromoSection } from "../../components/PromoSection/PromoSection ";
import { Footer } from "../../components/Footer/Footer";

export const DeliveryBurguer = () => {
  const onGoingSection = (id, e) => {
    e.preventDefault();
    const targetId = id;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 240;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="page__wrapper container">
        <Tabs onChangeSection={onGoingSection} />
        <h1 className="promotions__heading">
          Promociones de hamburguesas para ti con delivery
        </h1>
        <div className="separador"></div>
        <PromoSection
          id="promociones__personales"
          title="Promociones personales"
          image="https://www.bembos.com.pe/_nuxt/img/2.c2f4acc.svg"
          alt="icon-promociones-personales"
          width={40}
          height={42}
          promociones_online={promociones_online}
        />

        <PromoSection
          id="promociones__two"
          title="Promociones para 2"
          image="https://www.bembos.com.pe/_nuxt/img/2.c2f4acc.svg"
          alt="icon-promociones-para-2"
          width={40}
          height={42}
          promociones_online={promociones_online}
        />
        <PromoSection
          id="promociones__share"
          title="Promociones para compartir"
          image="https://www.bembos.com.pe/_nuxt/img/2.c2f4acc.svg"
          alt="icon-promociones-para-compartir"
          width={40}
          height={42}
          promociones_online={promociones_online}
        />
        <PromoSection
          id="cupons"
          title="Cupones"
          width={40}
          height={42}
          promociones_online={promociones_online}
        />
      </div>

      <Footer />
    </>
  );
};

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children)
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const calculateTransformValue = () => {
//     if (containerRef.current) {
//       const containerWidth = containerRef.current.offsetWidth;
//       return -currentIndex * containerWidth;
//     }
//     return 0;
//   };

//   return (
//     <div className="carousel-container" ref={containerRef}>
//       <div className="carousel__item" style={{ transform: `translateX(${calculateTransformValue()}px)` }}>
//         {React.Children.map(children, (child, index) => (
//           React.cloneElement(child, { index, isActive: index === currentIndex, goToSlide })
//         ))}
//       </div>
//       <button onClick={prevSlide} className="carousel-button prev">
//         &#8249;
//       </button>
//       <button onClick={nextSlide} className="carousel-button next">
//         &#8250;
//       </button>
//     </div>
//   );
// };
