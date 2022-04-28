import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";

export default function Dashboard() {
    let name="Title1"
    let description = "desc1"
    let id = 1;
    const [forms,setForms] = useState([]);
    const handleClick = () =>{
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
      {forms.map((item) =>{
        return(
        <>
          <h1>{`Form id: ${item.id}`}</h1>
          <h2>{`Form title: ${item.name}`}</h2>
        </>
        )
      })}
    </div>
  )
}
