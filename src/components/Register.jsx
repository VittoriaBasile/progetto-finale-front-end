import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const sendRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/register`, {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setRegister({
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
        });

        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container className="text-dark d-flex justify-content-center align-items-center">
      <Form className=" rounded p-5 mt-5 form-register" onSubmit={sendRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-light text-dark input border "
            placeholder="Inserisci il tuo nome"
            value={register.name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-light text-dark input border"
            placeholder="Inserisci il tuo cognome"
            value={register.surname}
            onChange={(e) => setRegister({ ...register, surname: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-light text-dark input border"
            placeholder="Inserisci il tuo username"
            value={register.username}
            onChange={(e) => setRegister({ ...register, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            className="bg-light text-dark input border"
            placeholder="Inserisci la tua email"
            value={register.email}
            onChange={(e) => setRegister({ ...register, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            className="bg-light text-dark input border"
            placeholder="Inserisci la tua password"
            value={register.password}
            onChange={(e) => setRegister({ ...register, password: e.target.value })}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button
            className="border-0"
            style={{
              backgroundColor: "#352f44",
            }}
            type="submit"
          >
            Registrati
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
