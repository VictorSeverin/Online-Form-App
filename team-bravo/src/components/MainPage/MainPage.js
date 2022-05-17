import React, { useContext,useEffect,useState } from "react";
import FieldTable from "./FieldTable/FieldTable"
import * as IoIcons from "react-icons/io";
import { Form } from 'react-bootstrap'
import { FieldContext } from "../Context/FieldContext";
import { useParams } from 'react-router-dom';

function MainPage() {
    const {loadInitial, finalElems, editTitle,title,editDescription,description,editSubmissionMessage,submissionMessage} = useContext(FieldContext)
    // const {editTitle} = useContext(FieldContext)
    // const {title} = useContext(FieldContext)
    // const {editDescription} = useContext(FieldContext)
    // const {description} = useContext(FieldContext)
    const [Title,setTitle] = useState()
    const [Description,setDescription] = useState()
    let {id} = useParams();

    useEffect(() => {
        loadInitial(id)
    }, [])

   const handleClick = () =>{
  }
    return(
        <div className="mainpage">
            <h2>Team Bravo's Web Form Generator</h2>
            <div className="form-info">
                <Form > 
                    <Form.Group className="mb-3 form-info-input" controlId="formBasicEmail">
                        <Form.Label>Form Title</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Enter Title" onChange={(e) => editTitle(e.target.value)} value={title}/>
                    </Form.Group>
                    <Form.Group className="mb-3 form-info-ta" controlId="">
                        <Form.Label>Form Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Description" onChange={(e) => editDescription(e.target.value)} value={description} />
                    </Form.Group>
                    <Form.Group className="mb-3 form-info-ta" controlId="">
                        <Form.Label>Submission Message</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="The message people will see after succesfully submitting the form." onChange={(e) => editSubmissionMessage(e.target.value)} value={submissionMessage} />
                    </Form.Group>
                </Form>
            </div>
            {/* <div>
                Number of Submissions
            </div> */}
            <div className="table-wrapper">
                <div className="table-component">
                    {finalElems.length > 0 ? (
                        <FieldTable finalElems={finalElems}/>
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