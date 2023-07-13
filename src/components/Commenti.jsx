import { Alert, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentiAction } from "../redux/actions";
import { useEffect } from "react";

const Commenti = ({ annuncio }) => {
  const commenti = useSelector((state) => state.commenti);

  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };

  useEffect(() => {
    dispatch(getCommentiAction(formatNomeAnnuncio(annuncio.nome)));
  }, [annuncio.nome, dispatch]);

  return (
    <Row>
      <>
        {commenti.map((commento) => {
          if (commento.annuncio.nome === annuncio.nome) {
            return (
              <Col key={commento.id} sm={6}>
                <Card className="card-commenti w-75 mb-3">
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
                          <p className="fs-4 fw-bold">{commento.user.name}</p>
                          <p className="fw-light fs-6">{commento.dataInserimento}</p>
                          {commento.user.email === email && (
                            <Button>
                              <svg
                                fill="lightgray"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                className="mercado-match position-absolute end-0 top-0 me-4"
                                width="24"
                                height="24"
                                focusable="false"
                              >
                                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                              </svg>
                            </Button>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="fs-5">
                        <p className="text-truncate">{commento.bodyCommento}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
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
