import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
export default function Input() {
    const [response, setResponse] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(response)
    }
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e) => setResponse(e.target.value)}/>
    </Form.Group>
  )
}
