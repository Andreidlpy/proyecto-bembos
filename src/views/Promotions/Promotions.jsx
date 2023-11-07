import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card";
import "./promotions.css";

export const Promotions = () => {
  return (
    <main className="promotions container">
      <h1 className="promotions__heading">
        Disfruta de nuestras promociones bembos
      </h1>
      <div className="separador"></div>
      <Banner />
      <section className="promo container">
        <h2 className="promo__heading">Elige cómo disfrutaras tu promo</h2>
        <div className="promo__content">
          <img src="./src/assets/SECTION3.webp" alt="image__section" />
          <img src="./src/assets/SECTION2.webp" alt="image__section" />
          <img src="./src/assets/SECTION1.webp" alt="image__section" />
        </div>
      </section>
      <section className="last-bembos container">
        <h2 className="last-bembos__heading">¡Lo último de Bembos!</h2>
        <Card
          img={"./src/assets/500x669-inka-chips-1.webp"}
          buttonText="Ver más"
          precio_actual="3.00"
        />
      </section>
      <section className="features container">
        <h2 className="features__heading">
          ¿Por qué comprar en Bembos.com.pe?
        </h2>
        <div className="features__grid">
          <article className="feature">
            <div className="feature__icon">
              <svg
                style={{maxWidth: "60px", width: "100%", height: "60px"}}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="Special Price" id="Special_Price">
                  <path d="M30.46,17a.42.42,0,0,0-.11-.16l-1.27-1.28h0L16.29,2.8a.48.48,0,0,0-.48-.13L5.59,5.22a.53.53,0,0,0-.37.37L4.71,7.65a1.71,1.71,0,0,1-.37-.49,2.86,2.86,0,0,1-.18-2.07c.2-1.08.42-2.31-1.93-3.53a.5.5,0,0,0-.46.88c1.69.89,1.58,1.48,1.41,2.47a3.89,3.89,0,0,0,.27,2.72,2.71,2.71,0,0,0,1,1.09L2.67,15.81a.48.48,0,0,0,.13.48L15.58,29.08h0l1.28,1.27a.42.42,0,0,0,.16.11.43.43,0,0,0,.19,0,.41.41,0,0,0,.19,0,.45.45,0,0,0,.17-.11L30.35,17.57a.45.45,0,0,0,.11-.17A.5.5,0,0,0,30.46,17ZM5.37,9.11a3.71,3.71,0,0,0,.88.1,2.83,2.83,0,0,0,.41,0A1.85,1.85,0,1,0,9.58,7,1.85,1.85,0,0,0,6.42,8.2a2.68,2.68,0,0,1-.8-.07l.5-2L15.78,3.7,28,15.94,15.94,28,3.7,15.78Zm3.25-1.2-.48-.48.12,0a.86.86,0,0,1,.61,1.46A.87.87,0,0,1,7.8,9a4.32,4.32,0,0,0,.67-.24.5.5,0,0,0,.15-.81Zm8.59,21.38-.57-.57L28.72,16.64l.57.57Z" />
                  <path d="M16.07,20.13l.14,0a.5.5,0,0,0,.34-.62L13.74,9.54a.5.5,0,0,0-1,.27l2.82,10A.49.49,0,0,0,16.07,20.13Z" />
                  <path d="M9.77,13.73a2.31,2.31,0,1,0,3.26,0A2.34,2.34,0,0,0,9.77,13.73Zm2.56,2.55a1.31,1.31,0,1,1-.93-2.23,1.34,1.34,0,0,1,.93.38A1.33,1.33,0,0,1,12.33,16.28Z" />
                  <path d="M17.91,16.26a2.31,2.31,0,1,0-1.63-3.93A2.29,2.29,0,0,0,15.61,14a2.33,2.33,0,0,0,.67,1.63A2.29,2.29,0,0,0,17.91,16.26ZM17,13a1.31,1.31,0,0,1,.92-.38,1.33,1.33,0,0,1,.93.38A1.31,1.31,0,0,1,17,14.88a1.26,1.26,0,0,1-.38-.92A1.3,1.3,0,0,1,17,13Z" />
                </g>
              </svg>
            </div>
            <div className="feature__content">
              <h3 className="feature__name">Promos exclusivas</h3>
            </div>
          </article>
          <article className="feature">
            <div className="feature__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 64 64"
                style={{maxWidth: "60px", width: "100%", height: "60px"}}
              >
                <g id="basket" />
                <g id="ketchup" />
                <g id="burger">
                  <g>
                    <path d="M61,33v-6c0-10.5-8.5-19-19-19H22C11.5,8,3,16.5,3,27v6c0,0.6,0.4,1,1,1h1.6C5.2,34.6,5,35.3,5,36c0,1.3,0.6,2.5,1.6,3.2    c-0.9,0.5-1.6,1.1-1.6,2c0,1.4,1.5,2,3.3,2.8c0.1,0,0.1,0,0.2,0.1H4c-0.6,0-1,0.4-1,1v3c0,4.4,3.6,8,8,8h42c4.4,0,8-3.6,8-8v-3    c0-0.6-0.4-1-1-1h-4.5c0.1,0,0.1,0,0.2-0.1c1.8-0.7,3.3-1.3,3.3-2.8c0-0.9-0.7-1.5-1.6-2c1-0.7,1.6-1.9,1.6-3.2    c0-0.7-0.2-1.4-0.6-2H60C60.6,34,61,33.6,61,33z M7.1,41.2c0.4-0.3,1.3-0.6,1.9-0.9c0.2-0.1,0.5-0.2,0.7-0.3h1.8l3.7,4.4    c-0.6,0-1.1,0-1.6-0.1c-0.3-0.1-0.5-0.1-0.7-0.2c0,0,0,0,0,0c-0.6-0.2-1-0.5-1.5-0.8c-0.5-0.3-0.9-0.6-1.4-0.8    c-0.3-0.1-0.6-0.2-0.9-0.4C8.4,41.8,7.5,41.5,7.1,41.2z M17,43.4L14.1,40h5.7L17,43.4z M59,48c0,3.3-2.7,6-6,6H11    c-3.3,0-6-2.7-6-6v-2h7.3c0.3,0.1,0.6,0.2,0.9,0.3c0.8,0.2,1.8,0.1,2.6,0.1c0.7,0,1.5-0.1,2.2,0c0.6,0.1,1.1,0.3,1.8,0.5    c0.8,0.3,1.7,0.6,2.7,0.7c0.9,0.1,1.8-0.1,2.6-0.2c0.8-0.1,1.5-0.2,2.1-0.2c0.6,0,1.3,0.2,2,0.4C30.1,47.8,31,48,32,48    s1.9-0.2,2.7-0.4c0.7-0.2,1.3-0.3,2-0.4c0.7,0,1.4,0.1,2.1,0.2c0.9,0.1,1.7,0.3,2.6,0.2c1-0.1,1.9-0.4,2.7-0.7    c0.6-0.2,1.2-0.4,1.8-0.5c0.7-0.1,1.5-0.1,2.2,0c0.9,0,1.8,0.1,2.6-0.1c0.3-0.1,0.6-0.2,0.9-0.3H59V48z M54.9,42.1    c-0.3,0.1-0.6,0.2-0.9,0.4c-0.5,0.2-1,0.5-1.4,0.8c-0.7,0.4-1.4,0.9-2.3,1.1c-0.6,0.1-1.3,0.1-2.1,0c-0.8,0-1.7-0.1-2.6,0    c-0.8,0.1-1.5,0.4-2.2,0.6c-0.8,0.3-1.5,0.5-2.2,0.6c-0.6,0.1-1.4-0.1-2.1-0.2c-0.8-0.1-1.7-0.3-2.6-0.2c-0.8,0-1.6,0.2-2.4,0.4    C33.4,45.8,32.7,46,32,46s-1.4-0.2-2.2-0.4c-0.8-0.2-1.5-0.4-2.4-0.4c-0.9,0-1.7,0.1-2.6,0.2c-0.8,0.1-1.5,0.3-2.1,0.2    c-0.7-0.1-1.5-0.3-2.2-0.6c-0.6-0.2-1.2-0.4-1.8-0.5l3.7-4.5h31.8c0.2,0.1,0.5,0.2,0.7,0.3c0.6,0.3,1.6,0.6,1.9,0.9    C56.5,41.5,55.6,41.8,54.9,42.1z M57,36c0,1.1-0.9,2-2,2H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h46C56.1,34,57,34.9,57,36z M59,32h-4H9H5    v-5c0-9.4,7.6-17,17-17h20c9.4,0,17,7.6,17,17V32z" />
                    <path d="M15,16c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S16.7,16,15,16z M15,20c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,20,15,20z    " />
                    <path d="M49,23c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S50.7,23,49,23z M49,27c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S49.6,27,49,27z    " />
                    <path d="M37,13c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S38.7,13,37,13z M37,17c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S37.6,17,37,17z    " />
                    <path d="M27,23c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S28.7,23,27,23z M27,27c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S27.6,27,27,27z    " />
                  </g>
                </g>
                <g id="eggplant" />
                <g id="clamp" />
                <g id="chicken_leg" />
                <g id="hot_dog" />
                <g id="beer" />
                <g id="bread" />
                <g id="shrimp" />
                <g id="pepper" />
                <g id="mushroom" />
                <g id="wine" />
                <g id="sausage" />
                <g id="ribs" />
                <g id="chicken" />
                <g id="meat" />
                <g id="grill" />
                <g id="stove" />
                <g id="grilled" />
              </svg>
            </div>
            <div className="feature__content">
              <h3 className="feature__name">Acumula puntos y canjealos</h3>
            </div>
          </article>
          <article className="feature">
            <div className="feature__icon">
              <svg
                style={{maxWidth: "60px", width: "100%", height: "60px"}}
                viewBox="0 0 23.81 16.17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="Camada 2" id="Camada_2">
                  <g data-name="Camada 1" id="Camada_1-2">
                    <path d="M21.88,0H1.94A1.94,1.94,0,0,0,0,1.94V14.23a1.94,1.94,0,0,0,1.94,1.94H21.88a1.94,1.94,0,0,0,1.94-1.94V1.94A1.94,1.94,0,0,0,21.88,0ZM1,3.73H22.81V6.09H1ZM1.94,1H21.88a.94.94,0,0,1,.94.94v.79H1V1.94A.94.94,0,0,1,1.94,1ZM21.88,15.17H1.94A.94.94,0,0,1,1,14.23V7.09H22.81v7.13A.94.94,0,0,1,21.88,15.17Z" />
                    <path d="M19.43,9.79a1.92,1.92,0,0,0-1.44.65A1.94,1.94,0,1,0,18,13a1.93,1.93,0,1,0,1.44-3.22Zm-2.87,2.87a.94.94,0,1,1,.94-.94A.94.94,0,0,1,16.56,12.66Zm2.87,0a.94.94,0,1,1,.94-.94A.94.94,0,0,1,19.43,12.66Z" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="feature__content">
              <h3 className="feature__name">Pagos 100% seguros</h3>
            </div>
          </article>
        </div>
      </section>
      <section className="contacts">
        <div className="contact container">

        <h2 className="contact__heading">
          ¿Eres fan de Bembos?
        </h2>
        <p className="contact__text">
          Dejanos tus datos y obtén acceso a ofertas y beneficios exclusivos
        </p>
        <div className="contact__form">
          <form action="">
             <div className="contact__row">
                <div className="contact__form-control">
                    <input required  type="text" placeholder="Nombre" />
                    <input required  type="text" placeholder="Apellido" />
                </div>
                <div className="contact__form-control">
                    <input required  type="tel" placeholder="Celular" />
                    <input required  type="email" placeholder="Correo Electronico" />
                </div>
             </div>
              <div className="contact__conditions">
                  <input required  type="checkbox" name="condition" id="condition" />
                  <label htmlFor="condition">Acepto los <a href="">terminos y condiciones</a> y la politica de <a href="">uso de datos personales</a></label>
              </div>
              <div className="contact__actions">
                  <button type="submit" className="btn contact__button contact__button--send">
                      Enviar
                  </button>
              </div>
          </form>
        </div>
        </div>
      </section>
    </main>
  );
};
