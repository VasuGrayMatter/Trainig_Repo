import React, { children } from "react";
// {}-floor brackets for submodule of package
import { createContext,useContext,useState } from "react";

const CounterContext=createContext();

export const CounterProvider=({children})=>{

    const[count,setcount]=useState(0);
    
}

return(

    <ThemeContext.Provider value={{theme,toggletheme}}><Children/></ThemeContext.Provider>
)
}
// for toggle button to use //wrapper class to be made then make it to apply all the changes as to whole context or part of it .


