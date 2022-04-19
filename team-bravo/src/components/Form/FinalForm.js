import React from 'react'
import Input from './FormComps/input'
import { Form, Button,FloatingLabel} from 'react-bootstrap'

export default function FinalForm({data}) {
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
  return (
    <div>
        <Form>
            {data.map((item) => {
                return (
                    <>
                        {
                            (() => {
                                switch(item.title){
                                    case 'Input':
                                        return(
                                            <>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label={item.label}
                                                className="mb-3">
                                                <Form.Control type="text" placeholder={item.placeholder} />
                                            </FloatingLabel>
                                            </>
                                            
                                        )
                                    case 'Textarea':
                                        return(
                                            <FloatingLabel controlId="floatingTextarea2" label={item.label}>
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder={item.placeholder}
                                                />
                                            </FloatingLabel>
                   
                                        )
                                }
                            })()
                        }
                    </>
                )
                })
             } 
             {/* //end of mapping */}
        </Form>
        

    </div>
  )
}
