import { NavLink as NavLinkReactRouter } from "react-router-dom"
export const NavLink = ({to , nameActive , children, ...props}) => {
  return (
    <NavLinkReactRouter
        {...props}
        className={ ({isActive }) => isActive ? nameActive: undefined }
        to={to}
    >
        { children }
    </NavLinkReactRouter>
  )
}
