// Usestate will give an Array
  // We are going destructue the Array
import { useState } from "react";

export const Person =()=>{
    const [Person,setperson]=useState({
        fname:"sai",
        lname:"kumar",
        email:"sai@gmail.com",
    });
    const changespersondetails=()=>{
        let newPerson ={...Person};
        newPerson['lname']="venkata";
        setperson(newPerson);
        
    };
    return(
        <div>
            <h1>person component</h1>
            <button onclick={changespersondetails}>changespersondetails</button>
            <ul>
                <li>{Person.fname}</li>
                <li>{Person.lname}</li>
                <li>{Person.email}</li>
            </ul>
        </div>
    )
        
    
}

