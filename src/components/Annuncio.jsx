import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const Annuncio = ({ annuncio }) => {
  const formattedTipologia = annuncio.tipologia.replace(/_/g, " ");
  const formattedNome = annuncio.nome.replace(/-/g, " ");

  const valutazioniSelector = (state) => state.valutazione;

  const valutazioniAnnuncioSelector = createSelector(
    valutazioniSelector,
    (_, props) => props.annuncio.id,
    (valutazioni, annuncioId) => valutazioni.filter((valutazione) => valutazione.annuncioId === annuncioId)
  );

  const valutazioni = useSelector((state) => valutazioniAnnuncioSelector(state, { annuncio }));

  const mediaValutazioni =
    valutazioni.length > 0
      ? parseFloat((valutazioni.reduce((acc, cur) => acc + cur.punteggio, 0) / valutazioni.length).toFixed(1))
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
