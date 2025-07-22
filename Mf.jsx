import React from 'react'
import { useState } from 'react';

const Mf=()=>
    {

    const [gender,setGender]=useState(true);


return(
<>

<button onClick={()=>{setGender(!gender)}}  style={{ color: gender?"red":"black"}}  >  Change Gender</button>

 {gender ? <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Female</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">I am female </h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> : <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Male</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Hi i am male </h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>}

</>
)


}


export default Mf;