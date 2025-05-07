import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "src/pages/DashboardPage"
import { ContatosPage } from "src/pages/ContatosPage"
import { LoginPage } from "src/pages/LoginPage"
import { NotFoundPage } from "src/pages/NotFoundPage"
import { PerfilPage } from "src/pages/PerfilPage"
import { RegisterPage } from "src/pages/RegisterPage"

import { AuthLayout } from "src/layout/AuthLayout"

import { PrivateRoute } from "./PrivateRoute"
import { RootRedirect } from "./RootRedirect"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "perfil", element: <PerfilPage /> },
      { path: "contatos", element: <ContatosPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
