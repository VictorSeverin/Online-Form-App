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
import FieldContextProvider from './components/Context/FieldContext';
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
          {/* <Sidebar addElement={addElement} /> */}
          <Routes>
            <Route 
            path="/"
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
              <Route path='/form' element={<FinalForm />} />

            </Routes>
        </div>
      </Router>
    </FieldContextProvider>
  );
}

export default App;
