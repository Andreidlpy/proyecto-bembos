import "./card.css";

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
        <img loading="lazy" src={img} alt="" />
      </div>
      <div className="menu_content">
        <a className={`promocion_nombre ${ menu ? "menu_nombre" : "" } `}>{nombre}</a>
          <div className="precio">
            {
              precio_actual &&
              <span className="precio_actual">S/.{  precio_actual }</span>
            }
            {
              precio_antiguo && 
              <span className="precio_antiguo">S/.{ precio_antiguo }</span>
            }
          </div>

        <button className="btn boton_ver">
          {menu !== "menu" ? "Ver más" : "VER TODOS"}
        </button>
      </div>
    </article>
  );
};
