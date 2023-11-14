import { Link } from "react-router-dom";
import { NavLink } from "../NavLink";
import "./sidebar.css";

export const Sidebar = ({ isActiveMenu , handleActiveMenu }) => {
  return (
    <div className={`sidebar ${isActiveMenu ? 'sideber__menu-active' : '' } `}>
      <div className="sidebar__menu">
        <div className="sidebar__header">
          <picture>
            <img src="/images/fotor_2023-5-26_10_5_7.webp" alt="" />
          </picture>
          <div className="sidebar__icon-phone">
           
          </div>
        </div>
        <div className="sidebar__links">
          <ul>
            <li>
              <NavLink to={"/"} nameActive={"is-active-sidebar"}>
                Mi cuenta
              </NavLink>
              <NavLink to={"/locales"} nameActive={"is-active-sidebar"}>
                Locales
              </NavLink>
              <NavLink to={"/nosotros"} nameActive={"is-active-sidebar"}>
                Zona de reparto
              </NavLink>
              <NavLink to={"/menu"} nameActive={"is-active-sidebar"}>
                Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__social-icons">
          <ul>
            <li>
              <Link target="_blank" to={"https://www.facebook.com/bembos/"}>
                <img src="/images/face.jpeg" alt="" />
              </Link>
              <Link target="_blank" to={"https://www.facebook.com/bembos/"}>
                <img src="/images/yutube.jpeg" alt="" />
              </Link>
              <Link target="_blank" to={"https://www.facebook.com/bembos/"}>
                <img src="/images/icon-twiter.jpeg" alt="" />
              </Link>
              <Link target="_blank" to={"https://www.facebook.com/bembos/"}>
                <img src="/images/icon-instagram.jpeg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__button-close">
        <button onClick={handleActiveMenu} className="btn ">
          <svg
            data-v-6efd9143=""
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 60.655 54.893"
          >
            <path
              d="M919.467,1021.586,941.507,1002a4.5,4.5,0,1,0-5.977-6.728l-22.839,20.29-22.838-20.29a4.5,4.5,0,0,0-5.978,6.728l22.041,19.582-22.041,19.581a4.5,4.5,0,1,0,5.978,6.729l22.838-20.291L935.53,1047.9a4.5,4.5,0,1,0,5.977-6.729Z"
              transform="translate(-882.364 -994.139)"
              fill="#fff"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
