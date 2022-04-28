import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";
export default function Dashboard() {
    let name="Title1"
    let description = "desc1"
    let id = 1;
    const handleClick = () =>{
        service.createForm({id,name,description})
    }
    useEffect(() => {
        const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
      }
  
      getTasks()
  }, [])
  
    // Fetch Tasks
  const fetchTasks = async () => {
      const res = await fetch('http://localhost:8080/api/v1/forms/')
      const data = await res.json()
  
      console.log(data)
      return data
  }
  return (
    <div><h1 onClick={handleClick}>Dashbord</h1></div>
  )
}
