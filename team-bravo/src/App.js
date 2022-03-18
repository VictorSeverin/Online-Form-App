import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"


import { useState } from 'react'
import MainPage from'./components/MainPage/MainPage'

function App() {
  const addElement = (item) => {
    console.log(item)
  }
  return (
    <div className="App">
      {/* <Sidebar addElement={addElement} /> */}
      <MainPage />
    </div>
  );
}

export default App;
