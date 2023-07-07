import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDettagioAction } from "../redux/actions";
import VillaAnna1 from "../assets/VillaAnna/VillaAnna1.jpg";
import VillaAnna2 from "../assets/VillaAnna/VillaAnna2.jpg";
import VillaAnna3 from "../assets/VillaAnna/VillaAnna3.jpg";
import VillaAnna4 from "../assets/VillaAnna/VillaAnna4.jpg";
import VillaAnna5 from "../assets/VillaAnna/VillaAnna5.jpg";
import VillaAnna6 from "../assets/VillaAnna/VillaAnna6.jpg";
import VillaAnna7 from "../assets/VillaAnna/VillaAnna7.jpg";
import VillaAnna8 from "../assets/VillaAnna/VillaAnna8.jpg";
import VillaAnna9 from "../assets/VillaAnna/VillaAnna9.jpg";

const AnnuncioDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const url = `http://localhost:3001/annunci/${params.id}`;
    dispatch(getDettagioAction(url));
  }, [params.id]);

  const annuncio = useSelector((state) => state.home.annuncio);

  const formatNomeAnnuncio = (nome) => {
    return nome.replaceAll("-", " ");
  };
  return (
    <>
      {annuncio != null && (
        <>
          <Container fluid>
            <Row className="my-2">
              <Col>
                <h1>{formatNomeAnnuncio(annuncio.nome)}</h1>
              </Col>
            </Row>

            <Row>
              <Col lg={6} className="sm-w-100 lg-w-50">
                <Card className="prima-card-img-dettaglio h-100">
                  <Card.Img variant="top" src={VillaAnna1} className="rounded h-100" />
                </Card>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2  row-gap-3">
                  <Card className="card-img-dettaglio">
                    <Card.Img variant="top" src={VillaAnna3} className="rounded img-dettaglio" />
                  </Card>
                  <Card className="card-img-dettaglio">
                    <Card.Img variant="top" src={VillaAnna3} className="rounded img-dettaglio" />
                  </Card>
                  <Card className="card-img-dettaglio">
                    <Card.Img variant="top" src={VillaAnna5} className="rounded img-dettaglio" />
                  </Card>
                  <Card className="card-img-dettaglio">
                    <Card.Img variant="top" src={VillaAnna5} className="rounded img-dettaglio" />
                  </Card>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default AnnuncioDetails;
