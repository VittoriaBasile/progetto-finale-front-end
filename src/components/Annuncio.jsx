import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToPreferitiAction, removeFromPreferitiAction } from "../redux/actions";

const Annuncio = ({ annuncio }) => {
  const dispatch = useDispatch();
  const [valutazioneMediaPerAnnuncio, setValutazioneMediaPerAnnuncio] = useState(0);
  const [isPreferito, setIsPreferito] = useState(false);
  const preferiti = useSelector((state) => state.home.preferiti || []);

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

  const handlePreferitoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPreferito) {
      dispatch(removeFromPreferitiAction(annuncio.id));
      setIsPreferito(false);
    } else {
      dispatch(addToPreferitiAction(annuncio));
      setIsPreferito(true);
    }
  };

  useEffect(() => {
    dispatch(getMediaValutazionePerAnnuncioAction(annuncio.nome));
    const isAnnuncioPreferito = preferiti.some((preferito) => preferito.id === annuncio.id);
    setIsPreferito(isAnnuncioPreferito);
  }, [annuncio.nome, dispatch]);

  return (
    <Link className="text-decoration-none text-dark" to={`/annunci/${annuncio.id}`}>
      <Card className="border-0 mt-3 custom-card position-relative">
        <Card.Img variant="top" className="rounded" src={VillaAnna1} />
        <Button onClick={handlePreferitoClick}>
          <svg
            style={
              isPreferito
                ? { fill: "red", stroke: "white", strokeWidth: "3px" }
                : { fill: "white", stroke: "black", strokeWidth: "3px" }
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="preferito position-absolute top-0 end-0 mt-3 me-3 "
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </Button>
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
