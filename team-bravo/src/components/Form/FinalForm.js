import { Form, Button, FloatingLabel, Check, Row, Col,InputGroup,FormControl} from "react-bootstrap";
import React, { useContext, useState } from "react";
import { FieldContext } from "../Context/FieldContext";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import '../Form/FinalForm.css';
export default function FinalForm() {
  const { finalElems } = useContext(FieldContext);
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleClick = () => {
    
  };
  const isValidEmail = email =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  const handleEmailValidation = email => {
    const isValid = isValidEmail(email);
    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    return isValid;
  };
  return (
    <div>
      {/* Start of form tag */}
      <Form onSubmit={handleSubmit(onSubmit)}>
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
                          <Form.Control type="text" size="lg"
                          {...register(`${item.placeholder}`, { required: item.required, maxLength: 20 })}
                          />
                          {/* {errors && <span style={{color:"green"}}>This field is required</span>} */}
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
                          <Form.Control as="textarea" size="lg"
                          {...register(`${item.placeholder}`, { required: item.required})}
                          />
                          {/* {errors && <span style={{color:"green"}}>This field is required</span>} */}
                        </FloatingLabel>
                      </>
                    );
                  // To be changed to SelectMenuOptions
                  //Label must be required
                  case "Select Menu":
                    return (
                      <>
                        <Form.Label>{item.label}</Form.Label>
                        <Form.Select aria-label="Default select example" {...register(`${item.label}`, { required: item.required})} >
                          <option>Select One</option>
                          {item.radioButtonOptions[0] && <option value={item.radioButtonOptions[0]}>
                            {item.radioButtonOptions[0]}
                          </option>}
                          {item.radioButtonOptions[1] && <option value={item.radioButtonOptions[1]}>
                            {item.radioButtonOptions[1]}
                          </option>}
                          {item.radioButtonOptions[2] && <option value={item.radioButtonOptions[2]}>
                            {item.radioButtonOptions[2]}
                          </option>}
                        </Form.Select>
                      </>
                    );
                  // To be changed to RadioButtonOptions
                  case "Radio Button":
                    return (
                      <>
                        <fieldset>
                          <Form.Group as={Row} className="mb-3" {...register(`${item.label}`, { required: item.required})}>
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
                                  value={item.radioButtonOptions[0]}
                                  {...register(`${item.label}`, { required: item.required})}
                                />
                              )}
                              {item.radioButtonOptions[1] && (
                                <Form.Check
                                  type="radio"
                                  label={item.radioButtonOptions[1]}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios2"
                                  value={item.radioButtonOptions[1]}
                                  {...register(`${item.label}`, { required: item.required})}
                                />
                              )}
                              {item.radioButtonOptions[2] && (
                                <Form.Check
                                  type="radio"
                                  label={item.radioButtonOptions[2]}
                                  name="formHorizontalRadios"
                                  id="formHorizontalRadios3"
                                  value={item.radioButtonOptions[2]}
                                  {...register(`${item.label}`, { required: item.required})}
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
                          <Form.Control onClick={handleClick} type="text" 
                          {...register(`${item.label}`, { required: item.required,validate: handleEmailValidation})}/>
                          <ErrorMessage errors={errors} name="email" message="This is required" />
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
                            <Form.Control type="password" placeholder={item.placeholder} 
                            {...register(`${item.label}`, { required: item.required})}
                            />
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
                        <FormControl id="inlineFormInputGroup" placeholder={item.placeholder}
                        {...register(`${item.label}`, { required: item.required})}
                        />
                        </InputGroup>
                    </Col>
                  )
                  case "Toggle":
                      return(
                        <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={item.label}
                        {...register(`${item.label}`, { required: false})}
                        />
                      )
                  case "File Upload":
                      return(
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label column >{item.label}</Form.Label>
                        <Form.Control type="file" 
                        {...register(`${item.label}`, { required: item.required})}
                        />
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
                          {...register(`${item.label}`, { required: item.required})}
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
      {/* end of Form tag */}
    </div>
  );
}
