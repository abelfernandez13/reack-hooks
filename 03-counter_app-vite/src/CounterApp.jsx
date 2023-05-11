import  PropTypes  from "prop-types";
import { useState } from "react";


export const CounterApp =({value})=>{

const [counter,setcounter] = useState(value)

const haddlerApp=()=>{

  setcounter(counter+1);
  }
const haddlerrestApp=()=>{

    setcounter(counter-1);
}
const haddlerresetApp=()=>{

  setcounter(value);
}


return(
<>
<h1>CounterApp</h1>
<h2>{counter}</h2>
<button onClick={ haddlerApp  } > +1</button>
<button onClick={ haddlerrestApp  } > -1</button>
<button onClick={ haddlerresetApp } > reset</button>
</>
)}

CounterApp.propTypes={
value:PropTypes.number.isRequired


}