import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { aggiungiCommentoAction } from "../redux/actions";

const MyCommento = ({ annuncio }) => {
  const dispatch = useDispatch();

  const [commento, setCommento] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const email = localStorage.getItem("email");

  let payload = {
    bodyCommento: commento,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };

  const sendCommento = (e) => {
    e.preventDefault();
    if (commento.trim() === "") {
      setShowAlert(true);
      return;
    }

    dispatch(aggiungiCommentoAction(payload));
    setCommento("");
  };

  return (
    <>
      <Form onSubmit={sendCommento}>
        <div className="position-relative w-50">
          <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
            <Form.Label className="fs-5 fw-light">Lascia una recensione</Form.Label>

            <Form.Control
              className="position-relative"
              as="textarea"
              placeholder="Scrivi"
              value={commento}
              onChange={(e) => setCommento(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="position-absolute end-0 top-50">
            <svg height="24" width="24" className="send-btn">
              <path
                fill="#352f44"
                d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
              ></path>
            </svg>
          </Button>
        </div>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible className="w-50">
            Scrivi qualcosa per inviare un commento
          </Alert>
        )}
      </Form>
    </>
  );
};
export default MyCommento;
