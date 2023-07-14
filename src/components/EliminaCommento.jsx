import { Alert, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { eliminaCommentoAction } from "../redux/actions";
import { useState } from "react";

const EliminaCommento = ({ commento }) => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  return (
    <>
      <Alert variant="danger" className="w-75" onClose={handleAlertClose} dismissible>
        <p>Confermi di voler eliminare il commento?</p>

        <Button variant="danger" onClick={() => dispatch(eliminaCommentoAction(commento))}>
          Conferma
        </Button>
      </Alert>
    </>
  );
};
export default EliminaCommento;
