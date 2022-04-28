import React, { useContext } from "react";
import FieldTable from "./FieldTable/FieldTable"
import * as IoIcons from "react-icons/io";
import {useState} from "react"
import { Form } from 'react-bootstrap'
import { FieldContext } from "../Context/FieldContext";

function MainPage() {
    const {finalElems} = useContext(FieldContext)
    const {editTitle} = useContext(FieldContext)
    const {title} = useContext(FieldContext)
    const {editDescription} = useContext(FieldContext)
    const {description} = useContext(FieldContext)
    const [Title,setTitle] = useState()
    const [Description,setDescription] = useState()
    const handleChange = (e) =>{
        setTitle(e)
        editTitle(Title)
    }
    return(
        <div className="mainpage">
            <h2>Team Bravo's Web Form Generator</h2>
            <div className="form-info">
                <Form > 
                    <Form.Group className="mb-3 form-info-input" controlId="formBasicEmail">
                        <Form.Label>Form Title</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Enter Title" onBlur={(e) => editTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3 form-info-ta" controlId="ControlTextarea1">
                        <Form.Label>Form Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} placeholder="Enter Description" onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>
                </Form>
            </div>
            <div className="table-wrapper">
                <div className="table-component">
                    {finalElems.length > 0 ? (
                        <FieldTable />
                        ) : (
                        <div className="optional-message"> 
                            <IoIcons.IoMdAddCircleOutline className="table-svg" />
                            <p>No Elements to show. Please add an element</p>
                        </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default MainPage;