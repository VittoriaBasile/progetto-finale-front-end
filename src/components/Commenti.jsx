import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { eliminaCommentoAction, getCommentiAction } from "../redux/actions";
import { useEffect, useState } from "react";
import ModificaCommento from "./ModificaCommento";
import EliminaCommento from "./EliminaCommento";

const Commenti = ({ annuncio }) => {
  const commenti = useSelector((state) => state.commenti);

  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCommentoId, setSelectedCommentoId] = useState(null);
  const [showFullText, setShowFullText] = useState({});

  const MAX_CHARACTERS = 47;

  const shouldTruncateText = (commento) => {
    return commento.bodyCommento && commento.bodyCommento.length > MAX_CHARACTERS && !showFullText[commento.id];
  };

  const truncatedText = (commento) => {
    return shouldTruncateText(commento)
      ? commento.bodyCommento.slice(0, MAX_CHARACTERS) + "..."
      : commento.bodyCommento;
  };

  const handleMostraAltro = (commento) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [commento.id]: true,
    }));
  };

  const handleMostraMeno = (commento) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [commento.id]: false,
    }));
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteCommento = (commentoId) => {
    setSelectedCommentoId(commentoId);
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setSelectedCommentoId(null);
  };

  useEffect(() => {
    dispatch(getCommentiAction(formatNomeAnnuncio(annuncio.nome)));
  }, [annuncio.nome, dispatch]);

  return (
    <Row className="w-75 mt-5">
      <>
        {commenti.map((commento) => {
          if (commento.annuncio.nome === annuncio.nome) {
            return (
              <Col key={commento.id} className="" sm={7}>
                <Card className="card-commenti  mb-3">
                  <Card.Body className="rounded">
                    <Row className="">
                      <Col className="d-flex justify-content-start align-items-center m-0 p-0 position-relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 39 39"
                          aria-hidden="true"
                          role="presentation"
                          fill="secondary"
                          focusable="false"
                          className="my-0 m-0 p-0 icona-commenti d-lg-block"
                        >
                          <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                        </svg>
                        <div className="commento-details">
                          <p className="fs-5 fw-semibold">{commento.user.name}</p>
                          <p className="fw-light fs-6">{commento.dataInserimento}</p>
                          {commento.user.email === email && (
                            <>
                              <Button onClick={handleModalOpen} className="button-commento">
                                <svg
                                  fill="#352f44"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  data-supported-dps="24x24"
                                  className="mercado-match position-absolute end-0 top-0 me-3"
                                  width="24"
                                  height="24"
                                  focusable="false"
                                >
                                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                              </Button>
                              <Button onClick={() => handleDeleteCommento(commento.id)} className="button-commento">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#352f44"
                                  viewBox="0 0 48 48"
                                  width="24px"
                                  height="24px"
                                  className="mercado-match position-absolute end-0 top-0 me-5 "
                                >
                                  <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
                                </svg>
                              </Button>

                              <ModificaCommento show={showModal} onHide={handleModalClose} commento={commento} />
                            </>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="">
                        <p className="fs-6">
                          {shouldTruncateText(commento) ? truncatedText(commento) : commento.bodyCommento}
                        </p>
                        {shouldTruncateText(commento) && (
                          <Button
                            variant="link"
                            className="text-decoration-none "
                            onClick={() => handleMostraAltro(commento)}
                          >
                            Mostra altro
                          </Button>
                        )}
                        {showFullText[commento.id] && (
                          <Button
                            variant="link"
                            className="text-decoration-none"
                            onClick={() => handleMostraMeno(commento)}
                          >
                            Mostra meno
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                {showAlert && selectedCommentoId === commento.id && (
                  <EliminaCommento onHide={handleAlertClose} commento={commento} />
                )}
              </Col>
            );
          }
          return null;
        })}
      </>
    </Row>
  );
};

export default Commenti;
