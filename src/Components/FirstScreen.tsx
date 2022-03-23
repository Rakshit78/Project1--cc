import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import {useNavigate} from 'react-router-dom'
type Props={
    name:string,
    fun:any,
    dis:boolean,
    setdis:any
    navigate:any
}
export default function FirstScreen(props:Props):any
{
    //const navigate = useNavigate()
    return <div style={{"width":"100vw","height":"100vh","display":"grid","placeItems":"center"}}>
    <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(props.name.toLowerCase())
        props.navigate('./second')
    }} style={{"width":"300px","height":"300px","background":"#e5e5e5","padding":"10px","display":"grid","placeItems":"center"}}>
        
        <TextField id="filled-basic" label="Enter Country Name" variant="filled" onChange={(event)=>{
          props.fun(event.target.value);
          if(event.target.value.length>0)
          {
              props.setdis(false);
          }
          else{
              props.setdis(true);
          }
        }}/>
       <Button variant="contained" type="submit" style={{"margin":"10px", "marginBottom":"100px"}} disabled={props.dis?true:false}>Submit</Button>

    </form>
  
    </div>



 }







 
{/**<input type='text' placeholder="Country Name" value={props.name}  style={{"padding":"10px","marginTop":"100px"}}/> */}