import React, {useState} from "react";
import {Modal, Button }from 'react-bootstrap';
import {useNavigate } from "react-router-dom";

export default function InfoModal(props) {
  const navigate = useNavigate();
  const navigateTo = () => {navigate('/form')};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const originalStr = props.summary;
  const newStr = originalStr.replace(/(<([^>]+)>)/ig, '');
  return (
    <>
      <Button className="nextButton mx-2 my-1" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
      <div class="modal-header h4">
       {props.name}
      </div>
        <Modal.Body>{newStr}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={navigateTo}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}