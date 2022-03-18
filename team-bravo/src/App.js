import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import ModalComp from './components/Modal/ModalComp';

function App() {
  const [finalElems,setFinalElems] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setFinalElems(item);
  }
  return (
    <div className="App">
      <Sidebar handleShow={handleShow}/>
      <ModalComp 
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        item={finalElems}
      />
    </div>
  );
}

export default App;
