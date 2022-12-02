import './App.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Popup = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for visiting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Trigger Warning: This website contains references to sexual assault and statistics related to such information.<br/>
            If you are a victim of sexual assault and a MD college student, please visit our "Report" page and fill out a questionaire.<br/>
            Note: All information entered into this website is anonymous. Reports made on this website are for statistical purposes only, and will not be reported to any authorities or officials.<br/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;