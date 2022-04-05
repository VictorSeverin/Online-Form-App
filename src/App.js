import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import MainPage from'./components/MainPage/MainPage'
import ModalComp from './components/Modal/ModalComp';
import { elementSelectorParser } from 'tailwindcss/lib/lib/resolveDefaultsAtRules';
import { SidebarData } from './components/Sidebar/Sidebardata';

function App() {
  const [title,setTitle] = useState('');
  const [finalElems,setFinalElems] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setTitle(item)
  }
  const addElem = (elem) => {
    setShow(false)
    setFinalElems([...finalElems, elem])
  }
  return (
    <div className="App">
      {/* <Sidebar addElement={addElement} /> */}
      <Sidebar handleShow={handleShow}/>
      <MainPage data={finalElems}/>
      <ModalComp 
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        onAdd={addElem}
        title={title}
      />
    </div>
  );
}

export default App;
