import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModificaMyAnnuncio from "./ModificaMyAnnuncio";
import { eliminaAnnuncioAction, getMyAnnunciAction } from "../redux/actions";

const MyAnnunci = () => {
  const dispatch = useDispatch();

  const annunci = useSelector((state) => state.annunci);
  console.log(annunci);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnnuncioId, setSelectedAnnuncioId] = useState(null);
  const [selectedAnnuncio, setSelectedAnnuncio] = useState(null);
  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };
  const handleModalOpen = (annuncio) => {
    setSelectedAnnuncio(annuncio);
    setShowModal(true);
  };
  const handleShowAlert = (annuncio) => {
    setSelectedAnnuncio(annuncio);
    setShowAlert(true);
  };
  const handleDeleteAnnuncio = (annuncio) => {
    dispatch(eliminaAnnuncioAction(annuncio));
    setShowAlert(false);
  };

  useEffect(() => {
    dispatch(getMyAnnunciAction());
  }, []);

  return (
    <Container>
      <Row className="ms-2 mt-4">
        <h4>I TUOI ANNUNCI</h4>
      </Row>
      <Row className="flex-column  mt-4 ms-2 gap-3">
        {annunci.length === 0 ? (
          <Alert variant="info">Non hai ancora pubblicato nessun annuncio.</Alert>
        ) : (
          annunci.map((annuncio) => {
            return (
              <Col key={annuncio.id}>
                <Card className="card-myAnnuncio">
                  <Card.Body className="position-relative">
                    <Card.Title className="mb-4 ">{formatNomeAnnuncio(annuncio.nome)}</Card.Title>
                    <Button
                      className="button-commento "
                      onClick={() => {
                        setSelectedAnnuncioId(annuncio.id);
                        handleShowAlert(annuncio);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#b80808"
                        viewBox="0 0 48 48"
                        width="30"
                        height="30"
                        className="mercado-match position-absolute end-0 top-0 elimina-annuncio mt-4"
                      >
                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
                      </svg>
                    </Button>
                    <Button className="button-commento" onClick={() => handleModalOpen(annuncio)}>
                      {" "}
                      <svg
                        fill="#352f44"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        data-supported-dps="24x24"
                        className="mercado-match position-absolute end-0 modifica-annuncio  "
                        width="30"
                        height="30"
                        focusable="false"
                      >
                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                      </svg>
                    </Button>

                    <p>
                      <span className="proprietà-annuncio">Data Inserimento:</span>
                      <span className="fw-semibold">{annuncio.dataInserimento}</span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Descrizione:</span>
                      <span className="fw-semibold">{annuncio.descrizione}</span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Prezzo per notte:</span>
                      <span className="fw-semibold">{annuncio.prezzo}€</span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Tipo di alloggio:</span>
                      <span className="fw-semibold">{annuncio.tipologia}</span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Posti letto:</span>
                      <span className="fw-semibold">{annuncio.postiLetto}</span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">URL immagini:</span>
                      <span className="fw-semibold mb-2 d-inline-block valore-proprietà-annuncio ">
                        {annuncio.image[0]}
                      </span>
                      <span className="fw-semibold mb-2 d-inline-block valore-proprietà-annuncio">
                        {annuncio.image[1]}
                      </span>
                      <span className="fw-semibold mb-2 d-inline-block valore-proprietà-annuncio">
                        {annuncio.image[2]}
                      </span>
                      <span className="fw-semibold mb-2 d-inline-block valore-proprietà-annuncio">
                        {annuncio.image[3]}
                      </span>
                      <span className="fw-semibold mb-2 d-inline-block  valore-proprietà-annuncio">
                        {annuncio.image[4]}
                      </span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Servizi:</span>
                      <span className="fw-semibold">
                        {" "}
                        {annuncio.servizi.map((servizio) => servizio.replace(/_/g, " ")).join(",  ")}
                      </span>
                    </p>
                    <p>
                      <span className="proprietà-annuncio">Indirizzo:</span>
                      <span className="fw-semibold">
                        {annuncio.indirizzo.via.replace(/-/g, " ")}, {annuncio.indirizzo.città},{" "}
                        {annuncio.indirizzo.stato}
                      </span>
                    </p>
                  </Card.Body>
                </Card>
                {showAlert && selectedAnnuncioId === annuncio.id && (
                  <Alert variant="danger" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>Confermi di voler eliminare la prenotazione?</Alert.Heading>
                    <Button variant="danger" onClick={() => handleDeleteAnnuncio(selectedAnnuncio)}>
                      Conferma
                    </Button>
                  </Alert>
                )}
                <Modal show={showModal} onHide={() => setShowModal(false)} className="modale-modifica-annuncio">
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica il tuo annuncio</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModificaMyAnnuncio annuncio={selectedAnnuncio} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default MyAnnunci;
