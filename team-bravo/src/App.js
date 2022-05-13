import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import MainPage from'./components/MainPage/MainPage'
import ModalComp from './components/Modal/ModalComp';
import { SidebarData } from './components/Sidebar/Sidebardata';
import { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Routes, Navigate} from "react-router-dom"
import service from './services/service';
import FinalForm from './components/Form/FinalForm'
import FieldContextProvider from './components/Context/FieldContext';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [title,setTitle] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setTitle(item)
  }

  return (
    <FieldContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Navigate to="/form" />} />
            <Route path="/form" element={<Dashboard />} />
            <Route 
            path={"/forms/:id"}
            exact 
            element={           
              <>
                <Sidebar handleShow={handleShow} />
                <MainPage />
                <ModalComp 
                  handleClose={handleClose}
                  handleShow={handleShow}
                  show={show}
                  title={title} />
              </>
              } />
              <Route path="/finalform/:id" element={<FinalForm />} />
            </Routes>
        </div>
      </Router>
    </FieldContextProvider>
  );
}

export default App;
