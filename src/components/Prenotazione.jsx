import { useState, useEffect } from "react";
import { Button, Form, Modal, Row, ModalBody, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { creaPrenotazioneAction, getPrenotazioniPerDataInizioAndAnnuncioAction } from "../redux/actions";

const Prenotazione = ({ annuncio, show, onHide }) => {
  const dispatch = useDispatch();
  const prenotazioni = useSelector((state) => state.prenotazioni);

  const formatDate = (data) => {
    const year = data.getFullYear();
    const month = String(data.getMonth() + 1).padStart(2, "0");
    const day = String(data.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const isDateDisabled = (date) => {
    const formattedDate = formatDate(date);

    const prenotazioneEsistente = prenotazioni.some(
      (prenotazione) => formattedDate >= prenotazione.dataInizio && formattedDate <= prenotazione.dataFine
    );

    return !prenotazioneEsistente;
  };

  const email = localStorage.getItem("email");
  const [selectedDate, setSelectedDate] = useState(null);
  const [numeroOspiti, setNumeroOspiti] = useState(1);
  const [prenotazioneInviata, setPrenotazioneInviata] = useState(false);

  const formattedNome = annuncio.nome.replace(/-/g, " ");
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

  const payload = {
    dataInizio: selectedDate ? formatDate(selectedDate) : null,
    numeroOspiti: numeroOspiti,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };

  useEffect(() => {
    dispatch(getPrenotazioniPerDataInizioAndAnnuncioAction(formattedNome));
    setSelectedDate(new Date());
  }, [dispatch, formattedNome]);

  const sendPrenotazione = async (e) => {
    e.preventDefault();

    dispatch(creaPrenotazioneAction(payload));
    setPrenotazioneInviata(true);
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Form onSubmit={sendPrenotazione}>
            <Form.Group className="">
              <Form.Label>
                <span className="fs-4 me-3 fw-light">Scegli la data</span>
              </Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="calendario mb-3 "
                placeholderText="Seleziona la data"
                calendarClassName="custom-calendar"
                filterDate={isDateDisabled}
                inline
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumeroOspiti">
              <Form.Label>
                <span className="fs-4 me-3 fw-light">Numero Ospiti</span>
              </Form.Label>
              <Form.Select
                value={numeroOspiti}
                onChange={handleNumeroOspitiChange}
                className="select-numeroOspiti mb-3"
              >
                {generaOpzioni(annuncio.postiLetto).map((opzione) => opzione)}
              </Form.Select>
            </Form.Group>

            <Row sm={3} className="d-flex flex-row justify-content-end align-items-end">
              {!prenotazioneInviata && (
                <Button type="submit" className=" mb-3 me-5 send-btn-prenotazione">
                  INVIA
                </Button>
              )}
            </Row>
          </Form>
        </ModalBody>
        {prenotazioneInviata && (
          <div className="mx-2">
            <Alert variant="success" dismissible>
              La prenotazione è stata inviata con successo!
            </Alert>
          </div>
        )}
      </Modal>

      {/* Alert per la conferma della prenotazione */}
    </>
  );
};

export default Prenotazione;
