import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';


const Rest=()=>{


  const [data,setData]=useState([])

   useEffect(()=>{
            fetch()
            .then(response=>response.json())
            .then(data=>setData(data))
            console.log(data)
        },[])


        




















 return
 (<>
 
 
 
 <h2>Curd Operations</h2>
 
 
 
 
 
 </>)








}