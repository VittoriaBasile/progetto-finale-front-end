import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { eliminaPrenotazioneAction, getMyPrenotazioniAction } from "../redux/actions";
import { useEffect, useState } from "react";

const MyPrenotazioni = () => {
  const dispatch = useDispatch();
  const prenotazioni = useSelector((state) => state.prenotazioni);

  const [showAlert, setShowAlert] = useState(false);
  const [selectedPrenotazioneId, setSelectedPrenotazioneId] = useState(null);
  console.log(prenotazioni);
  const email = localStorage.getItem("email");

  const myPrenotazioni = prenotazioni.filter((prenotazione) => prenotazione.user.email === email);

  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };

  const handleOpenAlert = (prenotazioneId) => {
    setSelectedPrenotazioneId(prenotazioneId);
    setShowAlert(true);
  };

  const handleDeletePrenotazione = (prenotazioneId) => {
    dispatch(eliminaPrenotazioneAction(prenotazioneId));
    setShowAlert(false);
  };

  useEffect(() => {
    dispatch(getMyPrenotazioniAction());
  }, [dispatch]);
  return (
    <>
      <Row className="flex-column w-50 mt-4 ms-2 gap-3">
        <Row className="px-2 mt-4">
          <h4 className="px-0 mx-0">LE TUE PRENOTAZIONI</h4>
        </Row>
        {myPrenotazioni.length == 0 ? (
          <Alert>Non hai ancora effettuato alcuna prenotazione</Alert>
        ) : (
          myPrenotazioni.map((myPrenotazione) => {
            return (
              <Col key={myPrenotazione.id}>
                <Card className="card-myPrenotazione">
                  <Card.Body className="position-relative">
                    <Card.Title className="mb-4 ">
                      Prenotazione per {formatNomeAnnuncio(myPrenotazione.annuncio.nome)}
                    </Card.Title>

                    <Row>
                      <Col sm={3}>
                        <p>Data Inizio: </p>
                        <p>Data fine: </p>
                        <p>Numero ospiti: </p>
                        <p>Totale: </p>
                      </Col>
                      <Col sm={5}>
                        <p className="fw-semibold">{myPrenotazione.dataInizio}</p>
                        <p className="fw-semibold">{myPrenotazione.dataFine}</p>
                        <p className="fw-semibold">{myPrenotazione.numeroOspiti}</p>
                        <p className="fw-semibold">{myPrenotazione.prezzo}€</p>
                      </Col>
                    </Row>

                    <Button onClick={() => handleOpenAlert(myPrenotazione.id)} className="button-commento">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#b80808"
                        viewBox="0 0 48 48"
                        width="24px"
                        height="24px"
                        className="mercado-match position-absolute end-0 top-0 me-5 mt-4"
                      >
                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
                      </svg>
                    </Button>
                  </Card.Body>
                </Card>
                {showAlert && selectedPrenotazioneId === myPrenotazione.id && (
                  <Alert variant="danger" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>Confermi di voler eliminare la prenotazione?</Alert.Heading>
                    <Button variant="danger" onClick={() => handleDeletePrenotazione(myPrenotazione.id)}>
                      Conferma
                    </Button>
                  </Alert>
                )}
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
};
export default MyPrenotazioni;
