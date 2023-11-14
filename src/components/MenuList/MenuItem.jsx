import { useNavigate } from "react-router-dom";

export const MenuItem = ({ img, nombre, tipo, id }) => {

  const linkTo = tipo === "promocion" 
  ? '/promociones/delivery-hamburguesas' 
  : `/menu/${nombre.toLowerCase()}`;

  const navigate = useNavigate();

  return (
    <article className="menu-card">
      <img src={img} alt={nombre} />
      <div className="menu-card__content">
        <button onClick={() => navigate( linkTo )}>
          Ver todos
        </button>
      </div>
      <h2 className="menu__name-item">{nombre}</h2>
    </article>
  );
};
