import { Alert, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { eliminaCommentoAction } from "../redux/actions";
import { useState } from "react";

const EliminaCommento = ({ commento, onHide }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
    onHide();
  };
  return (
    <>
      <Alert variant="danger" className="" onClose={handleAlertClose} dismissible>
        <p>Confermi di voler eliminare il commento?</p>
        <Button variant="danger" onClick={() => dispatch(eliminaCommentoAction(commento))}>
          Conferma
        </Button>
      </Alert>
    </>
  );
};
export default EliminaCommento;
