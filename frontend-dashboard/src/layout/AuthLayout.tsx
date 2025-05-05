import {Outlet} from "react-router-dom";

export function AuthLayout() {
    return (
        <main className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="p-4 bg-white rounded shadow" style={{minWidth: '400px'}}>
                <Outlet/>
            </div>
        </main>
    )
}