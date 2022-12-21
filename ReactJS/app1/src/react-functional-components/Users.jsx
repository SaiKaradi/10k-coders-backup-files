import { useState } from "react";
export function Users(){
    console.log(useState("welcome to user component"));
    const [message, setmessage]=useState("welcom to user component");
    return(
        <div>
            <h2>{message}</h2>
            <button onClick={()=>{
                setmessage("iam setmessage");
            }}
            > change message</button>
            
        </div>
    )
}