// src/routes/RootRedirect.tsx
import { Navigate } from "react-router-dom"
import { useAuth } from "src/hooks/useAuth"

export const RootRedirect = () => {
  const { isAuthenticated } = useAuth()
  return (
    <Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />
  )
}
