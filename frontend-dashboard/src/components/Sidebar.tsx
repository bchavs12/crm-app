import {NavLink} from 'react-router-dom'
import {FaHome, FaUserEdit, FaRegUser, FaSignOutAlt} from 'react-icons/fa';
import {Nav} from "react-bootstrap";

export const Sidebar = () => (
    <Nav className="flex-column p-3 gap-2">
        <NavLink to="/" className="nav-link">
            <FaHome>
                Home</FaHome>
        </NavLink>
        <NavLink to="/dashboard/perfil" className="nav-link">
            <FaUserEdit>Perfil</FaUserEdit>
        </NavLink>
        <NavLink to="/dashboard/contatos" className="nav-link">
            <FaRegUser>Contatos</FaRegUser>
        </NavLink>
        <NavLink to="/login" className="nav-link text-danger">
            <FaSignOutAlt>Sair</FaSignOutAlt>
        </NavLink>
    </Nav>
)