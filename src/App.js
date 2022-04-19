import React,{useState} from "react";
import Decrement from "./Decrement";
import Color from "./Color";
function App() {
  const [isBackground,setBackground] = useState(true);
  const[count,setCount]=useState(0);
  const [body,setBody] = useState(true);
  const handleCount=()=>{
    setCount(count+1);
  }

  const handleDecrement=()=>{
    setCount(count-1);
  }

  const Reset=()=>{
    setCount(count-count);
  }

  const bodyColor=()=>{
  setBody(!body);
  setBackground(!isBackground);
  }
  return (
    <div style={{backgroundColor: isBackground ? "lightcyan" : "lightpink"}}>
        <button onClick={handleCount}>Increment</button> <br/>
        <br/>
        <p>{count}</p>
<div style={{display:"inline-block"}}>
        <button style={{display:"inline-block"}} onClick={Reset}>Reset</button>
        <p style={{display:"inline-block"}}>{count !== 0 ? <div>Click here to Reset</div> : <></>}</p> 
         
        
        
            <Decrement style={{display:"inline-block"}} handleDecrement={handleDecrement}/>

<br/><br/>
            <button style={{display:"inline-block"}} onClick={bodyColor}>{body ? "LightCyan" : "LightPink"} </button>
            <br/><br/>
<Color style={{display:"inline-block"}} count={count} />
</div>


    </div>
  );
}

export default App;
