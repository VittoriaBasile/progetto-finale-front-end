import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { aggiungiValutazioneAction, getValutazionePerAnnuncioAndUserAction } from "../redux/actions";
import Commenti from "./Commenti";
import MyCommento from "./MyCommento";

const CommentArea = ({ annuncio }) => {
  const dispatch = useDispatch();
  const valutazionePerAnnuncioAndUser = useSelector((state) => state.valutazione);
  const [valutazione, setValutazione] = useState(0);
  const [valutazioneInviata, setValutazioneInviata] = useState(false);

  const email = localStorage.getItem("email");
  const user = useSelector((state) => state.user);

  const prenotazioniPerUser = user.prenotazioni || [];

  const prenotazioniConAnnuncioCorrispondente =
    prenotazioniPerUser.length > 0
      ? prenotazioniPerUser.filter((prenotazione) => {
          const isAnnuncioMatch = prenotazione.annuncio.id === annuncio.id;
          const isDataFineBeforeToday = new Date(prenotazione.dataFine) < new Date();
          return isAnnuncioMatch && isDataFineBeforeToday;
        })
      : [];

  useEffect(() => {
    dispatch(getValutazionePerAnnuncioAndUserAction(annuncio.nome, email));
  }, [annuncio.nome, dispatch]);

  const sendValutazione = (e, numero) => {
    e.preventDefault();

    if (valutazioneInviata) {
      alert("La valutazione è già stata inviata per questo annuncio.");
      return;
    }

    let payload = {
      valore: numero,
      userEmail: email,
      nomeAnnuncio: annuncio.nome,
    };

    setValutazione(numero);
    dispatch(aggiungiValutazioneAction(payload))
      .then(() => {
        setValutazioneInviata(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      {prenotazioniConAnnuncioCorrispondente.length === 0 ? (
        <Row />
      ) : (
        <>
          <Row>
            <h4>Valutazione</h4>
          </Row>

          {valutazionePerAnnuncioAndUser ? (
            <Row>
              <Col>
                <div className="valutazione-stelle d-flex align-items-center mb-4">
                  {Array.from({ length: valutazionePerAnnuncioAndUser.valore }, (_, index) => (
                    <span key={index} className="stella-piena"></span>
                  ))}
                  {Array.from({ length: 5 - valutazionePerAnnuncioAndUser.valore }, (_, index) => (
                    <span key={index + valutazionePerAnnuncioAndUser.valore} className="stella-vuota"></span>
                  ))}
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="valutazione-stelle d-flex align-items-center mb-4">
                  <span className="fs-4 me-3 fw-light">Invia la tua valutazione:</span>

                  <span
                    className={`${valutazione >= 1 ? "stella-piena" : "stella-vuota"}`}
                    onClick={(e) => {
                      if (!valutazionePerAnnuncioAndUser) {
                        sendValutazione(e, 1);
                      }
                    }}
                  ></span>
                  <span
                    className={`${valutazione >= 2 ? "stella-piena" : "stella-vuota"}`}
                    onClick={(e) => {
                      if (!valutazionePerAnnuncioAndUser) {
                        sendValutazione(e, 2);
                      }
                    }}
                  ></span>
                  <span
                    className={`${valutazione >= 3 ? "stella-piena" : "stella-vuota"}`}
                    onClick={(e) => {
                      if (!valutazionePerAnnuncioAndUser) {
                        sendValutazione(e, 3);
                      }
                    }}
                  ></span>
                  <span
                    className={`${valutazione >= 4 ? "stella-piena" : "stella-vuota"}`}
                    onClick={(e) => {
                      if (!valutazionePerAnnuncioAndUser) {
                        sendValutazione(e, 4);
                      }
                    }}
                  ></span>
                  <span
                    className={`${valutazione >= 5 ? "stella-piena" : "stella-vuota"}`}
                    onClick={(e) => {
                      if (!valutazionePerAnnuncioAndUser) {
                        sendValutazione(e, 5);
                      }
                    }}
                  ></span>
                </div>
              </Col>
            </Row>
          )}

          <Row>
            <MyCommento annuncio={annuncio} />
          </Row>
        </>
      )}

      <Row>
        <Row>
          <h4>Commenti</h4>
        </Row>
        <Commenti annuncio={annuncio} />
      </Row>
    </>
  );
};

export default CommentArea;
