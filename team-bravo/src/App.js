import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import ModalComp from './components/Modal/ModalComp';
import { elementSelectorParser } from 'tailwindcss/lib/lib/resolveDefaultsAtRules';

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
    console.log(elem)
    setFinalElems([...finalElems, elem])
    console.log(finalElems.length)
  }
  return (
    <div className="App">
      <Sidebar handleShow={handleShow}/>
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
