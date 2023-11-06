import "./promocion.css";

export const Promocion = ({
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
        {precio_actual && (
          <div className="precio">
            <span className="precio_actual">S/.{precio_actual}</span>
            <span className="precio_antiguo">S/.{precio_antiguo}</span>
          </div>
        )}

        <button className="btn boton_ver">
          {menu !== "menu" ? "Ver más" : "VER TODOS"}
        </button>
      </div>
    </article>
  );
};
