export class AuthService {
  private static tokenKey = "token"

  static login(email: string, password: string): boolean {
    if (email && password) {
      localStorage.setItem(this.tokenKey, "mock-token")
      return true
    }
    return false
  }

  static logout(): void {
  localStorage.removeItem(this.tokenKey)
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey)
  }
}
