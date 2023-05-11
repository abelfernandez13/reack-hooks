import { useCounter } from "../hooks/useCounter"


export const CounterAppWithCustomHook = () => {

 const {counter, increment,reset,decrement, initialValue} = useCounter();

  return (
    <>
      <h1> CounterAppWithCustomHook: {counter} </h1>
  <hr />

  <button onClick={()=>increment(2)}  className="btn btn-primary" >+1</button>
  <button onClick={reset} className="btn btn-primary" >reset</button>
  <button onClick={decrement}  className="btn btn-primary" >-1</button>  
  
    </>
  )
}

export default CounterAppWithCustomHook
