import { Alert, Col, Container, Row } from "react-bootstrap";
import Annuncio from "./Annuncio";
import { useDispatch, useSelector } from "react-redux";

import { getAnnunciAction, getMyAnnunciAction, getUserLoggedAction } from "../redux/actions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const annunci = useSelector((state) => state.home.annunci);
  useEffect(() => {
    dispatch(getUserLoggedAction());
    if (dispatch(getUserLoggedAction())) {
      dispatch(getAnnunciAction("http://localhost:3001/annunci"));
      dispatch(getMyAnnunciAction());
    }
  }, [dispatch]);

  return (
    <Container fluid>
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
        <Alert className="display-6 mt-3 text-center">Loggati o registrati per visualizzare gli annunci!</Alert>
      )}
    </Container>
  );
};
export default Home;
