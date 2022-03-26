import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, ModalDialog, ModalFooter } from 'react-bootstrap';
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function ModalComp({handleClose,handleShow,show,onAdd,title}) {   
  const [label,setLabel] = useState('')
  const [placeholder,setPlaceholder] = useState('')
  const [required,setRequired] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!label) {
      alert('Please add a label')
      return
    }
    if (!placeholder) {
      alert('Please add a placeholder')
      return
    }

    onAdd({ title, label, placeholder, required })

    setLabel('')
    setPlaceholder('')
    setRequired(false)
  }
  return (
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit = {onSubmit}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Label</Form.Label>
            <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Placeholder</Form.Label>
            <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
          </Form.Group>
        
          <Button type="submit" variant="primary"  >
              Save Changes
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </>
    );
}
