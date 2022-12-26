import React from 'react'
import Child from './Child'

const Parent= (allUsers) => {
  return (
    <div>
        <h1>hello from parent component</h1>
        <hr/>
        <Child allUsers={allUsers}/>
    </div>
  )
}



export default Parent