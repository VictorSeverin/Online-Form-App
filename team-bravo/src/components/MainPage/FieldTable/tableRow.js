import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import {useState} from "react"
import * as MdIcons from "react-icons/md";
import { FieldContext } from '../../Context/FieldContext';
import { Modal, Button } from 'react-bootstrap'


function TableRow() {
  const {finalElems} = useContext(FieldContext)
  const {deleteElem} = useContext(FieldContext)
  const {editElem} = useContext(FieldContext)

  const [checked, setChecked] = useState(finalElems.required);
  const [show, setShow] = useState(false)


  const handleClick = () =>{
    console.log(finalElems)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
    console.log("open")
  }

  const onSubmit = () => {
    console.log("submitted")
  }

  return finalElems.map((elem, index) =>
    <tr key={index}>
      <td onClick={handleClick}>{elem.title}</td>
      <td>{elem.label}</td>
      <td>{elem.placeholder}</td>
      <td>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={elem.required} onChange={(e) => setChecked(e.target.checked)} />
        </Form.Group>
      </td>
      <td>
        <button onClick={handleOpen} className='btn btn-primary'>Edit</button>
        <MdIcons.MdDelete onClick={() => deleteElem(index)} className='btn-outline-danger deleteBtn'/>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button type="submit" variant="primary">Save Changes</Button>
        </Modal.Body> 
      </Modal>
    </tr>
  )
}

export default TableRow