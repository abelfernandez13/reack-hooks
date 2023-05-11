import { useRef } from "react";

export const FocusScreen = () => {

const inputRef = useRef(); // este hook se uriliza para que las refencias sean controlables



const onClick = () => {

   //document.querySelector('select');   
  inputRef.current.select() ; 

 
}



  return (
    <>  
      <h1>FocusScreen</h1>
      <hr />
      <input type="text"
             ref={inputRef}
             placeholder="Ingrese su nombre"
             className="form-control mt-2 wd-50" 
      
      />

    <button onClick={onClick}>ref</button>


     </>
  )
}
