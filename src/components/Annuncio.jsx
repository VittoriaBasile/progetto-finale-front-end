import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMediaValutazionePerAnnuncioAction, getValutazioniPerAnnuncioAction } from "../redux/actions";

const Annuncio = ({ annuncio }) => {
  const dispatch = useDispatch();
  const [valutazioneMediaPerAnnuncio, setValutazioneMediaPerAnnuncio] = useState(0);

  const formattedTipologia = annuncio.tipologia.replace(/_/g, " ");
  const formattedNome = annuncio.nome.replace(/-/g, " ");

  const getMediaValutazionePerAnnuncioAction = () => {
    return async (dispatch) => {
      const urlValutazione = `http://localhost:3001/valutazioni/nome?nome=${annuncio.nome}`;
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(urlValutazione, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const media = await response.json();
          setValutazioneMediaPerAnnuncio(media);
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  useEffect(() => {
    dispatch(getMediaValutazionePerAnnuncioAction(annuncio.nome));
  }, [annuncio.nome, dispatch]);

  return (
    <Link className="text-decoration-none text-dark" to={`/annunci/${annuncio.id}`}>
      <Card className="border-0 mt-3 custom-card">
        <Card.Img variant="top" className="rounded" src={VillaAnna1} />
        <Card.Body className="px-2 py-4">
          <Card.Title className="fs-4">
            {formattedNome}, {annuncio.indirizzo.stato}
          </Card.Title>
          <Card.Text className="fs-6">Host {annuncio.user.name}</Card.Text>
          <Card.Text className="stella-piena-card">{valutazioneMediaPerAnnuncio}</Card.Text>
          <Card.Text className="fs-6 fw-light">{formattedTipologia}</Card.Text>
          <Card.Text>
            <strong>{annuncio.prezzo}</strong>€ a notte{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Annuncio;
