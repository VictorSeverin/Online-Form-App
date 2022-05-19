import React, { createContext, useState, useEffect } from "react";
import service from "../../services/service";

export const FieldContext = createContext();

function FieldContextProvider(props) {

    const [finalElems, setFinalElems] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [formInfo,setFormInfo] = useState([]) 
    const [submissionMessage,setSubmissionMessage] = useState("");
    const [formId, setFormId] = useState();

    const loadInitial = (id) => {
      setFormId(id)
      service.getAllTypesByFormId(id).then(elems => {
        setFinalElems(elems.data)
      })
    }
      

    const editTitle = (t) => {
      setTitle(t)
      service.updateForm(3,t)
    }
    
    const editDescription = (d) => {
      setDescription(d)
    }
    const editSubmissionMessage = (m) =>{
      setSubmissionMessage(m)
    }
    
    const addElem = (formID, elem) => {
        console.log("Element ID: " + elem.id)
        console.log("Form ID: " + formID)
        // //TODO change to dynamic variable
         service.addTypeToForm(formID,elem).then((response) =>{
           console.log(response.data)
           setFinalElems([...finalElems, response.data])
           console.log(finalElems)
         }).then(error =>{
           console.log("Error: " + error)
         })
    }
    const createSubmission = (data,formId) =>{
      console.log(data);
      service.createSumbission(formId,data).then((response) =>{
        console.log(response.data)
      }).then(error =>{
        console.log("Error: " + error)
      })
    }

    const deleteElem = (index) => {
      console.log(finalElems[index].id)
      service.deleteType(formId, finalElems[index].id)
      const newElems = [...finalElems.slice(0,index), ...finalElems.slice(index+1)]
      setFinalElems(newElems)
      // TOOD: add server functionality as well
    }


    const editElem = (index, newElem) => {
      const newElems = [...finalElems.slice(0,index), newElem, ...finalElems.slice(index+1)]
      setFinalElems(newElems)
    }

    return (
        <FieldContext.Provider value={{finalElems, title, description, createSubmission,loadInitial, editTitle, editDescription, addElem, deleteElem, editElem,editSubmissionMessage,submissionMessage}}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default FieldContextProvider