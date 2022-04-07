import React from 'react'
import { Form } from 'react-bootstrap'
import "./Bootstraptable.css"
import {useState} from "react"
import * as MdIcons from "react-icons/md";

function TableRow({data}) {
  const [checked, setChecked] = useState(data.required);
  const handleClick = () =>{
    console.log(data)
  }

  return data.map((elem, index) =>
    <tr key={index}>
      <td onClick={handleClick}>{elem.title}</td>
      <td>{elem.label}</td>
      <td>{elem.placeholder}</td>
      <td>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" checked={elem.required} onChange={(e) => setChecked(e.target.checked)}/>
          </Form.Group>
      </td>
      <td>
        <button className='btn btn-primary'>Edit</button>
        <MdIcons.MdDelete className='btn-outline-danger deleteBtn'/>
      </td>

    </tr>
  )
}

export default TableRow