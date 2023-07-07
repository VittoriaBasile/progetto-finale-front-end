import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
const Annuncio = ({ annuncio }) => {
  const formattedTipologia = annuncio.tipologia.replace(/_/g, " ");
  const formattedNome = annuncio.nome.replace(/-/g, " ");

  return (
    <Link className="text-decoration-none text-dark" to={`/annunci/${annuncio.id}`}>
      <Card className="border-0 mt-3 custom-card">
        <Card.Img variant="top" className="rounded" src={VillaAnna1} />
        <Card.Body className="px-2 py-4">
          <Card.Title className="fs-4">
            {formattedNome}, {annuncio.indirizzo.stato}
          </Card.Title>
          <Card.Text className="fs-6">Host {annuncio.user.name}</Card.Text>
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
