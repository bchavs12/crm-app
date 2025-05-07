import { Outlet } from "react-router-dom"
import { Header, Sidebar } from "src/components"

export function MainLayout() {
  return (
    <div className="main-layout">
      <div className="sidebar bg-light">
        <Sidebar />
      </div>
      <div className="content">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
