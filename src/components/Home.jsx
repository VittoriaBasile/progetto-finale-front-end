import { Alert, Col, Container, Row } from "react-bootstrap";
import Annuncio from "./Annuncio";
import { useDispatch, useSelector } from "react-redux";

import { getAnnunciAction, getAnnunciByFilterAction, getMyAnnunciAction, getUserLoggedAction } from "../redux/actions";
import { useEffect } from "react";

const Home = ({ searchByFilter }) => {
  console.log(searchByFilter);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const annunci = useSelector((state) => state.home.annunci);
  const annunciPerFiltro = useSelector((state) => state.annunciPerFiltro);
  console.log(annunciPerFiltro);
  useEffect(() => {
    dispatch(getUserLoggedAction());
    if (dispatch(getUserLoggedAction())) {
      if (searchByFilter !== "") {
        dispatch(getAnnunciByFilterAction(searchByFilter));
      } else {
        dispatch(getAnnunciAction("http://localhost:3001/annunci"));
        dispatch(getMyAnnunciAction());
      }
    }
  }, [dispatch, searchByFilter]);
  const allAnnunci = searchByFilter !== "" ? annunciPerFiltro : annunci;

  return (
    <Container fluid>
      {user !== null ? (
        <>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 row-gap-3">
            {allAnnunci.map((annuncio) => (
              <Col key={annuncio.id}>
                <Annuncio annuncio={annuncio} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Alert className="display-6 mt-3 text-center">Loggati o registrati per visualizzare gli annunci!</Alert>
      )}
    </Container>
  );
};
export default Home;
