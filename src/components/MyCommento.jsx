import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { aggiungiCommentoAction } from "../redux/actions";

const MyCommento = ({ annuncio }) => {
  const dispatch = useDispatch();

  const [commento, setCommento] = useState("");
  const email = localStorage.getItem("email");

  let payload = {
    bodyCommento: commento,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };

  const sendCommento = (e) => {
    e.preventDefault();
    dispatch(aggiungiCommentoAction(payload));
    setCommento("");
  };

  return (
    <>
      <Form onSubmit={sendCommento}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-5 fw-light">Lascia una recensione</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Scrivi"
            value={commento}
            onChange={(e) => setCommento(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit"></Button>
      </Form>
    </>
  );
};
export default MyCommento;
