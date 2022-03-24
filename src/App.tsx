import React,{useState,useEffect} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import FirstScreen from './Components/FirstScreen';
import Second from './Components/Second';
import {useNavigate} from 'react-router-dom'
function App() {
  const [input, setinput]=useState("");
  const [data,setdata]=useState([]);
  const [dis,setdis]=useState(true);
  const navigate=useNavigate();
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={ <FirstScreen name={input} fun={setinput} dis={dis} setdis={setdis} navigate={navigate}/>} />
        <Route path="/Second" element={<Second input={input} navigate={navigate}/>} />
       
      </Routes>
    
    
    </div>
  );
}

export default App;
