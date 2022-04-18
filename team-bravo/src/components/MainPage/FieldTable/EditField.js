import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { FieldContext } from "../../Context/FieldContext";

function EditField({element, index}) {

    const {editElem} = useContext(FieldContext)

    const [title, setTitle] = useState(element.title)
    const [label, setLabel] = useState(element.label)
    const [placeholder, setPlaceholder] = useState(element.placeholder)
    const [required, setRequired] = useState(element.required)

    const updatedField = {title, label, placeholder, required}

    const onSubmit = (e) => {
        e.preventDefault()
        editElem(index, updatedField)
        console.log("submitted" + index)
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Label</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Label" 
                    value={label}
                    onChange={(e) => setLabel(e.target.value)} />
            </Form.Group>
        </Form>
    )
}

export default EditField