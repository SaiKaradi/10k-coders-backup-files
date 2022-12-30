import React,{Usereducer} from 'react'
const initialstate = 0
const reducer =(state, action )=>{
    switch(action){
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return initialstate
        default:return state
    }
}

export const Usereducer = () => {

    const [count, dispatch]= Usereducer (reducer,initialstate)

    console.log('usereducer render')
    
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}
