import {Outlet} from 'react-router-dom'
import {Sidebar} from "../components/Sidebar";
import {Header} from "../components/Header";

export function MainLayout() {
    return (
        <div className="main-layout">
            <div className="sidebar-header p-3 fw-bold">Dashboard</div>
            <div className="sidebar bg-light">
                <Sidebar/>
            </div>
            <div className="content">
                <Header/>

                <main className="p-4">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
