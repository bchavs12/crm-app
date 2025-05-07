import { useState, ReactNode } from "react"
import AuthContext from "src/context/AuthContext"
import { AuthService } from "src/services/AuthService"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated()
  )

  const login = (email: string, password: string) => {
    const success = AuthService.login(email, password)
    if (success) setIsAuthenticated(true)
  }

  const logout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
