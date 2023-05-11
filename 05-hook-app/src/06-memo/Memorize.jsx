import { useCounter } from "../hooks/useCounter";
import { Small } from "./small";

export const Memorize = () => {

const{ counter, increment} = useCounter(10); 
  return (

    <>
      <h1>counter: <Small value={counter} /> </h1>        
        
    <hr />

    <button 
    className="btn btn-primary"
    onClick={()=>increment()} >+1</button>
    </>
 )
}

