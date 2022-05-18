import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";
import {useNavigate,Navigate, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import userLogo from "../Sidebar/profilepic.jpg"
import teamLogo from "../../logo.png"
import "./Dashboard.css"
import thumbnail from "./thumbnail.png"
export default function Dashboard() {
    let name="Jora"
    let description = "Kardan"
    let id;
    let navigate = useNavigate();
    const [forms,setForms] = useState([]);

    const generateForm = () =>{
        (async() => {
          await service.createForm({id,name,description})
          const formsFromServer = await service.getAllForms()
          const latestID = formsFromServer.data[formsFromServer.data.length - 1].id

          navigate(`/forms/${latestID}`)
        })();
    }
    useEffect(() => {
        service.getAllForms().then(f => {
          setForms(f.data)
        })
  }, [])

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
              <img className="card--thumbnail" src={thumbnail}/>
              <div className="card--info">
                <h2>{`Form: ${item.name}`}</h2>
                {/* <Link to={`/form/${item.id}`}>
                </Link> */}
                <FiIcons.FiExternalLink className="card--link-icon" onClick={() => navigate(`/forms/${item.id}`)}/>
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
