import React from "react";
import FieldTable from "./FieldTable/FieldTable"
import * as IoIcons from "react-icons/io";
import {useState} from "react"
import { Form } from 'react-bootstrap'
function MainPage({data}) {
    const [elems,setElems] = useState([data])
    const [formTitle, setFormTitle] = useState()
    const [formDesc, setFormDesc] = useState()
    const handleClick = (data) =>{
    }
    return(
        <div className="mainpage">
            <h2 onClick={handleClick}>Team Bravo's Web Form Generator</h2>
            <div className="form-info">
                <Form> 
                    <Form.Group className="mb-3 form-info-input" controlId="formBasicEmail">
                        <Form.Label>Form Title</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Enter Title" onChange={(e) => setFormTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 form-info-ta" controlId="ControlTextarea1">
                        <Form.Label>Form Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Description" onChange={(e) => setFormDesc(e.target.value)}/>
                    </Form.Group>
                </Form>
            </div>
            <div className="table-wrapper">
                <div className="table-component">
                    {data.length > 0 ? (
                        <FieldTable data={data}/>
                        ) : (
                        <div className="optional-message"> 
                            <IoIcons.IoMdAddCircleOutline className="table-svg" onClick={handleClick} />
                            <p>No Elements to show. Please add an element</p>
                        </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default MainPage;