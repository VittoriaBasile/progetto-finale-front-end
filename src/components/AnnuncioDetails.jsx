import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDettaglioAction } from "../redux/actions";
import AllarmeAntincendio from "../assets/svgServizi/AllarmeAntincendio.svg";
import AriaCondizionata from "../assets/svgServizi/AriaCondizionata.svg";
import Asciugacapelli from "../assets/svgServizi/Asciugacapelli.svg";
import Lavatrice from "../assets/svgServizi/Lavatrice.svg";
import Piscina from "../assets/svgServizi/Piscina.svg";
import Riscaldamento from "../assets/svgServizi/Riscaldamento.svg";
import SelfCheckIn from "../assets/svgServizi/SelfCheckIn.svg";
import Tv from "../assets/svgServizi/Tv.svg";
import WiFi from "../assets/svgServizi/WiFi.svg";
import CommentArea from "./CommentArea";
import Prenotazione from "./Prenotazione";

const AnnuncioDetails = () => {
  const servizioSvg = {
    ALLARME_ANTINCENDIO: {
      src: AllarmeAntincendio,
      className: "icona-dettaglio-posti-letto me-2 mb-2",
      style: { width: "", height: "" },
    },
    ARIA_CONDIZIONATA: {
      src: AriaCondizionata,
      className: "icona-dettaglio-posti-letto me-2 mb-2",
      style: { width: "", height: "" },
    },
    ASCIUGACAPELLI: { src: Asciugacapelli, className: "icona-dettaglio-servizi me-2 mb-2" },
    LAVATRICE: { src: Lavatrice, className: "icona-dettaglio-servizi me-2 mb-2" },
    PISCINA: { src: Piscina, className: "icona-dettaglio-servizi me-2 mb-2" },
    RISCALDAMENTO: { src: Riscaldamento, className: "icona-dettaglio-servizi me-2 mb-2" },
    SELF_CHECK_IN: { src: SelfCheckIn, className: "icona-dettaglio-servizi me-2 mb-2" },
    TV: { src: Tv, className: "icona-dettaglio-servizi me-2 mb-2" },
    WI_FI: { src: WiFi, className: "icona-dettaglio-servizi me-2 " },
  };

  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };
  const annuncio = useSelector((state) => state.home.annuncio);

  const dispatch = useDispatch();
  const params = useParams();

  const [showPrenotazione, setShowPrenotazione] = useState(false);

  const handleOpen = () => {
    setShowPrenotazione(true);
  };

  const handleClose = () => {
    setShowPrenotazione(false);
  };

  useEffect(() => {
    const url = `http://localhost:3001/annunci/${params.id}`;
    dispatch(getDettaglioAction(url));
  }, [params.id]);

  return (
    <>
      {annuncio != null && (
        <>
          <Container fluid>
            <Row className="py-2 ">
              <Col>
                <h1>{formatNomeAnnuncio(annuncio.nome)}</h1>
              </Col>
            </Row>

            <Row className="">
              <Col lg={6} className="sm-w-100 lg-w-50">
                <Card className="prima-card-img-dettaglio h-100">
                  {annuncio.image.length > 0 && (
                    <Card.Img variant="top" src={annuncio.image[0]} className="rounded first-img-dettaglio" />
                  )}
                </Card>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2  row-gap-3">
                  {annuncio.image.slice(1).map((url, index) => (
                    <Card key={index} className="card-img-dettaglio">
                      <Card.Img variant="top" src={url} className="rounded img-dettaglio h-100" />
                    </Card>
                  ))}
                </Row>
              </Col>
            </Row>
            <Row className="mt-5 ">
              <h4>A proposito di questo alloggio</h4>

              <p>{annuncio.descrizione}</p>
              <p>
                <strong>{annuncio.prezzo}</strong>€ a notte
              </p>

              <Row>
                <Col sm={6}>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="icona-dettaglio-posti-letto p-0 me-3"
                    >
                      <path d="M28 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H2v2H0v-9.68a3 3 0 0 1 .09-.71l.06-.23L2 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L4 4zm2 18H2v4h28zm-1.39-6H3.4l-1.34 4h27.9zM28 6H4v8h2v-4a2 2 0 0 1 1.85-2H24a2 2 0 0 1 2 1.85V14h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path>
                    </svg>
                    <span>
                      Posti letto{"  "}
                      {annuncio.postiLetto}
                    </span>
                  </p>
                </Col>
                <Col sm={6} className="">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 36 36"
                      height="36"
                      width="36"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="icona-dettaglio p-0 m-0"
                    >
                      <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
                    </svg>
                    <span className="p-0 m-0">Cancellazione gratuita fino a due giorni prima della prenotazione</span>
                  </p>
                </Col>
              </Row>

              <div>
                <hr className="mb-3" />
              </div>
              <Row className="">
                <h4>Cosa troverai</h4>

                <div className="d-flex flex-wrap mt-3">
                  <div className="w-50">
                    {annuncio.servizi
                      .filter((servizio) => servizioSvg.hasOwnProperty(servizio.toUpperCase()))
                      .slice(0, 4)
                      .map((servizio, index) => (
                        <div key={index} className="mb-4">
                          <img
                            src={servizioSvg[servizio.toUpperCase()].src}
                            alt={servizio}
                            className={servizioSvg[servizio.toUpperCase()].className}
                          />
                          <span>{servizio.replace(/_/g, " ")}</span>
                        </div>
                      ))}
                  </div>
                  <div className="w-50">
                    {annuncio.servizi
                      .filter((servizio) => servizioSvg.hasOwnProperty(servizio.toUpperCase()))
                      .slice(4, 8)
                      .map((servizio, index) => (
                        <div key={index} className="mb-4">
                          <img
                            src={servizioSvg[servizio.toUpperCase()].src}
                            alt={servizio}
                            className={servizioSvg[servizio.toUpperCase()].className}
                          />
                          <span>{servizio.replace(/_/g, " ")}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <Col sm={3} className="offset-8 d-flex justify-content-end">
                  <Button className="prenota mb-5 rounded-pill" onClick={handleOpen}>
                    PRENOTA ORA
                  </Button>
                </Col>
                <hr />
                {showPrenotazione && <Prenotazione show={handleOpen} onHide={handleClose} annuncio={annuncio} />}
              </Row>
              <h4>Dove ti troverai</h4>
              <iframe
                src={annuncio.googleMaps}
                title="Mappa dell'annuncio"
                className="map w-100 my-5"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <hr className="mb-3" />
              <CommentArea annuncio={annuncio} />
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default AnnuncioDetails;
