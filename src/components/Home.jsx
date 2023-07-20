import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import Annuncio from "./Annuncio";
import { useDispatch, useSelector } from "react-redux";

import {
  getAnnunciAction,
  getAnnunciByFilterAction,
  getAnnunciByPrezzoAction,
  getAnnunciByTipologiaAction,
  getMyAnnunciAction,
  getUserLoggedAction,
} from "../redux/actions";
import { useEffect, useState } from "react";

const Home = ({ searchByFilter }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const annunci = useSelector((state) => state.home.annunci);
  const annunciPerFiltro = useSelector((state) => state.annunciPerFiltro);
  const annunciPerTipo = useSelector((state) => state.annunciPerTipo);
  const [tipo, setTipo] = useState("");
  const [prezzoMinimo, setPrezzoMinimo] = useState(0);
  const [prezzoMassimo, setPrezzoMassimo] = useState(0);
  const [showFiltered, setShowFiltered] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const allAnnunci = searchByFilter !== "" ? annunciPerFiltro : annunci;
  const filteredAnnunciPerTipo = tipo !== "" ? annunciPerTipo : allAnnunci;
  const filteredAnnunciPerPrezzoAndTipo = filteredAnnunciPerTipo.filter(
    (annuncio) => annuncio.prezzo >= prezzoMinimo && annuncio.prezzo <= prezzoMassimo
  );

  const handleFilterClick = () => {
    if (filteredAnnunciPerPrezzoAndTipo.length > 0) {
      setShowFiltered(true);
    } else {
      setShowAlert(true);
    }
  };

  const handleTipoClick = (tipo) => {
    setTipo(tipo);
  };

  const handleAllAnnunciClick = () => {
    setTipo("");
  };

  const handlePrezzoMinimoChange = (e) => {
    setPrezzoMinimo(e.target.value);
  };

  const handlePrezzoMassimoChange = (e) => {
    setPrezzoMassimo(e.target.value);
  };

  const handleResetPrezzoFilter = () => {
    setShowAlert(false);
    setPrezzoMinimo(0);
    setPrezzoMassimo(0);
    setShowFiltered(false);
  };

  const handleResetTipoFilter = () => {
    setTipo("");
    setShowFiltered(false);
  };

  useEffect(() => {
    dispatch(getUserLoggedAction());
    if (dispatch(getUserLoggedAction())) {
      if (searchByFilter !== "") {
        dispatch(getAnnunciByFilterAction(searchByFilter));
      } else {
        dispatch(getAnnunciAction("http://localhost:3001/annunci"));
        dispatch(getMyAnnunciAction());
      }
    }
  }, [dispatch, searchByFilter]);

  useEffect(() => {
    if (tipo !== "") {
      dispatch(getAnnunciByTipologiaAction(tipo));
    }
  }, [tipo, dispatch]);

  return (
    <Container fluid>
      {user !== null ? (
        <>
          <Row className=" mx-0 justify-content-around">
            <Col sm={2}>
              <Button className="tipo-struttura" onClick={handleAllAnnunciClick}>
                <div className="d-flex flex-column align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 448 512" className="mt-2 ">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                  </svg>
                  TUTTI GLI ANNUNCI
                </div>
              </Button>
            </Col>
            <Col sm={2}>
              <Button className="tipo-struttura" onClick={() => handleTipoClick("APPARTAMENTO")}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
                    alt=""
                    width="40"
                    height="40"
                    className="img-tipo-struttura"
                  />
                  APPARTAMENTI
                </div>
              </Button>
            </Col>
            <Col sm={2}>
              <Button className="tipo-struttura " onClick={() => handleTipoClick("STRUTTURA_CON_PISCINA")}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                    alt=""
                    width="40"
                    height="40"
                    className="img-tipo-struttura"
                  />
                  PISCINA
                </div>
              </Button>
            </Col>
            <Col sm={2}>
              <Button className="tipo-struttura " onClick={() => handleTipoClick("STRUTTURA_AL_MARE")}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
                    alt=""
                    width="40"
                    height="40"
                    className="img-tipo-struttura"
                  />
                  MARE
                </div>
              </Button>
            </Col>
            <Col sm={2}>
              <Button className="tipo-struttura " onClick={() => handleTipoClick("STRUTTURA_IN_MONTAGNA")}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                    alt=""
                    width="40"
                    height="40"
                    className="img-tipo-struttura"
                  />
                  MONTAGNA
                </div>
              </Button>
            </Col>
            <Col sm={2}>
              <Button className="tipo-struttura " onClick={() => handleTipoClick("STRUTTURA_SUL_LAGO")}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                    alt=""
                    width="40"
                    height="40"
                    className="img-tipo-struttura"
                  />
                  LAGO
                </div>
              </Button>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-start">
            <Col sm={2} className="mx-0 px-0 d-flex justify-content-center align-items-center">
              <Button className="prenota rounded-pill " onClick={handleFilterClick}>
                FILTRA PER PREZZO
              </Button>
            </Col>
            <Col sm={6}>
              <div className="d-flex flex-row">
                <Form.Group className="mx-2 d-flex flex-row align-items-center">
                  <Form.Label className="mx-2 fw-semibold">Min</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Inserisci il prezzo minimo"
                    value={prezzoMinimo}
                    onChange={handlePrezzoMinimoChange}
                  />
                </Form.Group>
                <Form.Group className="mx-2 d-flex flex-row align-items-center">
                  <Form.Label className="mx-2 fw-semibold">Max</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Inserisci il prezzo massimo"
                    value={prezzoMassimo}
                    onChange={handlePrezzoMassimoChange}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col sm={4}>
              <Button className="prenota rounded-pill me-2" onClick={handleResetPrezzoFilter}>
                RESET FILTRO PREZZO
              </Button>
              <Button className="prenota rounded-pill me-2" onClick={handleResetTipoFilter}>
                RESET FILTRO TIPO
              </Button>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            {showAlert ? (
              <Alert className=" mt-3 text-center">NESSUN ANNUNCIO TROVATO</Alert>
            ) : showFiltered ? (
              filteredAnnunciPerPrezzoAndTipo.map((annuncio) => (
                <Col key={annuncio.id}>
                  <Annuncio annuncio={annuncio} />
                </Col>
              ))
            ) : (
              filteredAnnunciPerTipo.map((annuncio) => (
                <Col key={annuncio.id}>
                  <Annuncio annuncio={annuncio} />
                </Col>
              ))
            )}
          </Row>
        </>
      ) : (
        <Alert className="display-6 mt-3 text-center">Loggati o registrati per visualizzare gli annunci!</Alert>
      )}
    </Container>
  );
};
export default Home;
