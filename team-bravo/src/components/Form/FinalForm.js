import { Form, Button, FloatingLabel, Check, Row, Col,InputGroup,FormControl} from "react-bootstrap";
import React, { useContext, useState } from "react";
import { FieldContext } from "../Context/FieldContext";

export default function FinalForm() {
  const { finalElems } = useContext(FieldContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(finalElems);
  };
  const handleClick = () => {
    console.log(finalElems);
  };
  return (
    <div>
      // Start of form tag
      <Form onSubmit={handleSubmit}>
        {finalElems.map((item) => {
          return (
            <>
              {(() => {
                switch (item.title) {
                  case "Input":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label={item.placeholder}
                          className="mb-3 m-10"
                        >
                          <Form.Control onClick={handleClick} type="text" size="lg"/>
                        </FloatingLabel>
                      </>
                    );
                  case "Textarea":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label={item.label}
                        >
                          <Form.Control as="textarea" />
                        </FloatingLabel>
                      </>
                    );
                  // To be changed to SelectMenuOptions
                  case "Select Menu":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select One</option>
                          <option value="1">
                            {item.radioButtonOptions[0]}
                          </option>
                          <option value="2">
                            {item.radioButtonOptions[1]}
                          </option>
                          <option value="3">
                            {item.radioButtonOptions[2]}
                          </option>
                        </Form.Select>
                      </>
                    );
                  // To be changed to RadioButtonOptions
                  case "Radio Button":
                    return (
                      <>
                        <fieldset>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label row sm={2}>
                              {item.label}
                            </Form.Label>
                            <Col sm={10}>
                              {item.radioButtonOptions[0] && (
                                <Form.Check
                                  type="radio"
                                  label={item.radioButtonOptions[0]}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios1"
                                />
                              )}
                              {item.radioButtonOptions[1] && (
                                <Form.Check
                                  type="radio"
                                  label={item.radioButtonOptions[1]}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios2"
                                />
                              )}
                              {item.radioButtonOptions[2] && (
                                <Form.Check
                                  type="radio"
                                  label={item.radioButtonOptions[2]}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios3"
                                />
                              )}
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </>
                    );
                  case "Email":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control onClick={handleClick} type="text" />
                        </FloatingLabel>
                      </>
                    );
                  case "Email Confirm":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label="Confirm Email"
                          className="mb-3"
                        >
                          <Form.Control onClick={handleClick} type="text" />
                        </FloatingLabel>
                      </>
                    );
                  case "Password":
                      return(
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label row sm="2">
                            {item.label}
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder={item.placeholder} />
                            </Col>
                        </Form.Group>
                      )
                  case "Password Confirm":
                    return(
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            {item.label}
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder={item.placeholder} />
                            </Col>
                        </Form.Group>
                    )
                  case "Currency": 
                  return(
                    <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" >
                            {item.label}
                        </Form.Label>
                        <InputGroup className="mb-2">
                        {item.currencyOption === "$" ? <InputGroup.Text>$</InputGroup.Text> : <InputGroup.Text>€</InputGroup.Text>}
                        <FormControl id="inlineFormInputGroup" placeholder={item.placeholder} />
                        </InputGroup>
                    </Col>
                  )
                  case "Toggle":
                      return(
                        <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={item.label}
                        />
                      )
                  case "File Upload":
                      return(
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label column >{item.label}</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                      )
                case "Color Picker":
                    return(
                        <>
                        <Form.Label htmlFor="exampleColorInput" as="column" column>{item.label}</Form.Label>
                        
                        <Form.Control
                          type="color"
                          id="exampleColorInput"
                          defaultValue="#563d7c"
                          title="Choose your color"
                        />
                        </>
              )
                }
              })()}
            </>
          );
        })}
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        
      </Form>
      /* //end of Form tag */
    </div>
  );
}
