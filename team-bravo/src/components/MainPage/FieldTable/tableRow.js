import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import {useState} from "react"
import * as MdIcons from "react-icons/md";
import { FieldContext } from '../../Context/FieldContext';
import { Modal, Button } from 'react-bootstrap'
import EditField from './EditField'


function TableRow({element, i}) {
  const {deleteElem} = useContext(FieldContext)
  const {editElem} = useContext(FieldContext)

  const [checked, setChecked] = useState(element.required);
  const [show, setShow] = useState(false)

  useEffect(() => {
    handleClose()
  }, [element])

  const handleClick = (i) =>{
    console.log(element)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
    console.log("open")
  }

  return (
    <>
      <td onClick={() => console.log(i)}>{element.title}</td>
      <td>{element.label}</td>
      <td>{element.placeholder}</td>
      <td>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={element.required} onChange={(e) => setChecked(e.target.checked)} />
        </Form.Group>
      </td>
      <td>
        <button onClick={handleOpen} className='btn btn-primary'>Edit</button>
        <MdIcons.MdDelete onClick={() => deleteElem(i)} className='btn-outline-danger deleteBtn'/>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {element.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditField element={element} index={i} />
        </Modal.Body> 
      </Modal>
    </>
  )
}

export default TableRow