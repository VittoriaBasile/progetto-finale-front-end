import { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { aggiungiValutazioneAction } from "../redux/actions";

const CommentArea = ({ annuncio }) => {
  const dispatch = useDispatch();
  const valutazioni = useSelector((state) => state.valutazione);
  const [valutazione, setValutazione] = useState(0);
  const [stelleRiempite, setStelleRiempite] = useState(0);
  const [valutazioneInviata, setValutazioneInviata] = useState(false);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let payload = {
    valore: valutazione,
    userEmail: email,
    nomeAnnuncio: annuncio.nome,
  };

  const sendValutazione = async (e, numero) => {
    e.preventDefault();

    if (valutazioneInviata) {
      alert("La valutazione è già stata inviata per questo annuncio.");
      return;
    }

    const updatedValutazione = numero;
    setValutazione(updatedValutazione);

    const urlValutazione = `http://localhost:3001/valutazioni`;
    try {
      const response = await fetch(urlValutazione, {
        method: "POST",
        body: JSON.stringify({
          ...payload,
          valore: updatedValutazione,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(aggiungiValutazioneAction(annuncio.id, valutazione));
        setValutazioneInviata(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h4>Valutazione</h4>

          <div className="valutazione-stelle">
            <span
              className={`${valutazione >= 1 || valutazioni.includes(1) ? "stella-piena" : "stella-vuota"}`}
              onClick={(e) => {
                if (!valutazioneInviata) {
                  setStelleRiempite(1);
                  sendValutazione(e, 1);
                }
              }}
            ></span>
            <span
              className={`${valutazione >= 2 || valutazioni.includes(2) ? "stella-piena" : "stella-vuota"}`}
              onClick={(e) => {
                if (!valutazioneInviata) {
                  setStelleRiempite(2);
                  sendValutazione(e, 2);
                }
              }}
            ></span>
            <span
              className={`${valutazione >= 3 || valutazioni.includes(3) ? "stella-piena" : "stella-vuota"}`}
              onClick={(e) => {
                if (!valutazioneInviata) {
                  setStelleRiempite(3);
                  sendValutazione(e, 3);
                }
              }}
            ></span>
            <span
              className={`${valutazione >= 4 || valutazioni.includes(4) ? "stella-piena" : "stella-vuota"}`}
              onClick={(e) => {
                if (!valutazioneInviata) {
                  setStelleRiempite(4);
                  sendValutazione(e, 4);
                }
              }}
            ></span>
            <span
              className={`${valutazione >= 5 || valutazioni.includes(5) ? "stella-piena" : "stella-vuota"}`}
              onClick={(e) => {
                if (!valutazioneInviata) {
                  setStelleRiempite(5);
                  sendValutazione(e, 5);
                }
              }}
            ></span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CommentArea;
