import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { creaPrenotazioneAction, getPrenotazioniAction } from "../redux/actions";

const Prenotazione = ({ annuncio, show, onHide }) => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const [selectedDate, setSelectedDate] = useState(null);
  const [numeroOspiti, setNumeroOspiti] = useState(1);

  const handleDateChange = (data) => {
    setSelectedDate(data);
  };

  const handleNumeroOspitiChange = (e) => {
    setNumeroOspiti(e.target.value);
  };

  const generaOpzioni = (valoreMassimo) => {
    const opzioni = [];
    for (let i = 1; i <= valoreMassimo; i++) {
      opzioni.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return opzioni;
  };

  const formatDate = (data) => {
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, "0");
    const day = String(data.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const payload = {
    dataInizio: selectedDate ? formatDate(selectedDate) : null,
    numeroOspiti: numeroOspiti,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };
  /*console.log(dispatch(getPrenotazioniAction()));*/
  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const sendPrenotazione = (e) => {
    e.preventDefault();

    dispatch(creaPrenotazioneAction(payload));
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendPrenotazione}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date prenotazione</Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="form-control mb-3"
                placeholderText="Seleziona la data"
                calendarClassName="custom-calendar"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumeroOspiti">
              <Form.Label>Numero Ospiti</Form.Label>
              <Form.Select
                value={numeroOspiti}
                onChange={handleNumeroOspitiChange}
                className="select-numeroOspiti mb-3"
              >
                {generaOpzioni(annuncio.postiLetto).map((opzione) => opzione)}
              </Form.Select>
            </Form.Group>
            <Button type="submit" className="position-absolute end-0 bottom-0 mb-3 me-3">
              <svg height="24" width="24" className="send-btn">
                <path
                  fill="#352f44"
                  d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                ></path>
              </svg>
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Prenotazione;
