import React, { createContext, useState, useEffect } from "react";
import service from "../../services/service";

export const FieldContext = createContext();

function FieldContextProvider(props) {

    const [finalElems, setFinalElems] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        const getTasks = async () => {
          const tasksFromServer = await fetchTasks()
          setFinalElems(tasksFromServer)
        }
    
        getTasks()
    }, [])
    
      // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:8080/api/v1/types')
        const data = await res.json()
    
        console.log(data)
        return data
    }

    const editTitle = (t) => {
      setTitle(t)
      console.log("Added title: " + t)
    }
    
    const editDescription = (d) => {
      setDescription(d)
      console.log("Added description: " + d)
    }
    
    const addElem = (elem) => {
        setFinalElems([...finalElems, elem])
        console.log(elem)
        
        service.createType(elem).then((response) =>{
          console.log(response.data)
        }).then(error =>{
          console.log(error)
        })
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
        <FieldContext.Provider value={{finalElems, title, description, editTitle, editDescription, addElem, deleteElem, editElem}}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default FieldContextProvider