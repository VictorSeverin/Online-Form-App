import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, ModalDialog, ModalFooter, DropdownButton, Dropdown} from 'react-bootstrap';
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function ModalComp({handleClose,handleShow,show,onAdd,title}) {   
  const [label,setLabel] = useState('')
  const [placeholder,setPlaceholder] = useState('')
  const [required,setRequired] = useState(false)
  const [radioButtonOptions,setRadioButtonOptions] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()
    // if (!label) {
    //   alert('Please add a label')
    //   return
    // if (!placeholder) {
    //   alert('Please add a placeholder')
    //   return
    // }

    onAdd({ title, label, placeholder, required ,radioButtonOptions})

    setLabel('')
    setPlaceholder('')
    setRequired(false)
  }
  const handleRadioButton = (option) =>{
    setRadioButtonOptions(...radioButtonOptions,option)
    console.log(radioButtonOptions)
  }
  return (
      <>
      {(() => {
        switch (title){
          case 'Input':
            return(
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit = {onSubmit}> 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Placeholder</Form.Label>
                    <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                  </Form.Group>
                
                  <Button type="submit" variant="primary"  >
                      Save Changes
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
          )
          case 'Textarea':
            return(
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit = {onSubmit}> 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Placeholder</Form.Label>
                    <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                  </Form.Group>
                
                  <Button type="submit" variant="primary"  >
                      Save Changes
                    </Button>
                </Form>
                </Modal.Body>
            </Modal>
        )
        case 'Check Box':
          return(
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add {title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit = {onSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Label</Form.Label>
                  <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                </Form.Group>  
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                  </Form.Group>  
                <Button type="submit" variant="primary"  >
                    Save Changes
                  </Button>
                
              </Form>
              </Modal.Body>
          </Modal>
        ) 
        case 'Radio Button':
          return(
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add {title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit = {onSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Label</Form.Label>
                  <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Options</Form.Label>
                  <Form.Control className='mb-2' type="text" placeholder="Option 1" onChange={(e) => setRadioButtonOptions(...radioButtonOptions,e.target.value)}/>
                  <Form.Control className='mb-2' type="text" placeholder="Option 2" onChange={(e) => setRadioButtonOptions(...radioButtonOptions,e.target.value)}/>
                  <Form.Control className='mb-2' type="text" placeholder="Option 3" onChange={(e) => setRadioButtonOptions(...radioButtonOptions,e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                </Form.Group>
              
                <Button type="submit" variant="primary"  >
                    Save Changes
                  </Button>
              </Form>
              </Modal.Body>
          </Modal>
      )     
      case 'Select Menu':
        return(
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit = {onSubmit}> 
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Label</Form.Label>
                <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Options</Form.Label>
                <Form.Control className='mb-2' type="text" placeholder="Option 1" onChange={(e) => handleRadioButton(e.target.value)}/>
                <Form.Control className='mb-2' type="text" placeholder="Option 2" onChange={(e) => handleRadioButton(e.target.value)}/>
                <Form.Control className='mb-2' type="text" placeholder="Option 3" onChange={(e) => handleRadioButton(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
              </Form.Group>
            
              <Button type="submit" variant="primary"  >
                  Save Changes
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
    )    
    case 'Email':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>
          
            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )
    case 'Email Confirm':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>
          
            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )
    case 'Number':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>
          
            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )
    case 'Currency':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <DropdownButton className='pd-10' id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item >Dollars</Dropdown.Item>
              <Dropdown.Item >Euros</Dropdown.Item>
              <Dropdown.Item >Pesos</Dropdown.Item>
            </DropdownButton>
          <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>

            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )
    case 'Password':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>
          
            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )    
    case 'Password Confirm':
      return(
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add {title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {onSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control type="text" placeholder="Enter placeholder" onChange={(e) => setPlaceholder(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
            </Form.Group>
          
            <Button type="submit" variant="primary"  >
                Save Changes
              </Button>
          </Form>
          </Modal.Body>
      </Modal>
    )

        case 'Password':
          return(
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add {title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form onSubmit = {onSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Label</Form.Label>
                  <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                  </Form.Group>    
                <Button type="submit" variant="primary"  >
                    Save Changes
                  </Button>
              </Form>
              </Modal.Body>
          </Modal>
          )
          case 'Toggle':
            return(
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit = {onSubmit}> 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="text" placeholder="Enter label" onChange={(e) => setLabel(e.target.value)}/>
                  </Form.Group>  
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Required" onChange={(e) => setRequired(e.currentTarget.checked)} />
                    </Form.Group>  
                  <Button type="submit" variant="primary"  >
                      Save Changes
                    </Button>
                  
                </Form>
                </Modal.Body>
            </Modal>
          ) 
        }
      }
      )()} 
    </>
    );
}
