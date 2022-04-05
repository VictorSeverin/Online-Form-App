import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Bootstraptable from './Bootstraptable';
import "./Bootstraptable.css"

export default function (data) {
  const [id,setId] = useState(0);
  const handleClick = () =>{
    console.log(data.data)
  }
  return (
    <>
        <td onClick={handleClick}>{data.data.title}</td>
        <td>{data.data.label}</td>
        <td>{data.data.placeholder}</td>
        <td>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" checked={data.data.required} />
        </Form.Group>
        </td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
    </>
  )
}
