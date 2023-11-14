import { Link, useLocation, useParams } from "react-router-dom";
import { promociones_online } from "../../assets/promociones";

import "./producto.css";

export const Producto = ({
  handleIncrement,
  handleDecrement,
  cart
}) => {
  const location = useLocation();
  const { name } = useParams();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .map((crumb) => decodeURIComponent(crumb))
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div style={{ fontSize: "20px" }} key={crumb}>
          {"/"}
          <Link to={currentLink}>{crumb} </Link>
        </div>
      );
    });

  const promocion = promociones_online.find((prom) => prom.nombre === name);

  const prodCantidad = cart.find((c) => c.id === promocion.id);

  
  return (
    <section className="producto">
      <div className="producto__breadcumbs">
        <span>{crumbs}</span>
      </div>

      <div className="details ">
        <div className="details__img">
          <picture className="details__imagen-contenedor">
            <img
              src="https://www.bembos.com.pe/_ipx/q_85,s_500x500/https://d31npzejelj8v1.cloudfront.net/media/catalog/product/8/0/800x800-combo-royal-cheese-bb.webp"
              alt=""
            />
          </picture>
        </div>
        <div className="details__content">
          <div className="details__text">
            <h1 className="details__title">{promocion.nombre}</h1>
            <p className="details__description">{promocion.descripcion}</p>
          </div>
          <div className="details__addCart">
            <div className="details__count">
              <button
                className="btn details__button--decrement"
                onClick={() => handleDecrement(promocion.id)}
              >
                -
              </button>
              <span className="details__number">
                {prodCantidad?.cantidad && prodCantidad.cantidad || 0 }
              </span>
              <button
                onClick={() => handleIncrement(promocion)}
                className="btn details__button--increment"
              >
                +
              </button>
            </div>
            <button
              className="btn details__button--add"
              onClick={() => transferToCart()}
              // disabled={ pendingProducts.length < 1 }
            >
              Agregar
              <span className="details__price">S/.30.30</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
