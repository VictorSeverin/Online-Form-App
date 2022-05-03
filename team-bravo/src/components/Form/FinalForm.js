import { Form, Button, FloatingLabel, Check, Row, Col,InputGroup,FormControl} from "react-bootstrap";
import React, { useContext, useState } from "react";
import { FieldContext } from "../Context/FieldContext";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import '../Form/FinalForm.css';
export default function FinalForm() {
  const { finalElems,title,description } = useContext(FieldContext);
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
    <div className="formWrapper">
      <div className="formTitleWrapper">
        <h1 className="formTitle">{title}</h1>
        <p>{description}</p>
      </div>
      
      {/* Start of form tag */}
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        {finalElems.map((item) => {
          return (
            <>
              {(() => {
                switch (item.title) {
                  case "Input":
                    return (
                      <div className="form-elem">
                        <Form.Label className="elem-label">{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label={item.placeholder}
                          className="mb-3 m-10"
                        >
                          <Form.Control type="text" size="lg"
                          {...register(`${item.label}`, { required: item.required, maxLength: 20 })}
                          />
                          {errors[item.label] && <span style={{color:"green"}}>This field is required</span>}
                        </FloatingLabel>
                      </div>
                    );
                  case "Textarea":
                    return (
                      <div className="form-elem">
                        <Form.Label className="elem-label">{item.label}</Form.Label>
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label={item.label}
                        >
                          <Form.Control as="textarea" size="lg"
                          {...register(`${item.placeholder}`, { required: item.required})}
                          />
                          {errors[`${item.label}`] && <span style={{color:"red"}}>This field is required</span>}
                        </FloatingLabel>
                      </div>
                    );
                  // To be changed to SelectMenuOptions
                  //Label must be required
                  case "Select Menu":
                    return (
                      <div className="form-elem">
                        <Form.Label className="elem-label">{item.label}</Form.Label>
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
                        {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                        </Form.Select>
                      </div>
                    );
                  // To be changed to RadioButtonOptions
                  case "Radio Button":
                    return (
                      <div className="form-elem">
                        <fieldset>
                          <Form.Group as={Row} className="mb-3" {...register(`${item.label}`, { required: item.required})}>
                            <Form.Label className="elem-label" row sm={2}>
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
                                  {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    );
                  case "Email":
                    return (
                      <div className="form-elem">
                        <Form.Label className="elem-label">{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label="Email"
                          className="mb-3"
                        >
                          <Form.Control onClick={handleClick} type="text" 
                          {...register(`${item.label}`, { required: item.required,validate: handleEmailValidation})}/>
                          {errors[item.label] && <span style={{color:"red"}}>Please enter a valid email</span>}
                        </FloatingLabel>
                      </div>
                    );
                  case "Email Confirm":
                    return (
                      <div className="form-elem">
                        <Form.Label className="elem-label">{item.label}</Form.Label>
                        <FloatingLabel
                          key={item.title}
                          controlId="floatingInput"
                          label="Confirm Email"
                          className="mb-3"
                        >
                          <Form.Control onClick={handleClick} type="text" />
                        </FloatingLabel>
                      </div>
                    );
                  case "Password":
                      return(
                        <div className="form-elem">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label className="elem-label" row sm="2">
                            {item.label}
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder={item.placeholder} 
                            {...register(`${item.label}`, { required: item.required})}
                            />
                            {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                            </Col>
                        </Form.Group>
                        </div>
                      )
                  case "Password Confirm":
                    return(
                      <div className="form-elem">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label className="elem-label" column sm="2">
                            {item.label}
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder={item.placeholder} />
                            </Col>
                        </Form.Group>
                        </div>
                    )
                  case "Currency": 
                  return(
                    <div className="form-elem">
                    <Col xs="auto">
                        <Form.Label className="elem-label" htmlFor="inlineFormInputGroup" >
                            {item.label}
                        </Form.Label>
                        <InputGroup className="mb-2">
                        {item.currencyOption === "$" ? <InputGroup.Text>$</InputGroup.Text> : <InputGroup.Text>€</InputGroup.Text>}
                        <FormControl id="inlineFormInputGroup" placeholder={item.placeholder}
                        {...register(`${item.label}`, { required: item.required})}
                        />
                        {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                        </InputGroup>
                    </Col>
                    </div>
                  )
                  case "Toggle":
                      return(
                        <div className="form-elem">
                        <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label={item.label}
                        {...register(`${item.label}`, { required: false})}
                        />
                        </div>
                      )
                  case "File Upload":
                      return(
                        <div className="form-elem">
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className="elem-label" column >{item.label}</Form.Label>
                        <Form.Control type="file" 
                        {...register(`${item.label}`, { required: item.required})}
                        />
                      {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                      </Form.Group>
                      </div>
                      )
                case "Color Picker":
                    return(
                      <div className="form-elem">
                        <Form.Label className="elem-label" htmlFor="exampleColorInput" as="column" column>{item.label}</Form.Label>
                        
                        <Form.Control
                          type="color"
                          id="exampleColorInput"
                          defaultValue="#563d7c"
                          title="Choose your color"
                          {...register(`${item.label}`, { required: item.required})}
                        />
                        {errors[item.label] && <span style={{color:"red"}}>This item is required</span>}
                        </div>
              )
                }
              })()}
            </>
          );
        })}
        <div className="submit">
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <button className="clear-button" type="submit" onClick={handleSubmit}>
            Clear Form
          </button>
        </div>
      </Form>
      {/* end of Form tag */}
      <div className="footer">
        <p>TeamBravo Form Generator</p>
      </div>
    </div>
  );
}
