import React from 'react'

import {
  Modal,
  ModalDialog,
  ModalFooter,
  ModalHeader
} from "react-bootstrap";

function Modal({show, title, text, click}) {
  return (
    show ? (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={click}>Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
    ) : (
      null
    )
  )
}

export default Modal