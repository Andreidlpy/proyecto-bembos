import './menu-navbar.css'
export const MenuNavbar = ({ handleActiveMenu }) => {
  return (
    <button className="menu-nav__button" onClick={handleActiveMenu}>
      <svg
        data-v-17182645=""
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="26"
        viewBox="0 0 67.348 52.412"
        fill="#21388b"
      >
        <path
          d="M63.121 8.453H4.227a4.226 4.226 0 1 
          1 0-8.453H63.12a4.226 4.226 0 1 1 0 8.453zM63.121 30.433H4.227a4.226 4.226 0 1 1 0-8.453H63.12a4.226 4.226 0 1 1 0 8.453zM63.121 52.412H4.227a4.227 4.227 0 0 1 0-8.454H63.12a4.227 4.227 0 0 1 0 8.454z"
        ></path>
      </svg>
    </button>
  );
};
