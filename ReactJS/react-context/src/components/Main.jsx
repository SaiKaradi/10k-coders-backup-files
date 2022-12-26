import React from 'react'
import Parent from './Parent'

const Main = (allUsers) => {
  return (
    <div>
        <h1>hello from main components</h1>
        <hr/>
        <Parent allUsers={allUsers}/>

    </div>
  )
}
export default Main
