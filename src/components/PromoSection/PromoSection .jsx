import { SwiperSlide } from "swiper/react";
import { CardType2 } from "../Card/CardType2";
import { CardSlider } from "../CardSlider/CardSlider";

export const PromoSection = ({
  title,
  alt,
  image,
  width,
  height,
  promociones_online,
  id,
}) => {
  return (
    <section id={id} className="promociones__list">
      <h2 className="promociones__title">
        {image && (
          <span>
            <img
              width={width}
              height={height}
              loading="lazy"
              src={image}
              alt={alt}
            />
          </span>
        )}
        {title}
      </h2>

      <CardSlider id={id}>
        {promociones_online?.map((p) => (
          <SwiperSlide key={p.id}>
            <CardType2 {...p} />
          </SwiperSlide>
        ))}
        ...
      </CardSlider>
    </section>
  );
};
