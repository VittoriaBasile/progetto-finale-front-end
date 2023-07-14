import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { modificaCommentoAction } from "../redux/actions";

const ModificaCommento = ({ commento, show, onHide }) => {
  const [newCommentText, setNewCommentText] = useState(commento.bodyCommento);
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const handleSaveCommento = () => {
    let payload = {
      bodyCommento: newCommentText,
      userEmail: email,
      nomeAnnuncio: commento.annuncio.nome,
    };

    dispatch(modificaCommentoAction(commento.id, payload));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica il commento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} className="form-control" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSaveCommento}>
          <svg height="24" width="24" className="send-btn">
            <path
              fill="#352f44"
              d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
            ></path>
          </svg>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModificaCommento;
