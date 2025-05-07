import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useState } from "react"
import { UserType } from "@src/types/user"
import { Container, Form, Button, Row, Col } from "react-bootstrap"

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState<UserType>({ email: "", password: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(form.email, form.password)
    navigate("/dashboard")
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Digite sua senha"
                value={form.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
