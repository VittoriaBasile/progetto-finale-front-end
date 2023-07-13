import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useEffect, useState } from "react";
import { getValutazioniPerAnnuncioAction } from "../redux/actions";

const Annuncio = ({ annuncio }) => {
  const dispatch = useDispatch();
  const [valutazioni, setValutazioni] = useState([]);

  const formattedTipologia = annuncio.tipologia.replace(/_/g, " ");
  const formattedNome = annuncio.nome.replace(/-/g, " ");

  useEffect(() => {
    const fetchValutazioni = async () => {
      try {
        const response = await dispatch(getValutazioniPerAnnuncioAction(annuncio.nome));
        const valutazioniData = await response.json();
        setValutazioni(valutazioniData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchValutazioni();
  }, [annuncio.nome, dispatch]);

  const filteredValutazioni = valutazioni.filter((valutazione) => valutazione.annuncio?.nome === annuncio.nome);
  const mediaValutazioni =
    filteredValutazioni.length > 0
      ? filteredValutazioni.reduce((total, valutazione) => total + valutazione.valore, 0) / filteredValutazioni.length
      : 0;

  return (
    <Link className="text-decoration-none text-dark" to={`/annunci/${annuncio.id}`}>
      <Card className="border-0 mt-3 custom-card">
        <Card.Img variant="top" className="rounded" src={VillaAnna1} />
        <Card.Body className="px-2 py-4">
          <Card.Title className="fs-4">
            {formattedNome}, {annuncio.indirizzo.stato}
          </Card.Title>
          <Card.Text className="fs-6">Host {annuncio.user.name}</Card.Text>
          <Card.Text className="stella-piena-card">{mediaValutazioni}</Card.Text>
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
