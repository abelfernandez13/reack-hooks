import  { useState } from 'react'




export const CounterApp = () => {

 const [state,setcounter] = useState({

 counter1: 10,
 counter2: 20,
 counter3: 30
  
})

const {counter1,counter2,counter3}= state


  return (
    <>
      <h1>counter:{counter1}</h1>
      <h2>counter:{counter2}</h2>
      <h3>counter:{counter3}</h3>
      
      <hr />

      <button onClick={()=>
         setcounter({ ...state, counter1:counter1 +1})}  >+1</button>

    </>
  )
}
    
   export default CounterApp
