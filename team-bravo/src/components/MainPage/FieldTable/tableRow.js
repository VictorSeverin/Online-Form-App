import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'
import {useState} from "react"
import * as MdIcons from "react-icons/md";
import { FieldContext } from '../../Context/FieldContext';


function TableRow() {
  const {finalElems} = useContext(FieldContext)
  const {deleteElem} = useContext(FieldContext)

  const [checked, setChecked] = useState(finalElems.required);
  
  const handleClick = () =>{
    console.log(finalElems)
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
        <button className='btn btn-primary'>Edit</button>
        <MdIcons.MdDelete onClick={() => deleteElem(index)} className='btn-outline-danger deleteBtn'/>
      </td>

    </tr>
  )
}

export default TableRow