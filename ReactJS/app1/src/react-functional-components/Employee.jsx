import React from "react";
import { useState } from "react";
const Employee =()=>{
    const [emps,setemps]=useState(["sai","kumar","reddy","karadi"]);
    const handledelete=(emp)=>{
        setemps(emps.filter((employ)=>employ !==emp));
    };
    const handleedit=(emp)=>{
        setemps(emps.filter((employ)=>employ !==emp));
    };
    return(
        <div>
            <ul>
                {emps.map((emp,i)=>(
                    <li key={i} style={{margin:10}}>
                        {emp}
                        <span style={{
                            color:"blue",
                            border:"1px solid blue",
                            margin:20,
                            cursor:"pointer",
                            borderradius:"40%",
                        }}
                        onClick={()=>{
                            handledelete(emp);
                        }}
                        
                        >X</span>
                    </li>
                ))}
            </ul>
           
        </div>
    )
}
export default Employee;