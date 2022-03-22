import { useEffect,useState } from "react";
export default function Third() {
  const [list,setlist]=useState([]);
  let arr:any=[];
  async function getdata(){
    const res=await fetch(`http://api.weatherstack.com/current?access_key=f97561106c9153d29b4081f510940097&query=Delhi`);
    const data= await res.json();
    arr=[data];
    setlist(arr);
    console.log(arr);
  }
  useEffect(()=>{
    getdata()
  
  },[])
  return <div style={{"marginTop":"-100px"}}>
 
   {list.map(({current:{temperature,weather_icons,wind_speed,Trecit}})=>{
  return<div key={temperature}>
<p>Temp : {temperature}</p>
<p>Whether_icon : <img src={weather_icons} alt="logo" width="20px" height="20px"/></p>
<p>Wind_speed : {wind_speed}</p>
<p>Trecit: {Trecit}</p>
  </div>
})}
 
  </div>;
}

