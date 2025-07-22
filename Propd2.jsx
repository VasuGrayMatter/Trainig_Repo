import React from "react";
import Comp2 from "./Propd";

const Comp1=()=>{
const user={name:"john",age:30}

    return(


<>
<h2>prop drilling</h2>
<Comp2 user={user}/>
</>




    )
}

export default Comp1;