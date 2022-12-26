import React from 'react'
import { MyContextConsumer } from './MyContext'

 const Userdetails = ({allUsers}) => {
  return (
    <div>
        <MyContextConsumer> 
            {(userInfo)=>{
                return(
                    <ul>
                    {allUsers.map((user,i)=><li key={i}>{user}</li>)}
                </ul>
                );
            }}
                  
        </MyContextConsumer>

        </div>
  )
}
export default Userdetails
