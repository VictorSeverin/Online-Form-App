import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FieldContext } from "../../Context/FieldContext";

function EditField({element, index}) {

    const {editElem} = useContext(FieldContext)

    const [title, setTitle] = useState(element.title)
    const [label, setLabel] = useState(element.label)
    const [placeholder, setPlaceholder] = useState(element.placeholder)
    const [required, setRequired] = useState(element.required)

    const [showPlaceholder, setShowPlaceholder] = useState(() => {
        switch (title) {
            case 'Input':
                return true
                break
            case 'Textarea':
                return true
                break
            case 'Check Box':
                return false
                break
            case 'Radio Button':
                return false
                break
            case 'Select Menu':
                return false
                break
            case 'Email':
                return true
                break
            case 'Email Confirm':
                return true
                break
            case 'Number':
                return true
                break
            case 'Password':
                return true
                break
            case 'Password Confirm':
                return true
                break
            case 'Currency':
                return true
                break
            case 'Toggle':
                return false
                break
            default:
                break
        }
    })

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
                    placeholder="Enter label" 
                    value={label}
                    onChange={(e) => setLabel(e.target.value)} />
            </Form.Group>
            {showPlaceholder && <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Placeholder</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter placeholder"
                        value={placeholder}
                        onChange={(e) => setPlaceholder(e.target.value)} />
                </Form.Group>}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    type="checkbox" 
                    label="Required" 
                    checked={required}
                    onChange={(e) => setRequired(!required)} />
            </Form.Group>
            
            <Button type="submit" variant="primary">Save Changes</Button>
        </Form>
    )
}

export default EditField