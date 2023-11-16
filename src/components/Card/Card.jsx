import "./card.css";
import { Link} from "react-router-dom";
export const Card = ({
  id,
  nombre,
  img,
  precio_actual,
  precio_antiguo,
  menu,
}) => {
  return (
    <article className="promocion" key={id}>
      <div className="promocion_imagen">
        <img loading="lazy" src={img} alt="image-card" />
      </div>
      <div className="menu_content">
        <a className={`promocion_nombre ${menu ? "menu_nombre" : ""} `}>
          {nombre}
        </a>
        <div className="precio">
          {precio_actual && (
            <span className="precio_actual">S/.{precio_actual.toFixed(2)}</span>
          )}
          {precio_antiguo && (
            <span className="precio_antiguo">S/.{precio_antiguo.toFixed(2)}</span>
          )}
        </div>
        {menu !== "menu" ? (
          <Link to={`/promociones/${nombre}`}>
            <button className="btn boton_ver">Ver más</button>
          </Link>
        ) : (
          <button className="btn boton_ver">VER TODOS</button>
        )}
      </div>
    </article>
  );
};
