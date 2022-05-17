import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";
import {useNavigate,Navigate, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import userLogo from "../Sidebar/profilepic.jpg"
import teamLogo from "../../logo.png"
import "./Dashboard.css"

export default function Dashboard() {
    let name="Jora"
    let description = "Kardan"
    let id;
    let navigate = useNavigate();
    const [forms,setForms] = useState([]);
    const [value, setValue] = useState(0);
    const redirect = (formId) =>{
         setValue(value=>value + 1); // update the state to force render
         navigate(`/forms/${formId}`)
     }
    const generateForm = (formId) =>{
        service.createForm({id,name,description})
        setValue(value + 1);
        if(forms.length!=0){
          id = forms[forms.length-1].id;
        }
        setForms([...forms, {id, name, description}])
        console.log(forms)
        navigate(`/forms/${id}`)
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
    <div className="dashboard">
      <nav className="dashboard--nav">
        <img className="dashboard--teamlogo" src={teamLogo} />
        <input type="text" name = "name" placeholder="Search" className = "input" />
        <img className="dashboard--pfp" src={userLogo} />
      </nav>

      <div className="dashboard--cards">

        {forms.map((item) => {
          return(
            <div key={item.formId} className="dashboard--card" >
              <div className="card--thumbnail"></div>
              <div className="card--info">
                <h2>{`Form: ${item.name}`}</h2>
                {/* <Link to={`/form/${item.id}`}>
                </Link> */}
                <FiIcons.FiExternalLink className="card--link-icon" onClick={() => redirect(item.id)}/>
              </div>
            </div>
          )
        })}

        <div className="dashboard--card" onClick={generateForm}>
          <div className="generate--thumbnail">
            <IoIcons.IoMdAddCircleOutline className="generate--icon"/>
          </div>
          <div className="generate--info">
            <h2>Create New Form</h2>
          </div>
        </div>

      </div>
    </div>
  )
}
