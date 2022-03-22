import React,{useState,useEffect} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import FirstScreen from './Components/FirstScreen';
import Second from './Components/Second';
function App() {
  const [input, setinput]=useState("");
  const [data,setdata]=useState([]);
  const [dis,setdis]=useState(true);

  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={ <FirstScreen name={input} fun={setinput} dis={dis} setdis={setdis}/>} />
        <Route path="/Second" element={<Second input={input} />} />
       {/* <Route path="*" element={<No />} />*/}
      </Routes>
      {data.map((res)=>{
        return <h1>{}</h1>
      })}
    
    </div>
  );
}

export default App;
