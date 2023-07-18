import { useState, useEffect } from "react";
import { Button, Form, Modal, Row, ModalBody, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { creaPrenotazioneAction, getPrenotazioniPerDataInizioAndAnnuncioAction } from "../redux/actions";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [numeroOspiti, setNumeroOspiti] = useState(1);
  const [prenotazioneInviata, setPrenotazioneInviata] = useState(false);

  const formattedNome = annuncio.nome.replace(/-/g, " ");
  const handleDateChange = (data) => {
    setSelectedDate(data);
  };

  const handleEndDateChange = (data) => {
    setSelectedEndDate(data);
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
    dataFine: selectedEndDate ? formatDate(selectedEndDate) : null,
    numeroOspiti: numeroOspiti,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };

  const calcoloTotale = () => {
    if (selectedDate && selectedEndDate && numeroOspiti) {
      const startDate = new Date(selectedDate);
      const endDate = new Date(selectedEndDate);

      const timeDifference = Math.abs(endDate.getTime() - startDate.getTime());
      const numeroNotti = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      const prezzoNotte = numeroOspiti * annuncio.prezzo;
      const tassaSoggiorno = 5 * numeroOspiti;
      const prezzoNotti = prezzoNotte * numeroNotti;
      const totale = prezzoNotti + tassaSoggiorno;

      return totale;
    }
    return null;
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
                <span className="fs-4 me-3 fw-light">Data Inizio</span>
              </Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="calendario mb-3 "
                placeholderText="Seleziona la data di inizio"
                calendarClassName="custom-calendar"
                filterDate={isDateDisabled}
                inline
              />
            </Form.Group>
            <Form.Group className="">
              <Form.Label>
                <span className="fs-4 me-3 fw-light">Data Fine</span>
              </Form.Label>
              <DatePicker
                selected={selectedEndDate}
                onChange={handleEndDateChange}
                className="calendario mb-3 "
                placeholderText="Seleziona la data di fine"
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
            {selectedDate && selectedEndDate && numeroOspiti && (
              <Row>
                <span className="fs-4 me-3 fw-light">
                  Totale: <span className="fw-bold">{calcoloTotale()}€</span>{" "}
                </span>
              </Row>
            )}
            <Row>
              <PayPalScriptProvider>
                <PayPalButtons
                  style={{
                    color: "silver",
                    tagline: false,
                    shape: "pill",
                  }}
                />
              </PayPalScriptProvider>
            </Row>
            <Row sm={3} className="d-flex flex-row justify-content-end align-items-end">
              {!prenotazioneInviata && (
                <Button type="submit" className=" mb-3 me-5 send-btn-prenotazione rounded-pill">
                  INVIA
                </Button>
              )}
            </Row>
          </Form>
        </ModalBody>
        {prenotazioneInviata && (
          <div className="mx-2">
            <Alert variant="success">La prenotazione è stata inviata con successo!</Alert>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Prenotazione;
