import { Alert, Col, Container, Row, Toast } from "react-bootstrap";
import Annuncio from "./Annuncio";
import { useDispatch, useSelector } from "react-redux";

import { getAnnunciAction, getUserLoggedAction } from "../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLoggedAction());
    dispatch(getAnnunciAction("http://localhost:3001/annunci"));
  }, []);

  const annunci = useSelector((state) => state.home.annunci);
  const user = useSelector((state) => state.home.user);
  return (
    <Container>
      {user !== null ? (
        <>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            <>
              {annunci.map((annuncio) => (
                <Col key={annuncio.id}>
                  <Annuncio annuncio={annuncio} />
                </Col>
              ))}
            </>
          </Row>
        </>
      ) : (
        <Alert className="display-3 text-center">Loggati o registrati per visualizzare i film!</Alert>
      )}
    </Container>
  );
};
export default Home;
