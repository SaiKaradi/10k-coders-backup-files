import React from "react";
import GrandChild from "./GrandChild";
const Child =(allUsers)=>{
    return (
        <div>
            <h1>hello from Child component</h1>
            <hr/>
            <GrandChild allUsers={allUsers}/>
        </div>
    )
}
export default Child