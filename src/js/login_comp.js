import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Login_Comp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  //const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate =   useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      //await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="login-inside-component">
    <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">CUSTOMER LOGIN</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-4" id="email">
              <Form.Label><h2>Email Address *</h2></Form.Label>
              <Form.Control type="email" defaultValue={'uic@uic.edu'} ref={emailRef} required />
            </Form.Group>
            <Form.Group className="mb-4" id="password">
              <Form.Label><h2>Password</h2></Form.Label>
              <Form.Control type="password" defaultValue={'********'} ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 login-btn mt-4" type="submit">
              LOG IN
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}