import React ,{useState} from 'react'

export const  Usestate=()=> {
    const [count, setcount]= useState(0)
    console.log('Usestate Render')
  return (
    <div>
        <button onClick={()=> setcount(c=> c+1)}>count-{count}</button>
        <button onClick={()=>setcount(0)}>count to 0</button>
        <button onClick={()=>setcount(5)}>count to 5</button>
    </div>
  )
}
