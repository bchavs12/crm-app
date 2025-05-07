import { createContext } from "react"
import { AuthContextType } from "src/types/auth"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default AuthContext
