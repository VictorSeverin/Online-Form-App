import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";

export default function Dashboard() {
    let name="Jora"
    let description = "Kardan"
    let id;
    const [forms,setForms] = useState([]);
    const generateForm = () =>{
        service.createForm({id,name,description})
    }
    useEffect(() => {
        const getForms = async () => {
        const formsFromServer = await fetchForms()
        setForms(formsFromServer)
      }
  
      getForms()
  }, [])
  
    // Fetch Tasks
  const fetchForms = async () => {
      const res = await fetch('http://localhost:8080/api/v1/forms/')
      const data = await res.json()
  
      console.log(data)
      return data
  };

  return (
    <div>
      <button onClick={generateForm}>Generate Form</button>
      {forms.map((item) =>{
        return(
        <>
          <h1 >{`Form id: ${item.id}`}</h1>
          <h2>{`Form title: ${item.name}`}</h2>
        </>
        )
      })}
    </div>
  )
}
