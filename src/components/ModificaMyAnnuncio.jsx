import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { modificaAnnuncioAction } from "../redux/actions";

const ModificaMyAnnuncio = ({ annuncio, closeModal }) => {
  const statiEuropei = [
    "Albania",
    "Andorra",
    "Austria",
    "Belgio",
    "Bielorussia",
    "Bosnia-Erzegovina",
    "Bulgaria",
    "Cipro",
    "Croazia",
    "Danimarca",
    "Estonia",
    "Finlandia",
    "Francia",
    "Germania",
    "Grecia",
    "Irlanda",
    "Islanda",
    "Italia",
    "Lettonia",
    "Liechtenstein",
    "Lituania",
    "Lussemburgo",
    "Malta",
    "Moldavia",
    "Monaco",
    "Montenegro",
    "Norvegia",
    "Paesi Bassi",
    "Polonia",
    "Portogallo",
    "Regno Unito",
    "Repubblica Ceca",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovacchia",
    "Slovenia",
    "Spagna",
    "Svezia",
    "Svizzera",
    "Ucraina",
    "Ungheria",
    "Vaticano",
  ];
  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };
  const dispatch = useDispatch();
  const [nomeAnnuncio, setNomeAnnuncio] = useState(formatNomeAnnuncio(annuncio.nome));
  const [prezzo, setPrezzo] = useState(annuncio.prezzo);
  const [tipoAlloggio, setTipoAlloggio] = useState(annuncio.tipologia);
  const [servizi, setServizi] = useState(annuncio.servizi);
  const [descrizione, setDescrizione] = useState(annuncio.descrizione);
  const [postiLetto, setPostiLetto] = useState(annuncio.postiLetto);
  const [googleMapsURL, setGoogleMapsURL] = useState(annuncio.googleMaps);
  const [città, setCittà] = useState(annuncio.indirizzo.città);
  const [indirizzo, setIndirizzo] = useState(annuncio.indirizzo.via);
  const [stato, setStato] = useState(annuncio.indirizzo.stato);
  const [imgUrls, setImgUrls] = useState(annuncio.image);
  const [imgUrl1, setImgUrl1] = useState(annuncio.image[0]);
  const [imgUrl2, setImgUrl2] = useState(annuncio.image[1]);
  const [imgUrl3, setImgUrl3] = useState(annuncio.image[2]);
  const [imgUrl4, setImgUrl4] = useState(annuncio.image[3]);
  const [imgUrl5, setImgUrl5] = useState(annuncio.image[4]);

  const email = localStorage.getItem("email");

  const tipologiaAlloggio = {
    APPARTAMENTO: "Appartamento",
    STRUTTURA_CON_PISCINA: "Struttura con piscina",
    STRUTTURA_AL_MARE: "Struttura al mare",
    STRUTTURA_IN_MONTAGNA: "Struttura in montagna",
    STRUTTURA_SU_LAGO: "Struttura su lago",
  };

  const elencoServizi = {
    LAVATRICE: "Lavatrice",
    SELF_CHECK_IN: "Self check-in",
    WI_FI: "Wi-fi",
    ARIA_CONDIZIONATA: "Aria condizionata",
    RISCALDAMENTO: "Riscaldamento",
    TV: "Tv",
    ASCIUGACAPELLI: "Asciugacapelli",
    PISCINA: "Piscina",
    ALLARME_ANTINCENDIO: "Allarme antincendio",
  };

  const postiLettoSelected = () => {
    const numeriOptions = [];
    for (let i = 2; i <= 10; i++) {
      numeriOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return numeriOptions;
  };

  const handleNomeAnnuncioChange = (event) => {
    const inputNomeAnnuncio = event.target.value;
    setNomeAnnuncio(inputNomeAnnuncio);
  };

  const handleDescrizioneChange = (event) => {
    const inputDescrizione = event.target.value;
    setDescrizione(inputDescrizione);
  };

  const handlePostiLettoChange = (event) => {
    const inputPostiLetto = event.target.value;
    setPostiLetto(inputPostiLetto);
  };

  const handleTipoAlloggioChange = (event) => {
    const selectedTipoAlloggio = event.target.value;
    const formattedTipoAlloggio = selectedTipoAlloggio.toUpperCase().replace(/\s+/g, "_");
    setTipoAlloggio(formattedTipoAlloggio);
  };

  const handlePrezzoChange = (event) => {
    const inputPrezzo = event.target.value;
    setPrezzo(inputPrezzo);
  };

  const handleServizioChange = (event) => {
    const selectedServizio = event.target.value;
    if (servizi.includes(selectedServizio)) {
      setServizi((prevServizi) => prevServizi.filter((servizio) => servizio !== selectedServizio));
    } else {
      setServizi((prevServizi) => [...prevServizi, selectedServizio]);
    }
  };

  const handleGoogleMapsURLChange = (event) => {
    const inputGoogleMapsURL = event.target.value;
    setGoogleMapsURL(inputGoogleMapsURL);
  };

  const handleCittàChange = (event) => {
    const inputCittà = event.target.value;
    setCittà(inputCittà);
  };
  const handleIndirizzoChange = (event) => {
    const inputIndirizzo = event.target.value;
    setIndirizzo(inputIndirizzo);
  };
  const handleStatoChange = (event) => {
    const inputStato = event.target.value;
    setStato(inputStato);
  };
  const handleImgUrl1Change = (event) => {
    const inputImgUrl1 = event.target.value;
    setImgUrl1(inputImgUrl1);
  };
  const handleImgUrl2Change = (event) => {
    const inputImgUrl2 = event.target.value;
    setImgUrl2(inputImgUrl2);
  };
  const handleImgUrl3Change = (event) => {
    const inputImgUrl3 = event.target.value;
    setImgUrl3(inputImgUrl3);
  };
  const handleImgUrl4Change = (event) => {
    const inputImgUrl4 = event.target.value;
    setImgUrl4(inputImgUrl4);
  };
  const handleImgUrl5Change = (event) => {
    const inputImgUrl5 = event.target.value;
    setImgUrl5(inputImgUrl5);
  };

  const [showInfo, setShowInfo] = useState(false);

  const handleInfoButtonClick = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  const payload = {
    nome: nomeAnnuncio,
    descrizione: descrizione,
    prezzo: prezzo,
    tipologia: tipoAlloggio,
    postiLetto: postiLetto,
    image: imgUrls,
    servizi: servizi,
    googleMaps: googleMapsURL,
    userEmail: email,
    viaIndirizzo: indirizzo,
    cittàIndirizzo: città,
    statoIndirizzo: stato,
  };

  const sendAnnuncio = (e) => {
    e.preventDefault();
    dispatch(modificaAnnuncioAction(annuncio.id, payload));
    closeModal();
  };

  useEffect(() => {
    if (imgUrl1 !== "" && imgUrl2 !== "" && imgUrl3 !== "" && imgUrl4 !== "" && imgUrl5 !== "") {
      setImgUrls([imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5]);
    }
  }, [imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5]);
  return (
    <>
      <Container className="mt-5">
        <Form onSubmit={sendAnnuncio}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nome annuncio</Form.Label>
              <Form.Control
                required
                type="text"
                value={nomeAnnuncio}
                onChange={handleNomeAnnuncioChange}
                className="bg-light text-dark input border"
                placeholder="Inserisci il nome del tuo annuncio"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                required
                type="text"
                value={descrizione}
                onChange={handleDescrizioneChange}
                className="bg-light text-dark input border"
                placeholder="Inserisci una descrizione del tuo annuncio"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3 position-relative">
                <Form.Label>Prezzo a notte</Form.Label>
                <Form.Control
                  required
                  type="number"
                  value={prezzo}
                  onChange={handlePrezzoChange}
                  className="bg-light text-dark input border"
                  placeholder="Inserisci il prezzo per notte del tuo annuncio"
                  inputMode="numeric"
                  step="any"
                />
                <span className="euro position-absolute end-0 me-3">€</span>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tipo Alloggio</Form.Label>
                <Form.Select
                  required
                  value={tipoAlloggio}
                  onChange={handleTipoAlloggioChange}
                  className="bg-light text-dark input border"
                  placeholder="Seleziona la tipologia dell'alloggio"
                >
                  <option value="">Tipologia dell'alloggio</option>
                  {Object.entries(tipologiaAlloggio).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Label>Numero di posti letto</Form.Label>
                <Form.Select value={postiLetto} onChange={handlePostiLettoChange}>
                  {postiLettoSelected()}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <Form.Group className="mb-3">
                <Form.Label>Servizi</Form.Label>
                <Row>
                  <Col>
                    {Object.entries(elencoServizi)
                      .slice(0, 5)
                      .map(([key, value]) => (
                        <Form.Check
                          key={key}
                          type="checkbox"
                          id={key}
                          name="servizi"
                          value={key}
                          label={value}
                          checked={servizi.includes(key)}
                          onChange={handleServizioChange}
                        />
                      ))}
                  </Col>

                  <Col>
                    {Object.entries(elencoServizi)
                      .slice(5, 9)
                      .map(([key, value]) => (
                        <Form.Check
                          key={key}
                          type="checkbox"
                          id={key}
                          name="servizi"
                          value={key}
                          label={value}
                          checked={servizi.includes(key)}
                          onChange={handleServizioChange}
                        />
                      ))}
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label>Google Maps</Form.Label>
              <Form.Group>
                <Button className="border-0" onClick={handleInfoButtonClick}>
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                      fill="#1C274C"
                    />
                  </svg>
                </Button>
              </Form.Group>
              {showInfo && (
                <>
                  <p className="fw-semibold">Per inserire la mappa di Google</p>
                  <p>1. Accedi a Google Maps</p>
                  <p>2. Cerca l' indirizzo del tuo alloggio</p>
                  <p>3. Seleziona l' indirizzo trovato</p>
                  <p>4. Seleziona "condividi"</p>
                  <p>5. Seleziona incorporare una mappa</p>
                  <p>6. Seleziona l' url {"(NB. Copia solo il contenuto di src)"}</p>
                  <p>7. Incolla nella sezione Google Maps sottostante</p>
                </>
              )}
              <Form.Control
                required
                as="textarea"
                value={googleMapsURL}
                onChange={handleGoogleMapsURLChange}
                className="bg-light text-dark input border "
                placeholder="es. https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12008.31286106715!2d16.578231738906453!3d41.198268327140944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347f9c661d454ef%3A0xd48c84659904d13c!2sVia%20Michiello%2C%2020%2C%2070056%20Molfetta%20BA!5e0!3m2!1sit!2sit!4v1689675736009!5m2!1sit!2sit"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Indirizzo</Form.Label>
              <Form.Control
                required
                type="text"
                value={indirizzo}
                onChange={handleIndirizzoChange}
                className="bg-light text-dark input border"
                placeholder="Indirizzo del tuo annuncio"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Città</Form.Label>
              <Form.Control
                required
                type="text"
                value={città}
                onChange={handleCittàChange}
                className="bg-light text-dark input border"
                placeholder="Città del tuo annuncio"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Stato</Form.Label>
              <Form.Select value={stato} onChange={handleStatoChange}>
                <option>Scegli lo stato</option>
                {statiEuropei.map((stato, index) => (
                  <option key={index} value={stato}>
                    {stato}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row>
            <h3>Sezione foto</h3>
            <Form.Group>
              <Form.Label>Foto 1 </Form.Label>
              <Form.Control
                required
                type="text"
                value={imgUrl1}
                onChange={handleImgUrl1Change}
                className="bg-light text-dark input border"
                placeholder="inserisci l' URL della tua foto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto 2 </Form.Label>
              <Form.Control
                required
                type="text"
                value={imgUrl2}
                onChange={handleImgUrl2Change}
                className="bg-light text-dark input border"
                placeholder="inserisci l' URL della tua foto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto 3 </Form.Label>
              <Form.Control
                required
                type="text"
                value={imgUrl3}
                onChange={handleImgUrl3Change}
                className="bg-light text-dark input border"
                placeholder="inserisci l' URL della tua foto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto 4 </Form.Label>
              <Form.Control
                required
                type="text"
                value={imgUrl4}
                onChange={handleImgUrl4Change}
                className="bg-light text-dark input border"
                placeholder="inserisci l' URL della tua foto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto 5 </Form.Label>
              <Form.Control
                required
                type="text"
                value={imgUrl5}
                onChange={handleImgUrl5Change}
                className="bg-light text-dark input border"
                placeholder="inserisci l' URL della tua foto"
              />
            </Form.Group>
          </Row>
          <Row>
            <Col className="offset-9">
              <Button className="send-annuncio mt-5 mb-5 rounded-pill" type="submit">
                MODIFICA ANNUNCIO
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
export default ModificaMyAnnuncio;
