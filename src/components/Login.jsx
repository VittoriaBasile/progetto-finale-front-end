import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLoggedAction } from "../redux/actions";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const sendLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/auth/login`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.accessToken);

        setLogin({
          username: "",
          password: "",
        });
        dispatch(getUserLoggedAction());
        navigate("/");
      } else {
        throw new Error("Credenziali non valide! Ritenta!");
      }
    } catch (error) {
      setError(error);
      setErrorMessage(error.message);
    }
  };
  return (
    <Container className="text-dark d-flex justify-content-center align-items-center">
      <Form className=" rounded p-5 mt-5 form-login" onSubmit={sendLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            className="bg-light text-dark "
            placeholder="Inserisci il tuo username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            className="bg-light text-dark "
            placeholder="Inserisci la tua password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
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
            Entra
          </Button>
        </div>
        {error && (
          <Alert className="mt-3" variant="danger" onClose={() => setError(null)} dismissible>
            {errorMessage}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default Login;
