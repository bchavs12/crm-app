import {FaUserCircle} from 'react-icons/fa';

export const Header = () => (
    <header
        className="header bg-white shadow-sm px-4 py-2 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Painel Administrativo</h5>
        <div className="d-flex align-items-center gap-3">
            <span className="text-muted">
                <FaUserCircle/>
                João da Silva
            </span>
        </div>
    </header>
)