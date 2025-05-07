import { Navigate } from "react-router-dom"
import { useAuth } from "src/hooks/useAuth"
import { MainLayout } from "src/layout/MainLayout"

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <MainLayout />
  ) : (
    <Navigate to="/auth/login" replace />
  )
}
