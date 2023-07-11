import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCommentiAction } from "../redux/actions";
import { useEffect, useState } from "react";

const Commenti = ({ annuncio }) => {
  const commenti = useSelector((state) => state.commenti);
  console.log(commenti);
  const dispatch = useDispatch();
  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };

  useEffect(() => {
    dispatch(getCommentiAction(formatNomeAnnuncio(annuncio.nome)));
  }, []);

  return (
    <Row>
      <>
        {commenti.map((commento) => (
          <Col key={commento.id} sm={6}>
            <Card className="card-commenti w-75 mb-3">
              <Card.Body className="rounded">
                <Row className="">
                  <Col className=" d-flex justify-content-start align-items-center m-0 p-0">
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
                      <p className=" fw-light fs-6">{commento.dataInserimento}</p>
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
        ))}
      </>
    </Row>
  );
};
export default Commenti;
