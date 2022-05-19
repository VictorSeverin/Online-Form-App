import service from "../../services/service";
import React, { createContext, useState, useEffect } from "react";
import {useNavigate,Navigate, Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import userLogo from "../Sidebar/profilepic.jpg"
import teamLogo from "../../logo.png"
import "./Dashboard.css"
import thumbnail from "./thumbnail.png"
import Dropdown from 'react-bootstrap/Dropdown'
export default function Dashboard() {
    let name;
    let description;
    let id;
    let navigate = useNavigate();
    const [forms,setForms] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [refresh,setRefresh] = useState(false);
    const toggleShow = () => setShowToast(!showToast);
    //const [submissions,setSubmissions] = useState;
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
  //utlities for toggle menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
    //utlities for toggle menu
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  const deleteForm = (formId) =>{
    console.log("deleting form")
    var answer = window.confirm("Are you sure you want to delete the form?");
    if (answer) {
      service.deleteForm(formId).then(() => {
        service.getAllForms().then((f) => {
          // update all forms
          setForms(f.data)
        })
      })
    }
    setRefresh(value => !value)
  }
  // useEffect(() => {
  //   const getSubmissions = async (formId) => {
  //     const submissionsFromServer = await fetchSubmissions(formId)
  //     setSubmissions(submissionsFromServer)
      
  //     }
  //     getSubmissions()
  // }, [])
   const fetchSubmissions = async (formId) => {
     let url = `http://localhost:8080/api/v1/forms/${formId}/submission`
     const res = await fetch(url)
     const data = await res.json()
     //console.log(Object.keys(data[1].data))
     //console.log(data[0].data)
     const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${formId} submissions.json`;

    link.click();
  }
 
  return (
    <div className="dashboard">
      <nav className="dashboard--nav">
        <img className="dashboard--teamlogo" src={teamLogo} />
        <input type="text" name = "name" placeholder="Search" className = "nav--input" onChange={(event) => {setSearchTerm(event.target.value)}} />
        <img className="dashboard--pfp" src={userLogo} />
      </nav>

      <div className="dashboard--cards">

        {forms.filter((val) => {
          if (searchTerm == "") {
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((item) => {
          return(
            <div key={item.id} className="dashboard--card" >
              <img className="card--thumbnail" src={thumbnail}/>
              <AiIcons.AiOutlineForm className="card--form--icon"/>
              <div className="card--info">
                <h2 className="form--title">{`Form: ${item.name}`}</h2>
                {/* <Link to={`/form/${item.id}`}>
                </Link> */}
                <FiIcons.FiExternalLink className="card--link-icon" onClick={() => navigate(`/forms/${item.id}`)}/>
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle}  id="dropdown-basic">
                    <FiIcons.FiMoreVertical className="card--more" onClick={toggleShow} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item onClick={() => deleteForm(item.id)}>Delete Form</Dropdown.Item>
                    <Dropdown.Item onClick={() => fetchSubmissions(item.id)}>Export Submissions</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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