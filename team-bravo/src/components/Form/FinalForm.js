import { Form, Button, FloatingLabel, Check, Row, Col,InputGroup,FormControl} from "react-bootstrap";
import React, { useContext, useState,useRef,useEffect } from "react";
import { FieldContext } from "../Context/FieldContext";
import '../Form/FinalForm.css';
import Confetti from 'react-confetti'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

export default function FinalForm() {
  const {createSubmission } = useContext(FieldContext);
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [showConfirm,setShowConfirm] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);
  const [finalElems, setFinalElems] = useState([])
  const [Title,setTitle] = useState()
  const [Description,setDescription] = useState()
  const [subMessage,setSubmessage] = useState()
  let {id} = useParams();

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks(id)
      setFinalElems(tasksFromServer)
      }
      const fetchForminfo = async () =>{
        let url = `http://localhost:8080/api/v1/forms/`
        const res = await fetch(url)
         const data = await res.json()
         //setTitle(data.name)
         console.log(data)
         for(let i = 0; i< data.length;i++){
             if(data[i].id == id){
               setTitle(data[i].name)
               setDescription(data[i].description)
               setSubmessage(data[i].message)
             }
         }
    }
    fetchForminfo()
      getTasks()
  }, [])
  const fetchTasks = async () => {
    console.log(id)
    let url = `http://localhost:8080/api/v1/forms/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
}
const fetchFormInfo = async () => {
  let url = `http://localhost:8080/api/v1/forms/`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  return data
}
  const onSubmit = (data) => 
  {
    createSubmission(data,id);
    setShowConfirm(!showConfirm);
  }
  const clearForm = () => {
    var answer = window.confirm("Are you sure you want to clear ther form?");
    if (answer) {
      //some code
      console.log("yes")
    }
    else {
      //some code
      console.log("no")
    }
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
    <div className="formWrapper" ref={confettiRef}>
      
      {showConfirm ? 
      <div className="form form-subm">
        <h1>Thanks for Your Submission!</h1>
        <p>{subMessage}</p>
        <Confetti
          width={width}
          heigh={height}
          numberOfPieces={80}
          recycle={true}
          />
      </div>
      :
      <>
      <div className="formTitleWrapper">
        <h1 className="formTitle">{Title}</h1>
        <p>{Description}</p>
      </div>
      
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        {finalElems.map((item) => {
          return (
            <>
              {(() => {
                switch (item.title) {
                  case "Address":
                    return(
                      <div className="form-elem">
                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Row>
                  
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                  
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </Form.Select>
                      </Form.Group>
                  
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>
                    </div>
                    )
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
                          <Form.Control type="text" 
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
                          <Form.Control type="text" />
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
                        {/* <Form.label className="elem-label" column >{item.label}</Form.label> */}
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

            <button className="clear-button" type="submit" onClick={clearForm}>
              Clear Form
            </button>
        </div>
      </Form>
      {/* end of Form tag */}
      <footer className="footer">
        <p>TeamBravo Form Generator</p>
      </footer>
      </>
      }
    </div>
  );
}
