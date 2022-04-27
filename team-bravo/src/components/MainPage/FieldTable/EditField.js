import React, { useContext, useState } from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { FieldContext } from "../../Context/FieldContext";

function EditField({element, index}) {

    const {editElem} = useContext(FieldContext)

    const [title, setTitle] = useState(element.title)
    const [label, setLabel] = useState(element.label)
    const [placeholder, setPlaceholder] = useState(element.placeholder)
    const [required, setRequired] = useState(element.required)
    const [radioButtonOptions, setRadioButtonOptions] = useState(element.radioButtonOptions)
    const [currencyOption, setCurrencyOption] = useState(element.currencyOption)

    const [showPlaceholder, setShowPlaceholder] = useState(() => {
        switch (title) {
            case 'Check Box':
            case 'Radio Button':
            case 'Select Menu':
            case 'Toggle':
            case 'File Upload':
            case 'Color Picker':
                return false
            default:
                return true
        }
    })
    
    const [showRadioButtons, setShowRadioButtonOptions] = useState(() => {
        switch (title) {
            case 'Radio Button':
            case 'Select Menu':
            case 'Check Box':
                return true
            default:
                return false
        }
    })

    const [showCurrencyOptions, setShowCurrencyOptions] = useState(() => {
        switch (title) {
            case 'Currency':
                return true
            default:
                return false
        }
    })

    const updatedField = {title, label, placeholder, required, radioButtonOptions, currencyOption}

    const handleRadioButton = (option, i) =>{
        let newArr = [...radioButtonOptions]
        newArr[i] = option
        setRadioButtonOptions(newArr)
      }

    const onSubmit = (e) => {
        e.preventDefault()
        editElem(index, updatedField)
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
            {showRadioButtons && <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Options</Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Option 1" value={radioButtonOptions[0]} onChange={(e) => handleRadioButton(e.target.value, 0)} />
                <Form.Control className="mb-2" type="text" placeholder="Option 2" value={radioButtonOptions[1]} onChange={(e) => handleRadioButton(e.target.value, 1)}/>
                <Form.Control className="mb-2" type="text" placeholder="Option 3" value={radioButtonOptions[2]} onChange={(e) => handleRadioButton(e.target.value, 2)}/>
            </Form.Group>}
            {showCurrencyOptions && <DropdownButton className="mb-10" id="dropdown-basic-button" title="Currency Type" style={{padding: '15px 0'}}>
                <Dropdown.Item onClick={() => setCurrencyOption("$")}>Dollars</Dropdown.Item>
                <Dropdown.Item onClick={() => setCurrencyOption("€")}>Euros</Dropdown.Item>
            </DropdownButton>}
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