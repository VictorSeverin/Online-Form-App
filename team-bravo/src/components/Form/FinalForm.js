import { Form, Button,FloatingLabel,Check} from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { FieldContext } from '../Context/FieldContext'

export default function FinalForm() {
    const {finalElems} = useContext(FieldContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }
    const handleClick = () =>{
        console.log(finalElems)
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            {finalElems.map((item) => {
                return (
                    <>
                        {(() => {
                            switch(item.title){
                                case 'Input':
                                    return(
                                        <>
                                        <Form.Label>{item.label}</Form.Label>
                                        <FloatingLabel
                                            key={item.title}
                                            controlId="floatingInput"
                                            label={item.placeholder}
                                            className="mb-3 m-10">
                                            <Form.Control onClick={handleClick} type="text" />
                                        </FloatingLabel>
                                        </>
                                    )
                                case 'Textarea':
                                    return(
                                        <>
                                            <Form.Label>{item.label}</Form.Label>
                                            <FloatingLabel controlId="floatingTextarea2" label={item.label}>
                                                <Form.Control
                                                    as="textarea"
                                                />
                                            </FloatingLabel>
                                        </>
                                    )
                                    // To be changed to SelectMenuOptions
                                case "Select Menu":
                                    return(
                                        <>
                                        <Form.Label>{item.label}</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select One</option>
                                            <option value="1">{item.radioButtonOptions[0]}</option>
                                            <option value="2">{item.radioButtonOptions[1]}</option>
                                            <option value="3">{item.radioButtonOptions[2]}</option>
                                        </Form.Select>
                                        </>
                                    )
                                    // To be changed to RadioButtonOptions
                                case "Radio Button":
                                    return(
                                        <div key="default-radio" className="mb-3">
                                            <Form.Label>{item.label}</Form.Label>
                                            <Form.Check 
                                            type="radio"
                                            id="default radio"
                                            label={item.radioButtonOptions[0]}
                                            />
                                            {item.radioButtonOptions[1] && <Form.Check 
                                            type="radio"
                                            id="default radio"
                                            label={item.radioButtonOptions[1]}
                                            />}
                                            {item.radioButtonOptions[2] && <Form.Check 
                                            type="radio"
                                            id="default radio"
                                            label={item.radioButtonOptions[2]}
                                            />}
                                      </div>
                                    )
                                case "Email":
                                    return(
                                        <>
                                        <Form.Label>{item.label}</Form.Label>
                                        <FloatingLabel
                                            key={item.title}
                                            controlId="floatingInput"
                                            label="Email"
                                            className="mb-3">
                                            <Form.Control onClick={handleClick} type="text" />
                                        </FloatingLabel>
                                        </> 
                                    )  
                            }
                        })()}
                    </>
                )
                })
             } 
             <Button type="submit" variant="primary"  >
                      Submit
            </Button>
             {/* //end of mapping */}
        </Form>
    </div>
  )
}
