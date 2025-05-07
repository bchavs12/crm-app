export type AuthContextType = {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

