import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { aggiungiValutazioneAction } from "../redux/actions";
import Commenti from "./Commenti";
import MyCommento from "./MyCommento";

const CommentArea = ({ annuncio }) => {
  const dispatch = useDispatch();
  const valutazioni = useSelector((state) => state.valutazione);

  const [valutazione, setValutazione] = useState(0);
  const [valutazioneInviata, setValutazioneInviata] = useState(false);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const userValutazione = valutazioni.find((val) => val.userEmail === email && val.annuncioId === annuncio.id);

  useEffect(() => {
    if (userValutazione) {
      setValutazione(userValutazione.punteggio);
    } else {
      setValutazione(0);
    }
  }, [userValutazione]);

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
  const filteredValutazione = valutazioni.find(
    (val) => val.annuncio?.nome === annuncio.nome && val.user?.email === email
  );

  return (
    <>
      <Row>
        <h4>Valutazione</h4>
      </Row>

      {filteredValutazione ? (
        <Row>
          <Col>
            <div className="valutazione-stelle d-flex align-items-center mb-4">
              {Array.from({ length: filteredValutazione.valore }, (_, index) => (
                <span key={index} className="stella-piena"></span>
              ))}
              {Array.from({ length: 5 - filteredValutazione.valore }, (_, index) => (
                <span key={index + filteredValutazione.valore} className="stella-vuota"></span>
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
                className={`${valutazione >= 1 || valutazioni?.includes(1) ? "stella-piena" : "stella-vuota"}`}
                onClick={(e) => {
                  if (!valutazioneInviata && !userValutazione) {
                    sendValutazione(e, 1);
                  }
                }}
              ></span>
              <span
                className={`${valutazione >= 2 || valutazioni?.includes(2) ? "stella-piena" : "stella-vuota"}`}
                onClick={(e) => {
                  if (!valutazioneInviata && !userValutazione) {
                    sendValutazione(e, 2);
                  }
                }}
              ></span>
              <span
                className={`${valutazione >= 3 || valutazioni?.includes(3) ? "stella-piena" : "stella-vuota"}`}
                onClick={(e) => {
                  if (!valutazioneInviata && !userValutazione) {
                    sendValutazione(e, 3);
                  }
                }}
              ></span>
              <span
                className={`${valutazione >= 4 || valutazioni?.includes(4) ? "stella-piena" : "stella-vuota"}`}
                onClick={(e) => {
                  if (!valutazioneInviata && !userValutazione) {
                    sendValutazione(e, 4);
                  }
                }}
              ></span>
              <span
                className={`${valutazione >= 5 || valutazioni?.includes(5) ? "stella-piena" : "stella-vuota"}`}
                onClick={(e) => {
                  if (!valutazioneInviata && !userValutazione) {
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
      <Row>
        <Commenti annuncio={annuncio} />
      </Row>
    </>
  );
};

export default CommentArea;
