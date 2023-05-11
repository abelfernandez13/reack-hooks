import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

const[counter, setcounter] = useState(10) 

const incrementFather= useCallback( 
    
(value) => {

setcounter((c)=> c + value); 

},[],)

  return (
 <>
   <h1>CallBack hooks:{counter} </h1>
  
  <ShowIncrement increment={incrementFather}  />

 </>
  )
}

