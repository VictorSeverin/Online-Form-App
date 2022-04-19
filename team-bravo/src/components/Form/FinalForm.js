import { Form, Button,FloatingLabel} from 'react-bootstrap'
import React, { useContext } from 'react'
import { FieldContext } from '../Context/FieldContext'

export default function FinalForm({data}) {
    const {finalElems} = useContext(FieldContext)
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    const handleClick = () =>{
        console.log(finalElems)
    }
  return (
    <div>
        <Form>
            {finalElems.map((item) => {
                return (
                    <>
                        {(() => {
                            switch(item.title){
                                case 'Input':
                                    return(
                                        <>
                                        <FloatingLabel
                                            key={item.title}
                                            controlId="floatingInput"
                                            label={item.label}
                                            className="mb-3">
                                            <Form.Control onClick={handleClick} type="text" placeholder={item.placeholder} />
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
                        })()}
                    </>
                )
                })
             } 
             {/* //end of mapping */}
        </Form>
    </div>
  )
}
