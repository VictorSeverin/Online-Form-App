import React, { createContext, useState, useEffect } from "react";
import service from "../../services/service";

export const FieldContext = createContext();

function FieldContextProvider(props) {

    const [finalElems, setFinalElems] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [formInfo,setFormInfo] = useState([]) 
    const [submissionMessage,setSubmissionMessage] = useState("");
    const [formId,setFormId] = useState();
    //  useEffect(() => {
    //       console.log(formId)
    //        const getTasks = async () => {
    //        const tasksFromServer = await fetchTasks()
    //        setFinalElems(tasksFromServer)
    //      }
    //      getTasks()
    //  }, [])
    //    // Fetch Tasks
    //  const fetchTasks = async () => {
    //      let url = `http://localhost:8080/api/v1/forms/${formId}`
    //      const res = await fetch(url)
    //      const data = await res.json()
    //      return data
    //  }

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
    
    const addElem = (elem) => {
        setFinalElems([...finalElems, elem])
        console.log(elem)
    }

    const deleteElem = (index) => {
      const newElems = [...finalElems.slice(0,index), ...finalElems.slice(index+1)]
      setFinalElems(newElems)
      // TOOD: add server functionality as well
    }

    const editElem = (index, newElem) => {
      const newElems = [...finalElems.slice(0,index), newElem, ...finalElems.slice(index+1)]
      setFinalElems(newElems)
    }

    return (
        <FieldContext.Provider value={{finalElems, title, description, editTitle, editDescription, addElem, deleteElem, editElem,editSubmissionMessage,submissionMessage}}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default FieldContextProvider