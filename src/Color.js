import React, { useState } from 'react'

function Color(props) {

    const [color,setColor]=useState([false])
    const handleColor=()=>{
     setColor(!color) 
     
    }
  return (
    <div>
        <button onClick={handleColor} className={props.count%2===0 ? "btn btn-success" : "btn btn-danger"}>{color ? "Clicked" : "Click Again"}</button>
        
        <div>{props.count%2===0 ? <div class="card" style={{width: 300}}>
  <img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div class="card-body">
    <a href="#link2" class="card-link">Card link</a>
    <a href="#link3" class="card-link">Another link</a>
  </div>
</div> : <div class="card" style={{width: 300}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#link" class="card-link">Card link</a>
    <a href="#link2" class="card-link">Another link</a>
  </div>
</div>}
         </div>
         </div>
  )       
}

export default Color