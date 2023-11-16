import { Link, useLocation, useParams } from "react-router-dom";
import { promociones_online } from "../../assets/promociones";

import "./producto.css";

export const Producto = ({
  handleIncrement,
  handleDecrement,
  cart,
  pendingProducts,
  transferToCart,
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

  const productoFinded = pendingProducts.find((c) => c.id === promocion.id);

  return (
    <section className="producto page__wrapper ">
      <div className="producto-container ">
        <div className="producto__breadcumbs">
          <span>{crumbs}</span>
        </div>

        <div className="details ">
          <div className="details__img">
            <div className="img-responsive">
              <img src={promocion.img} alt="" />
            </div>
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
                  {(productoFinded?.cantidad && productoFinded.cantidad) || 0}
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
                disabled={pendingProducts.length < 1}
              >
                Agregar
                <span className="details__price">
                  S/. {promocion.precio_actual.toFixed(2)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
