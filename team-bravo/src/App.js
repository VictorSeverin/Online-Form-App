import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  
  const addElement = (item) => {
    console.log(item)
  }
  return (
    <div className="App">
      <Sidebar addElement={addElement} />
    </div>
  );
}

export default App;
