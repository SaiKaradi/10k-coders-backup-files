import React from "react";
import Userdetails from "./Userdetails";
const GrandChild =(allUsers)=>{
    return(
        <div>
          <h1>hello from GrandChild</h1>  
          <hr/>
          <Userdetails allUsers={allUsers}/>
        </div>
    )
}
export default GrandChild