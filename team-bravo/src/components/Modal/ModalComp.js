import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, ModalDialog, ModalFooter } from 'react-bootstrap';
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function ModalComp({handleClose,handleShow,show,finalElems}) {   
  const printItem = () =>{
    console.log(finalElems)
  }
  return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Form Element</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Label</Form.Label>
            <Form.Label onClick={printItem}>Element type:</Form.Label>
            <Form.Control type="email" placeholder="Enter label" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Placeholder</Form.Label>
          <Form.Control type="password" placeholder="Enter placeholder" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Required" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}
