import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import MainPage from'./components/MainPage/MainPage'
import ModalComp from './components/Modal/ModalComp';
import { elementSelectorParser } from 'tailwindcss/lib/lib/resolveDefaultsAtRules';
import { SidebarData } from './components/Sidebar/Sidebardata';
import { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import service from './services/service';
import FinalForm from './components/Form/FinalForm'
function App() {
  const [title,setTitle] = useState('');
  const [finalElems,setFinalElems] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setTitle(item)
  }
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

  const addElem = (elem) => {
    setShow(false)
    setFinalElems([...finalElems, elem])
    console.log(elem)
    
    service.createType(elem).then((response) =>{
      console.log(response.data)
    }).then(error =>{
      console.log(error)
    })
  }
  return (
    <Router>
      <div className="App">
        {/* <Sidebar addElement={addElement} /> */}
        <Routes>
          <Route 
          path="/"
          exact 
          element={           
            <>
              <Sidebar handleShow={handleShow} />
              <MainPage data={finalElems} />
              <ModalComp 
                handleClose={handleClose}
                handleShow={handleShow}
                show={show}
                onAdd={addElem}
                title={title} />
            </>
            } />
            <Route path='/form' element={<FinalForm data={finalElems} />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
