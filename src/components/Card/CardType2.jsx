import "./card.css";
import { useNavigate} from "react-router-dom";
export const CardType2 = ({
  id,
  nombre,
  img,
  precio_actual,
  precio_antiguo,
  menu,
}) => {
  const navigate = useNavigate()
  return (
    <article className="card-type2" key={id}>
        <div className="card-type2_imagen">
          <img loading="lazy" src={img} alt="image-card" />
        </div>
      <div className="card-type2_content">
        <a className={`card-type2_nombre ${menu ? "card-type2_nombre" : ""} `}>
          {nombre}
        </a>
        <p className="card-type2_descripcion">
            1 Parrillera regular, 1 papa regular, 1 helado Mini Princesa de vainilla
        </p>
        <div className="card-type2__precio">
          {precio_actual && (
            <span className="card-type2__precio-actual">S/.{precio_actual}</span>
          )}
          {precio_antiguo && (
            <span className="card-type2__precio-antiguo">S/.{precio_antiguo}</span>
          )}
        </div>
        {menu !== "menu" ? (
          <button className="btn card-type2__boton" onClick={() => { navigate(`/promociones/${nombre}`) }}>Ver más</button>
        ) : (
          <button className="btn card-type2__boton">VER TODOS</button>
        )}
      </div>
    </article>
  )
}
