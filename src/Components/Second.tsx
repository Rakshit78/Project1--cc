import { useState, useEffect } from 'react'
import Third from './Third'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'
type Props = {
  input: string,
  navigate:any
}
export default function Second(props: Props) {
  const [list, setlist] = useState([]);
  const [capital,setcapital]=useState(false);
  const [loading,setloading]=useState(true);
  const [err,seterr]=useState(false);
  async function getdata(){
    try{
   const res=await fetch(`https://restcountries.com/v3.1/name/${props.input}`);
   const data=await res.json();
   setlist(data);
   setloading(false);
    }catch(e){
     console.log(e)
    }
 }
  useEffect(() => {
   getdata();
 
  }, [])
  return (
    <div style={{"width":"100vw", "height":"100vh","display":"grid","placeItems":"center"}}>
      {loading?<CircularProgress/>:<div style={{"background":"#e5e5e5","width":"400px","height":"450px","padding":"10px"}}>
      <Button variant="contained" style={{  }} onClick={()=>props.navigate("/")}>Back</Button>
      {list.map(({ capital, population, latlng, flag, flags:{png} }) => {
        return <div key={capital}>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p>Lating: {latlng}</p>
          <p>Country: {flag}</p>
          <img src={png} alt="image" width="30px" height="30px" />
         
        </div>
      })}
      <Button variant="contained" style={{ "margin": "10px", "marginBottom": "100px" }} onClick={()=>setcapital(!capital)}>Capital wheather</Button>
      {capital && <Third/>}
     </div>}
    </div>
  )
}