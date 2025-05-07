import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaHome, FaUserEdit, FaRegUser, FaSignOutAlt } from "react-icons/fa"

export function Sidebar() {
  return (
    <Nav className="flex-column p-3 gap-2">
      <NavLink to="/" className="nav-link d-flex align-items-center gap-2">
        <FaHome />
        <span>Início</span>
      </NavLink>

      <NavLink
        to="/perfil"
        className="nav-link d-flex align-items-center gap-2"
      >
        <FaUserEdit />
        <span>Editar perfil</span>
      </NavLink>

      <NavLink
        to="/contatos"
        className="nav-link d-flex align-items-center gap-2"
      >
        <FaRegUser />
        <span>Contatos</span>
      </NavLink>

      <NavLink
        to="/login"
        className="nav-link text-danger d-flex align-items-center gap-2"
      >
        <FaSignOutAlt />
        <span>Sair</span>
      </NavLink>
    </Nav>
  )
}