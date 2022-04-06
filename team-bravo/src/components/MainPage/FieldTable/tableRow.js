import React from 'react'
import { Form } from 'react-bootstrap'
import "./Bootstraptable.css"

function TableRow({data}) {

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
            <Form.Check type="checkbox" checked={elem.required} readOnly/>
          </Form.Group>
      </td>
      <td>
        <button className='btn btn-primary'>Edit</button>
      </td>

    </tr>
  )
}

export default TableRow